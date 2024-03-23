*identification*
This simple app allows any anonymous person to send a message to your account without making an account 


*How to initialize*

First: npm install

Second: you need to configure these variables for .env file :
SECRET_SESSION=
MONGO_CONN=
MONGO_COLLECTION=
PORT=

the tool used in validation is Joi

and for authentication I used express-session which sends the session ID to Mongo Database by using connect-MongoDB-session

This app can be easily modified to meet specific business needs.
