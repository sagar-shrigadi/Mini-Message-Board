import express from "express";
import { getMsg } from "../Controllers/getMsg.js";

export const messagesRouter = express.Router({ mergeParams: true });

// handing the requests using controllers
messagesRouter.get("/:id", getMsg);
