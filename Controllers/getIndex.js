import { messages } from "../Routes/indexRouter.js";

export async function getIndex(req, res) {
  res.render("pages/index", {
    title: "Mini Message Board",
    newPath: "/new",
    btnMsg: "Add Message",
    messages,
  });
}
