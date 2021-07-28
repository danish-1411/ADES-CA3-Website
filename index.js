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
  res.sendFile("/home.html", { root: __dirname });
});

app.get("/profile/", (req, res) => {
  res.sendFile("/public/profile.html", { root: __dirname });
});

app.get("/login/", (req, res) => {
  res.sendFile("/public/login.html", { root: __dirname });
});

app.get("/addgame/", (req, res) => {
  res.sendFile("/public/addgame.html", { root: __dirname });
});

app.get("/game/", (req, res) => {
  res.sendFile("/public/game.html", { root: __dirname });
});

app.get("/price/", (req, res) => {
  res.sendFile("/public/price.html", { root: __dirname });
});

app.get("/title/", (req, res) => {
  res.sendFile("/public/title.html", { root: __dirname });
});

app.get("/platform/", (req, res) => {
  res.sendFile("/public/platform.html", { root: __dirname });
});

app.get("/categories/", (req, res) => {
  res.sendFile("/public/categories.html", { root: __dirname });
});

app.get("/category/", (req, res) => {
  res.sendFile("/public/category.html", { root: __dirname });
});

app.get("/addcategory/", (req, res) => {
  res.sendFile("/public/addcategory.html", { root: __dirname });
});

app.get("/register/", (req, res) => {
  res.sendFile("/public/register.html", { root: __dirname });
});

app.get("/allgames/", (req, res) => {
  res.sendFile("/public/allgames.html", { root: __dirname });
});

app.get("/images/:filename", (req, res) => {
  var images_filename = req.params.filename;
  res.sendFile(`/public/images/${images_filename}`, { root: __dirname });
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
