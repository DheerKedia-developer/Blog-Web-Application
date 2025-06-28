import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views")); // ✅ Explicitly set views folder

app.get("/" , (req , res) => {
    res.render("index.ejs");
})

app.get("/view-posts" , (req , res) => {
    res.render("view_posts.ejs");
});

app.get("/new-post" , (req , res) => {
    res.render("new_post.ejs");
});

app.post("/create" , (req , res) => {
    const Title = req.body["title"];
    const Content = req.body["content"];
    res.render("new_post.ejs" , {blogCreated : true});
});
app.listen(port , () => {
    console.log("Server starting on port : " + port);
})