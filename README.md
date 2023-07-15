# Sylvr-Docker-Compose-Assignment

All The Api's And Pages were added according to assignment

CRUD Operations is availbale in the code on mongoDb Atlas

To run the application on docker , 
1. Clone this repository =>  git clone https://github.com/ravijaat2917/Sylvr-Docker-Compose-Assignment.git
2. enter in application folder => cd Sylvr-Docker-Compose-Assignment/
3. run command  => < docker compose up > 
4. go to localhost 3000 to the react application.


Backend Api's
1. 🔴 Post \\ Register User 
   ✅ http://localhost:8080/user/register
   
   --  Body contains json data like :
    {
    "firstName": "Ravi",
    "lastName": "Lour",
    "email": "ravi@gmail.com",
    "password": "ravi"
    }
   
   -- Response Example
   {
    "success": true,
    "message": "User Register Successfully",
    "user": {
        "firstName": "Ravi",
        "lastName": "Lour",
        "email": "ravi@gmail.com",
        "password": "$2a$10$jUUKqSkxZvjdVcpnFtXKc.w3ziNczp.YNcSEcInDqzr.afHQXSYdW",
        "_id": "64b29f66edc98f00949b46f2",
        "__v": 0
    }
   }


2. 🔴 POST \\ Login Api
   ✅ http://localhost:8080/user/login

   --  Body contains json data like :
   {
    "email": "ravi@gmail.com",
    "password": "ravi"
   }

   -- Response Example
   {
    "success": true,
    "message": "login successfully",
    "user": {
        "_id": "64b29f66edc98f00949b46f2",
        "firstName": "Ravi",
        "lastName": "Lour",
        "email": "ravi@gmail.com",
        "password": "$2a$10$jUUKqSkxZvjdVcpnFtXKc.w3ziNczp.YNcSEcInDqzr.afHQXSYdW"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIyOWY2NmVkYzk4ZjAwOTQ5YjQ2ZjIiLCJpYXQiOjE2ODk0MjgwMzAsImV4cCI6MTY5MDAzMjgzMH0.17LDt8tYAlAVmGG9ZDjc3jnMJ_t6QLgh7OJQV2xJfsU"
    }

   3. 4. 🔴 Api's for getting the user data and update with post method and send unique _id from client side.
