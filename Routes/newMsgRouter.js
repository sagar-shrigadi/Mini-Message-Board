import express from "express";
import { messages } from "./indexRouter.js";

export const newMsgRouter = express.Router();

newMsgRouter.get("/", (req, res) => {
  res.render("pages/form", { title: "Mini Message Board" });
});

newMsgRouter.post("/", (req, res) => {
  const { username, messageText } = req.body;
  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: username,
    added: new Date(),
  });
  res.redirect("/");
});
