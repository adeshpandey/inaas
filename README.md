# Incrementing Integers As A Service

### Front-end code
  * src   -> react source code
  * public -> any public media

### Back-end code
  * serverless.yml -> entry point 
  * resources -> aws resource definitions

### How to get started

#### Prerequisites
I assume you have already setup aws profile on your machine with following permissions:

* Lambda full access
* Cloudformation
* DynamodbFullAccess
* APIGateway
* IAMFullAccess
* CognitoPowerAccess
or
* Admin full access

and serverless framework is installed

#### Installation
* clone the repo
* cd repo
* npm i
* sls deploy -> to create aws resources
* npm start -> start the frontend
