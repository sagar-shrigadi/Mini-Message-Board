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
  {
    id: 3,
    text: "I am not lazy, I am on energy-saving mode.",
    user: "shaquille.oatmeal",
    added: new Date(),
  },
  {
    id: 4,
    text: "Currently experiencing life at 30 WTFs per hour.",
    user: "fast_and_the_curious",
    added: new Date(),
  },
  {
    id: 5,
    text: "I thought my anxiety had imagined every worst case scenario, but this year has given it new material.",
    user: "anonymouse",
    added: new Date(),
  },
  {
    id: 6,
    text: "Went outside today. Very cold. There were people. Zero stars—do not recommend.",
    user: "fedora_the_explorer",
    added: new Date(),
  },
  {
    id: 7,
    text: "i only type in lower case because i am humble.",
    user: "LOWERCASE_GUY",
    added: new Date(),
  },
  {
    id: 8,
    text: "IS THIS THING ON? I CAN'T FIND THE OFF BUTTON!",
    user: "IYELLALOT",
    added: new Date(),
  },
];

// handing the requests using controllers
indexRouter.get("/", getIndex);
