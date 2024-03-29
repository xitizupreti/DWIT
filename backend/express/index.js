import express, { json } from "express";
import firstRouter from "./src/route/firstRouter.js";
import traineesRouter from "./src/route/traineesRouter.js";
import { connectToMongodb } from "./src/connect/connectToMongodb.js";
import { studentRouter } from "./src/route/studentRouter.js";
import { contactRouter } from "./src/route/contactRouter.js";
// import Jwt from "jsonwebtoken";
import { port, token } from "./constan.js";
import { productRouter } from "./src/route/productRouter.js";
import { webUserRouter } from "./src/route/webUserRouter.js";
import { fileRouter } from "./src/route/fileRouter.js";

let expressApp = express();
expressApp.use(json());
expressApp.use(express.static("./public"));
connectToMongodb();
expressApp.get("/", function (req, res) {
  res.send("Test on local");
});

//Application MiddleWare
// expressApp.use((req, res, next) => {
//   console.log("Application Middleware");
//   next();
// });
//Router MiddleWare
expressApp.use("/bike", firstRouter);
expressApp.use("/traineesRouter", traineesRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/contacts", contactRouter);
expressApp.use("/products", productRouter);
expressApp.use("/webUsers", webUserRouter);
expressApp.use("/files", fileRouter);

expressApp.listen(port, () => {
  console.log("done");
});

//generate token
// let infoObj = {
//   _id: "123",
// };
// let expiryinfo = {
//   expiresIn: "365d",
// };
// let token = Jwt.sign(infoObj, secretKey, expiryinfo);
// console.log(token);

//validate token
// try {
//   let inObj = Jwt.verify(token, "dw11"); //env
//   console.log(inObj);
// } catch (error) {
//   console.log(error.message);
// }
