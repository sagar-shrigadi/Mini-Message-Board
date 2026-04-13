import { body, matchedData, validationResult } from "express-validator";
import { addMessageToDB } from "../db/queries.js";

const usernameLengthErr = `must be at least 3 characters.`;
const usernamePatternErr = `must start with a letter and contain only letters, numbers, underscores, or hyphens.`;
const emptyErr = `must not be empty.`;

const validateMessageData = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username ${emptyErr}`)
    .isLength({ min: 3 })
    .withMessage(`Username ${usernameLengthErr}`)
    .matches(/^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/)
    .withMessage(`Username ${usernamePatternErr}`),

  body("messageText").trim().notEmpty().withMessage(`Message ${emptyErr}`),
];

export const postNewMsg = [
  validateMessageData,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("pages/form", {
        title: "Mini Message Board",
        error: errors.array(),
      });
    }

    const { username, messageText } = matchedData(req);
    try {
      await addMessageToDB(username, messageText);
    } catch (error) {
      console.error(`Error adding message to db: ${error}`);
      res
        .status(400)
        .send(`Trouble adding message to database, Please try again!`);
    }
    res.redirect("/");
    console.log(`successfully added message to db!`);
  },
];
