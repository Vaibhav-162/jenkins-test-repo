const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Hello from the Jenkins !!!");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server has started on port 4000 !!!");
});
