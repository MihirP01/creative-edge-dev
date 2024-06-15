const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

app.get("/", async (req, res) => {
  const result = await client.query("SELECT NOW()");
  res.send(`Hello, Heroku! The current time is: ${result.rows[0].now}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
