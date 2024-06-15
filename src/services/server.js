const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

app.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.send(`Hello, Heroku! The current time is: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.send("Error: Unable to fetch current time from the database.");
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
