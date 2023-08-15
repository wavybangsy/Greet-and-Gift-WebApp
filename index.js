// create express app/ server instance and make it listen in port 3000.
const express = require("express");
const app = express(); // express app instance

// activate the app instance
app.listen(3000, () => {
  console.log("Express app is now listening on Port 3000...");
});
