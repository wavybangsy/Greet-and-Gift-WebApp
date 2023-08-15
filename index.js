// create express app/ server instance and make it listen in port 3000.
const express = require("express");
const app = express(); // express app instance

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
            <title>Sample WebPage</title>
            </head>

            <body>
                <h1>Hi! This is the URL: ${req.url}</h1>
            </body>
        </html>
    `);
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

// activate the app instance
app.listen(3000, () => {
  console.log("Express app is now listening on Port 3000...");
});
