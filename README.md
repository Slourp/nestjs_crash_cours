
# NestJS Crash Course Project

## Introduction 📚

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. This crash course project will help you understand the core concepts of NestJS while building a real-world application.

## Learning Objectives 🎯

- Understand the fundamentals of NestJS.
- Learn how to set up a NestJS project.
- Understand how to create modules, controllers, and services in NestJS.
- Learn how to implement user authentication using JWT or OAuth2.
- Understand how to integrate with external APIs.
- Learn how to set up a database with TypeORM and PostgreSQL.
- Understand how to implement scheduled tasks in NestJS.

## Tasks Checklist ✅

### Backend (API with NestJS) 🚀

- [ ] Install NestJS CLI and create a new project.
- [ ] Understand the project structure and main components: modules, controllers, and services.
- [ ] Set up user authentication:
  - [ ] Install and configure Passport module.
  - [ ] Implement JWT strategy for authentication.
- [ ] Create User module, controller, and service.
- [ ] Implement endpoints for user registration, login, and profile update.
- [ ] Create a new module, controller, and service for a chosen feature (e.g., blog posts, products, etc.).
- [ ] Implement CRUD operations for the chosen feature.
- [ ] Integrate with an external API (if applicable).
- [ ] Set up TypeORM and PostgreSQL:
  - [ ] Install and configure TypeORM.
  - [ ] Define entities for User and the chosen feature.
  - [ ] Implement database operations in the services.
- [ ] Implement error handling and validation:
  - [ ] Use built-in NestJS validation pipe.
  - [ ] Handle common HTTP exceptions.
- [ ] Implement scheduled tasks (if applicable):
  - [ ] Install and configure the Schedule module.
  - [ ] Create a task for a periodic operation (e.g., data update, cleanup, etc.).
- [ ] Write unit tests for the services and controllers:
  - [ ] Install and configure Jest.
  - [ ] Write tests for the main operations.
  - [ ] Run and debug the tests.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
