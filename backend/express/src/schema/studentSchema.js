import { Schema } from "mongoose";

export let studentSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
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
  gender: {
    type: String,
    default: "true",
    required: [true, "Gender is required"],
    validate: (value) => {
      if (value === "male" || value === "female" || value === "other") {
      } else {
        throw new Error("gender invalid");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    // validate: (value) => {
    //   if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/.test(value)) {
    //   } else {
    //     throw new Error(
    //       "password must have 1 number, one lower case, one uppercase , one symbol, min 8 character, max 15 character"
    //     );
    //   }
    // },
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: [true, "Number is required"],
    validate: (value) => {
      if (String(value).length == 10) {
      } else {
        throw new Error("Number Length invalid");
      }
    },
  },
  roll: {
    type: Number,
    required: [true, "Roll is Required"],
    min: [10, "roll must me > 10"],
    max: [20, "roll must me < 20"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "Status is Required"],
  },
  spouseName: {
    type: String,
    required: [true, "spouse is Required"],
    uppercase: true, // uppercase
  },
  email: {
    //
    type: String,
    required: [true, "email is Required"],
    unique: true, // unique
    validate: (value) => {
      if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
      } else {
        throw new Error("invalid email");
      }
    },
  },
  dob: {
    type: Date,
    required: [true, "DOB is Required"],
  },
  location: {
    country: {
      type: String,
      require: [true, "Country is required"],
    },
    exactLocation: {
      type: String,
      require: [true, "Location is required"],
    },
  },
  favTeacher: [
    {
      type: String,
    },
  ],
  favSubject: [
    {
      bookName: { type: String },
      bookAuthor: {
        type: String,
      },
    },
  ],
  favNumber: [
    {
      type: Number,
    },
  ],
  favPerson: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  favFood: [
    {
      name: {
        type: String,
      },
    },
  ],
});
