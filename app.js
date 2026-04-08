import express from "express";
import { indexRouter } from "./Routes/indexRouter.js";

// create express app
const app = express();
const PORT = 3000;

// set dir to serve static flies from
app.use(express.static("Public"));

// use ejs template as views
app.set("views", "Views");
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server running at port ${PORT}`);
});
