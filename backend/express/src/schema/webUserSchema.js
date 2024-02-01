import { Schema } from "mongoose";

export let WebUserSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName is Required"],
      lowercase: true, //lower
      trim: true, // trim space in both sides
      minLength: [3, "must be at least 3 long"],
      maxLength: [10, "must be at least 10 long"],
      validate: (value) => {
        if (/^[a-zA-Z]+$/.test(value)) {
        } else {
          throw new Error("String only");
        }
      },
    },
    email: {
      //
      type: String,
      required: [true, "email is Required"],
      // unique: true, // unique
      validate: (value) => {
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        } else {
          throw new Error("invalid email");
        }
      },
    },
    password: {
      type: String,
      required: [true, "password is Required"],
    },
    dob: {
      type: Date,
      required: [true, "dob is Required"],
    },
    gender: {
      type: String,
      default: "true",
      required: [true, "gender is required"],
      validate: (value) => {
        if (value === "male" || value === "female" || value === "other") {
        } else {
          throw new Error("gender invalid");
        }
      },
    },
    role: {
      type: String,
      required: [true, "role is Required"],
    },
    isVerifiedEmail: {
      type: Boolean,
      // required: [true, "isVerifiedEmail is Required"],
    },
  },
  { timestamps: true } // created at, updated at automatically
);
