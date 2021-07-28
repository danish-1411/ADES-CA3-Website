// Name      : Mohd Danish Shafiq
// Class     : DIT 2B22
// Admin no. : p2043483

//---------------------------------------------------------------------
// imports
//---------------------------------------------------------------------
const express = require("express");
const app = express();

//---------------------------------------------------------------------
// Endpoints
//---------------------------------------------------------------------

app.get("/", (req, res) => {
  res.sendFile("/profile.html", { root: __dirname });
});

app.get("/login/", (req, res) => {
  res.sendFile("/login.html", { root: __dirname });
});

app.get("/addgame/", (req, res) => {
  res.sendFile("/addgame.html", { root: __dirname });
});

app.get("/game/", (req, res) => {
  res.sendFile("/game.html", { root: __dirname });
});

app.get("/price/", (req, res) => {
  res.sendFile("/price.html", { root: __dirname });
});

app.get("/title/", (req, res) => {
  res.sendFile("/title.html", { root: __dirname });
});

app.get("/platform/", (req, res) => {
  res.sendFile("/platform.html", { root: __dirname });
});

app.get("/categories/", (req, res) => {
  res.sendFile("/categories.html", { root: __dirname });
});

app.get("/category/", (req, res) => {
  res.sendFile("/category.html", { root: __dirname });
});

app.get("/addcategory/", (req, res) => {
  res.sendFile("/addcategory.html", { root: __dirname });
});

app.get("/register/", (req, res) => {
  res.sendFile("/register.html", { root: __dirname });
});

app.get("/allgames/", (req, res) => {
  res.sendFile("/allgames.html", { root: __dirname });
});

app.get("/images/:filename", (req, res) => {
  var images_filename = req.params.filename;
  res.sendFile(`/images/${images_filename}`, { root: __dirname });
});



//---------------------------------------------------------------------
// configuration
//---------------------------------------------------------------------
const PORT = 3001;

//---------------------------------------------------------------------
// mains
//---------------------------------------------------------------------
// start the server and start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Client server has started listening on port ${PORT}`);
});
