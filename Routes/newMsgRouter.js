import express from "express";
import { getNewMsgForm } from "../Controllers/getNewMsgForm.js";
import { postNewMsg } from "../Controllers/postNewMsg.js";

export const newMsgRouter = express.Router();

// handing the requests using controllers
newMsgRouter.get("/", getNewMsgForm);
newMsgRouter.post("/", postNewMsg);
