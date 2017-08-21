define({ "api": [  {    "type": "get",    "url": "/user/:id",    "title": "Retrieve a single user",    "name": "GetUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>Firstname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>Lastname of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "userName",            "description": "<p>Username of the User.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "updatedAt",            "description": "<p>The date user was updated last time.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "createdAt",            "description": "<p>The date user was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"userName\": \"jondoe\",\n  \"email\": \"jondoe@mail.com\",\n  \"updatedAt\": \"2017-08-19 19:17:36.515Z\",\n  \"createdAt\": \"2017-08-19 19:17:36.515Z\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The id of the User was not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/routes/user.routes.js",    "groupTitle": "User"  }] });
