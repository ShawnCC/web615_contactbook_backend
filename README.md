# WEB615 Contact Book #

Server side code for the Contact Book app

## Setup ##

The following are required as global dependencies:

* NodeJS

To install the local dependencies for the app run ``` npm i ```

## Endpoints ##

### Contacts ###

***NOTE:** These endpoints now require authentication via JWT that should be included in the Authorization key in the request headers. JWT is returned in login request.*

* GET /api/v1/contacts/
* GET /api/v1/contacts/:contactId/
* POST /api/v1/contacts/
* PUT /api/v1/contacts/:contactId/
* DELETE /api/v1/contacts/:contactId/

## Users ##

* GET /api/v1/users/
* GET /api/v1/users/:userId/contacts/
* POST /api/v1/users/
* POST /api/v1/users/login/
* PUT /api/v1/users/:userId/
* DELETE /api/v1/users/:userId/
