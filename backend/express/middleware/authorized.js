import { WebUser } from "../src/schema/model.js";

export let authorized = (roles) => {
  return async (req, res, next) => {
    try {
      let result = await WebUser.findById(req._id);
      let tokenRole = result.role;
      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "User not Authorized",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "User is not authorized",
      });
    }
  };
};
