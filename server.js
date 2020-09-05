const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const connectDb = require("./config/db");
// Allows us to parse json data form the req
app.use(express.json({ extended: false }));
connectDb();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

if (process.env.NODE_ENV === "production") {
  // set static folder, client build
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
