// create express app/server instance and make it listen in port 3000.

// Modules
import "dotenv/config";
import express from "express";
import routes from "./routes/routes.js";
import exphbs from "express-handlebars";

// port address saved in .env file
const port = process.env.PORT;

const app = express(); // express app instance

// Set views folder to 'public' for accessibility
app.use("/static", express.static("public"));


app.engine("hbs", exphbs.engine({ extname: "hbs" })); // register templating engine to express app
app.set("view engine", "hbs"); // set express' default templating engine
app.set("views", "./views");

// use router
app.use(routes);

// activate the app instance
app.listen(port, () => {
  console.log(`Server is running at:`);
  console.log(`http://localhost:` + port);
});
