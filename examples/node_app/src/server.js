import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
