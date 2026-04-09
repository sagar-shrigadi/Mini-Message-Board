import { messages } from "../Routes/indexRouter.js";

export async function postNewMsg(req, res) {
  const { username, messageText } = req.body;

  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: username,
    added: new Date(),
  });
  res.redirect("/");
}
