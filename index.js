// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Load the multer package as a module
const multer = require("multer");

// Access the exported service
const upload = multer();

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  // response.send("Hello from Express!");
  response.sendFile(`${__dirname}/views/index.html`);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


////////////////////////////////////////////////////////////////////

app.post("/ex1", upload.array(), (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  response.send(`${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`);
});
