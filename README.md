# CEP Service

This project was build in NodeJS with typescript template and it is structured like following:

```
└── src
    ├── modules                       /* specific to domain group */
    │   └── moduleName
    │       ├── infra                 /* infrastructure layer */
    │       |   ├── database
    │       |   |   ├── entities      /* database entitites */
    │       |   |   └── repositories  /* connect to database */
    │       |   └── http
    │       |       └── routes
    │       ├── repositories          /* repositories interfaces */
    │       └── services              /* bussiness rules */
    ├── shared                        /* shared to modules */
    │   ├── container                 /* dependency injection manager */
    │   ├── errors                    /* custom errors*/
    │   ├── infra                     /* infrastructure layer */
    │   |   ├── database              /* database connections */
    │   |   └── http                  /* http protocol */
    │   |       ├── middlewares
    │   |       ├── routes
    │   |       └── server
    │   └── utils
    └── server
```

## Requirements
* [NodeJS](https://nodejs.org/) (Currently using v12.18.3)
* [Yarn](https://yarnpkg.com/) (Current using v1.22.5)

## Technologies
* [NodeJS](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
  * [ts-node-dev](https://github.com/whitecolor/ts-node-dev)
  * [tsconfig-paths](https://github.com/dividab/tsconfig-paths)
  * [tsyringe](https://github.com/microsoft/tsyringe)
* [express](https://expressjs.com/)
* Tests
  * [Jest](https://jestjs.io/)
  * [supertest](https://github.com/visionmedia/supertest)
  * [ts-jest](https://github.com/kulshekhar/ts-jest)

## Code Patterns
In this project, are used some patterns to mantain code organization:
* [EditorConfig](https://editorconfig.org/)
* [ESLint](https://eslint.org/) (*AirBNB style guide*)
* [Prettier](https://prettier.io/)

If you are using Visual Studio Code, install [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and remove **Prettier - Code Formatter** extension, because it could cause some incompatibilities with other configurations.

## Getting Started
### Project setup
Install it by cloning this repository.
```
git clone git@github.com:tmegumi/luizalabs-cep-service-test.git your-project-name
```
Install the dependencies
```
yarn
```
### Running
Start the application using the yarn command
```
yarn dev:server
```

## Miscellaneous
### Code Editor
Feel free to use whichever editor you like but we strongly recommend you to use Visual Studio Code as it has a large number of plugins ready to use and works great with this project's configuration files.
