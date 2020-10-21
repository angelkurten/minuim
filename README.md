<p align="center">
  <a href="https://mensajerosurbanos.com/" target="blank"><img src="https://i2.wp.com/capplatam.com/wp-content/uploads/2019/10/Logo-MU.png?w=920&ssl=1" width="320" alt="Nest Logo" /></a>
</p>

## Description

MU System contains the project for the Mensajeros Urbanos platform, including

- mu-platform: Core modules
<<<<<<< HEAD
- realtime: The realtime service
=======
>>>>>>> 9f1fb5c0e55e01cdcee1c389898e4f44af74be71
- mu-web: The Web UI of the platform

## Installation

```bash
$ yarn install
```

## Environment Configuration

Create a **.env** file in the root directory of the project and complete the next variables:
**Ask some partner for the development configuration file.**

```bash
# LUPAP CONFIGURATION
LUPAP_URL=
LUPAP_USER=
LUPAP_PASSWORD=

# GOOGLE GEOCODE CONFIGURATION
GOOGLE_GEOCODE_KEY=

# WEB SERVER PORT
PORT=4000

# INFLUX CONFIGURATION
INFLUX_HOST=localhost
INFLUX_DB=MU

# DB CONFIGURATION
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

# FEATURE FLAG SERVER CONFIGURATION
CONFIG_SERVER_URL=
CONFIG_SERVER_ID=
CONFIG_SERVER_ENVIRONMENT=

# PHALCON API AUTHENTICATION SERVER
AUTH_SERVER_URL=

# RETHINKDB CONFIGURATION
HOST_RETHINKDB=
PORT_RETHINKDB=
DATABASE_RETHINKDB=

# AUTHENTICATION PHALCON API CONFIGURATION
AUTH_CLIENT_ID_MESSENGER=
AUTH_CLIENT_SECRET_MESSENGER=
URL_AUTHENTICATION=

# PHALCON API GET PROFITS MESSENGERS
GET_PROFITS_URL_API=

# IS REQUIRED SEGMENTATION DATAPHONE FOR TASK
IS_REQUIRED_FEATURE_DATAPHONE_TASKS=
```

## Running the app

```bash
# development
$ yarn start:dev

# debug mode
$ yarn run start:debug

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## How to generate GRPC Clients

**Docker is required to execute these tasks, make sure to have it installed before executing them.**

To generate the GRPC clients you need to find the correct task according to the technology and execute the command.
After execution, you will find the generated client in the `apps/mu-platform/src/gen` folder in the root directory.

- gen:grpc:web
- gen:grpc:php
- gen:grpc:java
- gen:grpc:python
- gen:grpc:node

## Guidelines

- [How to create a new Module](https://gitlab.com/mu-team/internal-documentation/-/wikis/Creaci%C3%B3n-nuevo-m%C3%B3dulo)
- Run command on yarn to ignore spr and post running scripts
- Avoid var usage
- Favor immutability
