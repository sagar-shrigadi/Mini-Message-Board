import pool from "./pool.js";

export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

export const getSelectedMsg = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows;
};

export const addMessageToDB = async (username, messageText) => {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    messageText,
  ]);
};
