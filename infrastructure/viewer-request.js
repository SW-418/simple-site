function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Handle any path that starts with /photography
    if (uri.startsWith('/photography')) {
        request.uri = '/photography/index.html';
        return request;
    }
    
    return request;
}
