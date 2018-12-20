import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { ping } from "./routes";
import hello from "./hello";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/ping", ping);
app.use("/hello-world", hello);

console.log("Alive and kicking!");

module.exports = app;
