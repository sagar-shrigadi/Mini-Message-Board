import { getAllMessages } from "../db/queries.js";

export async function getIndex(req, res) {
  const msg = await getAllMessages();
  // console.log(msg);

  res.render("pages/index", {
    title: "Mini Message Board",
    newPath: "/new",
    btnMsg: "Add Message",
    msg,
  });
}
