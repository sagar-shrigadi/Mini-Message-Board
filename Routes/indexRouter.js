import express from "express";

export const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("from router, Hello Mini Msg Board!");
});
