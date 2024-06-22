import express from "express";
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';



// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
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
  res.render("about");
});

app.get("/contact", (req, res) => {
  const apiKey = process.env.API;
  res.render("contact", { apiKey });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


