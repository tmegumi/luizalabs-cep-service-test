# CEP Service

This project is an address search service by CEP for authenticated users and is build in NodeJS with TypeScript template, structured like following:

```
└── src
    ├── config                        /* configurations */
    ├── modules                       /* specific to domain group */
    │   └── moduleName                /* domain group */
    │       ├── infra                 /* infrastructure layer */
    │       |   ├── database          /* database logic */
    │       |   |   ├── entities      /* database entitites */
    │       |   |   └── repositories  /* connect to database */
    │       |   └── http              /* http protocol */
    │       |       ├── controllers   /* specific controllers */
    │       |       └── routes        /* specific routes */
    │       ├── repositories          /* specific repositories */
    │       |   └── fakes             /* fake repositories */
    │       └── services              /* bussiness rules */
    └── shared                        /* shared to modules */
        ├── container                 /* dependency injection manager */
        ├── errors                    /* custom errors */
        ├── infra                     /* infrastructure layer */
        |   ├── database              /* general database logic */
        |   └── http                  /* http protocol */
        |       ├── middlewares       /* general middlewares */
        |       ├── routes            /* general routes */
        |       ├── swagger           /* API documentation */
        │       |   ├── routes        /* documentation routes */
        │       |   └── index         /* swagger documentation */
        |       └── server            /* main application */
        └── utils                     /* usefull functions */
```

## Requirements
* [NodeJS](https://nodejs.org/) (Currently using v12.18.3)
* [Yarn](https://yarnpkg.com/) (Current using v1.22.5)

NodeJS was chosen for this project because it is light, fast and powerful. As I am studying more about NodeJS, I found it particularly easier to build an application quickly with it.

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

If you are using Visual Studio Code, install [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and remove **Prettier - Code Formatter** extension, because it could cause some incompatibilities with some ESLint configurations.

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
Start the application in development mode using the yarn command:
```
yarn dev:server
```
The application will start on 3333 port.
To see Swagger documentation access `/api-docs` route.

### Testing

To test the application, use the command:
```
yarn test
```
You can see coverage report on coverade folder.


## Miscellaneous
### Code Editor
Feel free to use whichever editor you like but we strongly recommend you to use Visual Studio Code as it has a large number of plugins ready to use and works great with this project's configuration files.
