## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## ENV neaded

PORT=...
DB_HOST=...
DB_PORT=...
DB_USERNAME=...
DB_PASSWORD=...
DB_NAME=...
JWT_SECRET=...
SMTP_FROM=...
SMTP_USER=...
SMTP_PASS=...
FRONTEND_URL=...
IMAGE_UPLOAD_DESTINATION=...

## SAVING FILES ON SYSTEM (UBUNTU/LINUX)

sudo mkdir -p /var/www/uploads/articles
sudo chown -R $USER:$USER /var/www/uploads
sudo chmod -R 755 /var/www/uploads
