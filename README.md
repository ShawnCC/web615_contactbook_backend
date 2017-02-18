# WEB615 Contact Book #

Server side code for the Contact Book app

## Setup ##

The following are required as global dependencies:

* NodeJS

To install the local dependencies for the app run ``` npm i ```

## Endpoints ##

## Users ##

* GET /api/v1/users/:userId/ - *This endpoint is secured via an API key, the API key of the model must be passed in the headers in the authorization property, if it's not provided an error is returned*
* POST /api/v1/users/

## Assignment 3 ##

The following was included in the project for Assignment 3:

* The api_key property was added to the user model
* A hook was included in the user model to generate a value for the api_key property of the user being created
* In the route to get a user by ID (/users/api/v1/users/:userId/) the user is retrieved from the database, then the api_key of that user is compared against the authorization property of the request headers, if they don't match the request is invalid and an error is returned, if they do match the request continues and the user is returned
