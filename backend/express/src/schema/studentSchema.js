import { Schema } from "mongoose";

export let studentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isMarried: {
    type: Boolean,
    required: true,
  },
});
