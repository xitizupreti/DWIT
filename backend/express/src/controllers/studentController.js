import { Student } from "../schema/model.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendMail.js";

export let createStudent = async (req, res, next) => {
  let data = req.body;
  let pw = data.password;

  let hashPassword = await bcrypt.hash(pw, 10);
  // console.log(hashPassword);
  data.password = hashPassword;
  try {
    let result = await Student.create(data);
    // sendEmail({
    //   to: [data.email],
    //   subject: `i hate you ${i}`,
    //   html: `
    //       <div>
    //       <p>You have successfully registered in our system.</p>
    //       </div>
    //       `,
    // });
    res.json({
      success: true,
      message: "student created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readStudent = async (req, res, next) => {
  try {
    let result = await Student.find({
      // name: "xitiz",
      // roll: { $in: [20, 25, 30] },
    }).select("name gender password -_id");
    //gt, gte>= , lt, lte ,ne
    res.json({
      success: true,
      message: "student get successfully",
      result: result,
    });
  } catch {
    res.json({
      success: false,
      message: "failed to get data",
    });
  }
};

export let readStudentById = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Student.findById(id);
    res.json({
      success: true,
      message: "student get successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateStudent = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let result = await Student.findByIdAndUpdate(id, data, { new: true });
    res.json({
      success: true,
      message: "student updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudent = async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await Student.findByIdAndDelete(id);
    if (result === null) {
      res.json({
        success: false,
        message: "Student does not exist",
      });
    } else {
      res.json({
        success: true,
        message: "Student deleted successfully",
        result: result,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
