import { model } from "mongoose";
import { studentSchema } from "./studentSchema.js";
import { contactSchema } from "./contactsSchema.js";
import { productSchema } from "./productSchema.js";
import { WebUserSchema } from "./webUserSchema.js";

// same,,student
export let Student = model("Student", studentSchema);
export let Contact = model("Contact", contactSchema);
export let Product = model("Product", productSchema);
export let WebUser = model("WebUser", WebUserSchema);
// array name, object name

// Model name must be singular and 1st Letter Capital
