# simple-site

Basic site using React/NextJS/Typescript.

Deployed via AWS as a static site to a private S3 bucket. Content served via a CDN (CloudFront).

## Running development server

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) - Will refresh on changes.

## Build and view production build

Run:
```bash
yarn build
```

Then run:

```bash
yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000) - Won't refresh on changes.

What is generated and viewed here will match what will be deployed to Prod.
