# simple-site

Basic site using React/NextJS/Typescript.

Deployed via AWS as a static site to a private S3 bucket. Content served via a CDN (CloudFront).

## Setup

```bash
# Install dependencies
yarn
```

## Development

```bash
# Start development server
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000)
- Hot reload enabled
- Changes will refresh automatically

## Production Build

```bash
# Clean previous builds
yarn clean

# Build production assets
yarn build

# Serve production build
yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000)
- Static production build
- Matches deployed environment
- No hot reload
