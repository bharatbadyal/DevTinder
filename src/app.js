const express = require("express");
const app = express();
const PORT = 3000;

app.use("/home", (req, res) => {
  res.send("This is the Home Page of this app");
});
app.use("/pricing", (req, res) => {
  res.send("This page is still in development");
});

app.listen(PORT, () => {
  console.log(`Server is sucessfully listning on Port no. ${PORT}`);
});
