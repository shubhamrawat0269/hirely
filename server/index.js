const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


server.listen(8082, () =>
  console.log(`Server Started at PORT 8082`)
);