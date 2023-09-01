const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static("public"));

app.get("/mockapi", (req, res) => {
  const responseData = { message: "Data from server!" };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
