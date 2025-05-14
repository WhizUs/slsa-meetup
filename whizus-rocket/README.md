# WhizUs SPACESHIP Demo Application

## Use-Case

This demo application is used for workshop and meetup purposes.

## start application

In order to run the application for developing purposes, do following steps in the right order:

### Install node modules 

```
yarn install
```

### Set required environment variables

| NAME | DESCRIPTION |
|---|---|
| APP_NAME | name of the application |
| PORT | application's listened port |
| TARGET_HOST | name of target host |
| TARGET_PORT |  target application's listened port |

### Run the application

```
export APP_NAME=whizus-spaceship-1
export PORT=5001
yarn dev
```

### Send rockets

```bash
curl -X POST http://localhost:5001/destination -d '{ "source_host":"whizus-spaceship-2" }' -H "Content-Type: application/json"
```
