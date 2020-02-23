var express = require('express');

var controller = require('./auth.controller');
var router = express.Router();

/**
 * @api {post} /auth/login A. Login -POST
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 *
 *  @apiDescription 
 *   Possible values for user status : 1: active, 0: inactive
 *  
 *   Possible values for user role   : 0: Admin, 1: Vendor, 2: Consumer
 * 
 *  @apiExample Example usage:
 *
 *     url : /auth/login
 *     body:
        {
            "username"    : "henry404",
            "password"    : "abc111",
            "deviceType"  : "android",
            "deviceToken" : "237864bcvhxmhvxvbvxcnbvmcbvmbdfhvbhfvhfdvkdfkvdk"
        }
 *
 * @apiParam {String} username      username.
 * @apiParam {String} password      password.
 * @apiParam {String} deviceType    Device Type.
 * @apiParam {String} deviceToken   Device Token.
 * 
 * @apiSuccess {Object} payload       Login user Data.
 * @apiSuccess {Boolean} success      Boolean Success response.
 * @apiSuccess {String} message       Message response.
 * @apiSuccess {String} token         Authorization Token.
 * @apiSuccess {Number} code          Response status code.
 * 
 * @apiSuccessExample Success Response
 *    {
    "payload": {
        "userId": 6,
        "username": "henry404",
        "firstName": "Henry",
        "lastName": "James",
        "email": "henry@gmail.com",
        "countryCode": "+60",
        "phone": "47357585475",
        "address": "A-101, Sun Street",
        "city": "Kuala Lumpur",
        "state": "Kuala Lumpur",
        "zipCode": "50200",
        "loginTimes": 14,
        "profilePictureLink": null,
        "gender": null,
        "dateOfBirth": null,
        "deviceType": "android",
        "deviceToken": "237864bcvhxmhvxvbvxcnbvmcbvmbdfhvbhfvhfdvkdfkvdk",
        "status": 1,
        "role": 1,
        "deletedAt": null,
        "createdAt": "2019-10-10T11:40:16.000Z",
        "updatedAt": "2019-10-30T06:57:39.000Z"
    },
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTU3MjQyMDU0NSwiZXhwIjoxNTcyNDMwNTQ1fQ.f_Eayj9nv25gln8BkLwQfkSR-U21QR8wACJ3MGB7h6E",
    "success": true,
    "message": "Log in Successfull.",
    "code": 200
}

 * @apiErrorExample Error Response
{
    "success": false,
    "message": [
        {
            "location": "body",
            "param": "deviceType",
            "msg": "Device Type is required"
        },
        {
            "location": "body",
            "param": "deviceType",
            "msg": "Currently only acceptable device types are ios and android"
        },
        {
            "location": "body",
            "param": "deviceToken",
            "msg": "Device Token is required"
        }
    ]
}

@apiErrorExample Error Response
{
    "success": false,
    "message": "Wrong password",
    "code": 500
}
 */
router.post("/login", controller.login);

/**
 * @api {post} /auth/signup B. Sign up -POST
 * @apiName Sign up
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 *
 *  @apiDescription 
 *   The API will by default create an entry in the db for role cosumer and status active i.e: {
 *    role : 2, 
 *    status: 1}
 * 
 *  @apiExample Example usage:
 *
 *     url : /auth/signup
 *     body:
        {    
            "email"         : "janice@janice.com",
            "gender"        : "Female",
            "dateOfBirth"   : "1996-10-10 17:10:16",
            "phone"         : "893789438",
            "username"      : "janice404",
            "password"      : "abc111",
            "deviceType"    : "android",
            "deviceToken"   : "237864bcvhxmhvxvbvxcnbvmcbvmbdfhvbhfvhfdvkdfkvdk"
        }
 *
 * @apiParam {String} username          username.
 * @apiParam {String} email             email.
 * @apiParam {String} gender            gender.
 * @apiParam {DateTime} dateOfBirth     Date Of Birth.
 * @apiParam {String} phone             phone.
 * @apiParam {String} password          password.
 * @apiParam {String} deviceType        Device Type.
 * @apiParam {String} deviceToken       Device Token.
 * 
 * @apiSuccess {Object} payload       Login user Data.
 * @apiSuccess {Boolean} success      Boolean Success response.
 * @apiSuccess {String} message       Message response.
 * @apiSuccess {Number} code          Response status code.
 * 
 * @apiSuccessExample Success Response
 *    {
    "payload": {
        "deletedAt": null,
        "userId": 14,
        "email": "kenny@abc.com",
        "gender": "Male",
        "dateOfBirth": "1996-10-10T11:40:16.000Z",
        "phone": "4355654546",
        "username": "kenny101",
        "deviceType": "android",
        "deviceToken": "237864bcvhxmhvxvbvxcnbvmcbvmbdfhvbhfvhfdvkdfkvdk",
        "role": 2,
        "status": 1,
        "loginTimes": 1,
        "updatedAt": "2019-11-04T07:01:22.002Z",
        "createdAt": "2019-11-04T07:01:22.002Z"
    },
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE1NzI4NTA4ODIsImV4cCI6MTU3Mjg2MDg4Mn0.1n35mMu0v0yJntsqj8jXRO1J3q1auDPFLQS9H6Om1jk",
    "success": true,
    "message": "User added successfully.",
    "code": 200
}

 * @apiErrorExample Error Response
{
    "success": false,
    "message": [
        {
            "location": "body",
            "param": "username",
            "msg": "Username is required"
        },
        {
            "location": "body",
            "param": "phone",
            "msg": "Phone is required"
        }
    ],
    "code": 400
}

@apiErrorExample Error Response
{
    "success": false,
    "message": "Validation error",
    "code": 400
}
 */
router.post("/signup", controller.consumerSignup);


module.exports = router;