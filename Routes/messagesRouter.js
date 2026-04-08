import express from "express";
import { messages } from "./indexRouter.js";

export const messagesRouter = express.Router({ mergeParams: true });

messagesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  const messageToDisplay = messages.find((msg) => msg.id === Number(id));
  //   console.log(messageToDisplay);
  res.render("pages/messages", {
    title: "Mini Message Board",
    text: messageToDisplay.text,
    user: messageToDisplay.user,
    added: messageToDisplay.added,
  });
});
