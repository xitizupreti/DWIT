import { WebUser } from "../schema/model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { secretKey } from "../../constan.js";
import { sendEmail } from "../utils/sendMail.js";

export let createWebUser = async (req, res, next) => {
  try {
    let data = req.body;
    let hashPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };
    let result = await WebUser.create(data);
    let infoObj = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: "1d",
    };
    let token = Jwt.sign(infoObj, secretKey, expiryInfo);

    sendEmail({
      from: "`XiTiZ`<upreti.kshitiz.ku@gmail.com>",
      to: data.email,
      subject: `Account Activation`,
      html: `
          <div>
          <h1>You have successfully registered in our system.</h1>
          <a href="http:localhost:3000/verify-email?token=${token}">Click Here</a>
          <p>http:localhost:3000/verify-email?token=${token}</p>
          </div>
          `,
    });
    res.status(201).json({
      success: true,
      message: "webUser created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const verifyEmail = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    try {
      let infoObj = Jwt.verify(token, secretKey); //env
      let userId = infoObj._id;
      let result = await WebUser.findByIdAndUpdate(
        userId,
        { isVerifiedEmail: true },
        { new: true }
      );
      res.status(201).json({
        success: true,
        message: "webUser verified successfully",
        data: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
};
export const loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await WebUser.findOne({ email: email });
    if (user) {
      if (user.isVerifiedEmail) {
        let isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          let infoObj = {
            _id: user._id,
          };
          let expiryInfo = {
            expiresIn: "365d",
          };
          let token = Jwt.sign(infoObj, secretKey, expiryInfo);
          res.status(200).json({
            success: true,
            message: "User Login Successfully",
            data: user,
            token: token,
          });
        } else {
          let error = new Error("Credentials doesn't match");
          throw error;
        }
      } else {
        let error = new Error("Credentials not found.");
        throw error;
      }
    } else {
      let error = new Error("Credentials not found.");
      throw error;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const myProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let result = await WebUser.findById(_id);
    res.status(200).json({
      success: true,
      message: "Profile Read successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to read profile",
    });
  }
};
export const updateProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;
    let result = await WebUser.findByIdAndUpdate(_id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "profile updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updatePassword = async (req, res, next) => {
  try {
    let _id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let data = await WebUser.findById(_id);
    let hashPassword = data.password;
    let isValidPassword = await bcrypt.compare(oldPassword, hashPassword);
    if (isValidPassword) {
      let newHashPassword = await bcrypt.hash(newPassword, 10);
      let result = await WebUser.findByIdAndUpdate(
        _id,
        { password: newHashPassword },
        { new: true }
      );
      res.status(201).json({
        success: true,
        message: "password updated successfully",
        data: result,
      });
    } else {
      let error = new Error("credentials doesn't match");
      throw error;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let readWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.find({});
    res.status(200).json({
      success: true,
      message: "webUser get successfully",
      data: result,
    });
  } catch {
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
};
export let readWebUserById = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await WebUser.findById(id);
    res.status(200).json({
      success: true,
      message: " specific webUser get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let updateSpecificWebUser = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  delete data.email;
  delete data.password;
  try {
    let result = await WebUser.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "webUser updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteWebUser = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await WebUser.findByIdAndDelete(id);
    if (result === null) {
      res.status(400).json({
        success: false,
        message: "WebUser does not exist",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "WebUser deleted successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await WebUser.findOne({ email: email });

    if (!result) {
      res.status(400).json({
        success: false,
        message: "email does not exist",
      });
    } else {
      let infoObj = {
        _id: result._id,
      };
      let expiryInfo = {
        expiresIn: "1d",
      };
      let token = Jwt.sign(infoObj, secretKey, expiryInfo);
      sendEmail({
        from: "`XiTiZ`<upreti.kshitiz.ku@gmail.com>",
        to: email,
        subject: `Reset Password`,
        html: `
          <div>
          <h1>Reset your password</h1>
          <a href="http:localhost:3000/verify-email?token=${token}">Click Here</a>
          <p>http:localhost:3000/verify-email?token=${token}</p>
          </div>
          `,
      });
      res.status(200).json({
        success: true,
        message: "Link sent successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let resetPassword = async (req, res, next) => {
  try {
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    let result = await WebUser.findByIdAndUpdate(
      req._id,
      { password: hashPassword },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "password reset successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
