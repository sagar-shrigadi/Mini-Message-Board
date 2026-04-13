import express from "express";
import { indexRouter } from "./Routes/indexRouter.js";
import { newMsgRouter } from "./Routes/newMsgRouter.js";
import { messagesRouter } from "./Routes/messagesRouter.js";

// create express app
const app = express();
const PORT = process.env.PORT;

// to use the contents of post request in middleware functions
app.use(express.urlencoded({ extended: true }));

// set dir to serve static flies from
app.use(express.static("Public"));

// use ejs template as views
app.set("views", "Views");
app.set("view engine", "ejs");

// set router to use
app.use("/messages", messagesRouter);
app.use("/new", newMsgRouter);
app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server running at port ${PORT}`);
});
