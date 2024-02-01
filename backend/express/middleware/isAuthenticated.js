import Jwt from "jsonwebtoken";
import { secretKey } from "../constan.js";

export let isAuthenticated = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let user = await Jwt.verify(token, secretKey);
    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token not valid",
    });
  }
};
