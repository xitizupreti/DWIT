/*
# Login Management:

1)Register
 a)fullName
 b)email
 c)password
 d)dob
 e)gender
 f)role => admin, superAdmin, customer 
 g)isVerifiedEmail
  i)postman sends token
  ii)get token
  iii)verify token
  iv)get _id from token
  v)make isVerifiedEmail True
2)Login
 a)email and password
 b)check if email exist
 c)check isVerifiedEmail
 d)password match
 e)generate token(hide _id)
 f)send token to postman
3)My Profile
 a)pass token from postman
 b)get token from postman
 c)validate token
 d)get _id from token
 e)find details using _id
 f)pass _id to another middleware
4)My Profile Update
 a)pass token through isAuthenticated
 b)get _id and update profile(del mail&pw)
5)Update Password
 a)pass token through isAuthenticated
 b)pass _id and get data from body(old&new password)
 c)hash new password and update database
6)Read All user
7)Read Specific user
8)Delete User
9)Update specific user
10)Forgot & Reset Password
 a)forgot pw
  i)pass email from postman
  ii)check email exist
  iii)send email with link(frontend link with token)
  iv)send response
 b)reset pw
  i)pass token from postman
  ii)pass password through postman
  iii)pass through isAuthenticated
  iv)get _id
  v)hash password
  vi)update _id
  vii)send response

# success code:
 2xx
 read, delete = 20
 create, update = 201

# error code:
 400
 401 = token not valid, credential not match
 403 = token is valid but not authorized
 404 = api not found
 409 = conflict like duplicate email
*/
