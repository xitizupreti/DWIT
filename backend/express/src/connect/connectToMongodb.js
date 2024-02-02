import mongoose from "mongoose";
import { MONGO_URL } from "../../constan.js";

export let connectToMongodb = () => {
  mongoose.connect(MONGO_URL);
  console.log(`application is connected to ${MONGO_URL}`);
};
