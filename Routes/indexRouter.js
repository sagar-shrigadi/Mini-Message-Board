import express from "express";
import { getIndex } from "../Controllers/getIndex.js";

export const indexRouter = express.Router();

// handing the requests using controllers
indexRouter.get("/", getIndex);
