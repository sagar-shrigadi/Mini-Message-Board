import { getSelectedMsg } from "../db/queries.js";

export async function getMsg(req, res) {
  const { id } = req.params;
  //   console.log(id);
  const msg = await getSelectedMsg(Number(id));
  // console.log(msg);

  res.render("pages/messages", {
    title: "Mini Message Board",
    msg,
  });
}
