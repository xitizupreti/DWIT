import mongoose from "mongoose";

export let connectToMongodb = () => {
  mongoose.connect("mongodb://0.0.0.0:27017/dw11");
};
