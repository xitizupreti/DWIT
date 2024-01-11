import { Router } from "express";

let firstRouter = Router();
firstRouter
  .route("/name")
  .get(() => {
    console.log("GET");
  })
  .post(() => {
    console.log("POST");
  })
  .patch(() => {
    console.log("PATCH");
  })
  .delete(() => {
    console.log("DEL");
  });

firstRouter
  .route("/address")
  .get(() => {
    console.log("GET");
  })
  .post(() => {
    console.log("POST");
  })
  .patch(() => {
    console.log("PATCH");
  })
  .delete(() => {
    console.log("DEL");
  });

firstRouter
  .route("/age")
  .get(() => {
    console.log("GET");
  })
  .post(() => {
    console.log("POST");
  })
  .patch(() => {
    console.log("PATCH");
  })
  .delete(() => {
    console.log("DEL");
  });

firstRouter
  .route("/height")
  .get(() => {
    console.log("GET");
  })
  .post(() => {
    console.log("POST");
  })
  .patch(() => {
    console.log("PATCH");
  })
  .delete(() => {
    console.log("DEL");
  });

export default firstRouter;
