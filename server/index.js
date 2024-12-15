require("dotenv").config();
const cors = require("cors");
const express = require("express");
const cookiesParser = require("cookie-parser");

const app = express();
const connectToDb = require("./db/connectToDb");
const userRoutes = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

connectToDb();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
