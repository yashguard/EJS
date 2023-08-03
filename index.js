const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./routes/student.routes");
server.use(express.json());
server.use(cors());
server.use("/student", router);
require("dotenv").config();
server.set("view engine", "ejs");
server.set("views", __dirname + "/view");
server.use(express.static(__dirname + "/public"));
let port = process.env.PORT;

server.listen(8010, () => {
  console.log(`Server is running on port ${8010}`);
});
