import { config } from "dotenv";

config();
export let port = process.env.PORT;
export let MONGO_URL = process.env.MONGO_URL;
export let secretKey = process.env.SECRET_KEY;
export let token = process.env.TOKEN;
