import { Schema } from "mongoose";

export let studentSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  roll: {
    type: Number,
    required: [true, "Roll is Required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "Status is Required"],
  },
  spouseName: {
    type: String,
    required: [true, "spouse is Required"],
  },
  email: {
    type: String,
    required: [true, "email is Required"],
    unique: true,
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
