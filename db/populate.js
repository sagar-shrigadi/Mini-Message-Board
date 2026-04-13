import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 50 ) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO messages (username, message) 
VALUES
    ('Amanda', 'I am not lazy, I am on energy-saving mode.'),
    ('the_curious', 'Currently experiencing life at 30 WTFs per hour.'),
    ('anonymouse', 'I thought my anxiety had imagined every worst case scenario, but this year has given it new material.'),
    ('fedora_the_explorer', 'Went outside today. Very cold. There were people. Zero stars—do not recommend.'),
    ('LOWERCASE_GUY', 'i only type in lower case because i am humble.'),
    ('IYELLALOT', 'IS THIS THING ON? I CAN''T FIND THE OFF BUTTON!');
`;

const main = async () => {
  try {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.argv[2],
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!");
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
};

main();
