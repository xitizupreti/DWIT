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
5)Update Password
6)Forgot & Reset Password
7)Delete User
8)Read All user
9)Read Specific user


*/
