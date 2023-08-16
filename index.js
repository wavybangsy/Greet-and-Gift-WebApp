// create express app/server instance and make it listen in port 3000.

// Modules
import express from "express";
import routes from "./routes/routes";

// port address saved in .env file
const port = process.env.PORT;

const app = express(); // express app instance

// use router
app.use(routes);

// activate the app instance
app.listen(port, () => {
  console.log(`Server is running at:`);
  console.log(`http://localhost:` + port);
});
