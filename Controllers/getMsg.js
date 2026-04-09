import { messages } from "../Routes/indexRouter.js";

export async function getMsg(req, res) {
  const { id } = req.params;
  //   console.log(id);
  const messageToDisplay = messages.find((msg) => msg.id === Number(id));
  //   console.log(messageToDisplay);
  res.render("pages/messages", {
    title: "Mini Message Board",
    text: messageToDisplay.text,
    user: messageToDisplay.user,
    added: messageToDisplay.added.toDateString(),
  });
}
