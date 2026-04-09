export async function getNewMsgForm(req, res) {
  res.render("pages/form", { title: "Mini Message Board" });
}
