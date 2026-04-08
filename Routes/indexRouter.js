import express from "express";

export const indexRouter = express.Router();

export const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Mini Message Board",
    newPath: "/new",
    btnMsg: "Add Message",
    messages,
  });
});
