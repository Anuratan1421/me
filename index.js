import express from "express";
import dotenv from 'dotenv';
import path from "path";

// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
