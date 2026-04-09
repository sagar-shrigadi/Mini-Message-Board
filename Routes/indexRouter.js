import express from "express";
import { getIndex } from "../Controllers/getIndex.js";

export const indexRouter = express.Router();

export const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// handing the requests using controllers
indexRouter.get("/", getIndex);
