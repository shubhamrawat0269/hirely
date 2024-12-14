const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running on port 8082");
});

const PORT = 8082;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
