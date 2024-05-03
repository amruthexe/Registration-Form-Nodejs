const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "registerform.html"));
});

// Handle form submission
app.post("/register", (req, res) => {
  const {
    username,
    email,
    password,
    confirmpassword,
    gender,
    country,
    subscribe,
  } = req.body;
  // Here, you can process the registration data (e.g., save it to a database)
  console.log(
    `User registered: ${username}, ${email}, ${password}, ${confirmpassword}, ${gender}, ${country}, ${subscribe}`
  );
  res.send("Registration successfully completed!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
