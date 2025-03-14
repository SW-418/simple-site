// Import the handler function - We need to do this because the handler function causes an error when exported due to CloudFront
const rewire = require("rewire");
const myModule = rewire("./viewer-request.js");

describe('CloudFront URL Rewriter', () => {
    test('should map /photography/ to /photography/index.html', () => {
        const event = {
            request: {
                uri: '/photography/',
                headers: {},
                querystring: '',
                method: 'GET'
            }
        };
        const result = myModule.__get__('handler')(event);
        expect(result.uri).toBe('/photography/index.html');
    });

    test('should not modify root path', () => {
        const event = {
            request: {
                uri: '/',
                headers: {},
                querystring: '',
                method: 'GET'
            }
        };
        const result = myModule.__get__('handler')(event);
        expect(result.uri).toBe('/');
    });

    test('should handle paths with query parameters', () => {
        const event = {
            request: {
                uri: '/photography/',
                headers: {},
                querystring: 'param=value',
                method: 'GET'
            }
        };
        const result = myModule.__get__('handler')(event);
        expect(result.uri).toBe('/photography/index.html');
    });
}); 
