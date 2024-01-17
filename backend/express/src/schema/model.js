import { model } from "mongoose";
import { studentSchema } from "./studentSchema.js";

// same,,student
export let Student = model("Student", studentSchema);
// array name, object name
