const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = 8080;

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let posts = [
    {
        username: "nature_explorer",
        image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
        content: "Embracing the day’s end with nature’s most beautiful goodbye."
    },
    {
        username: "mammas_recipe",
        image:"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Savoring every bite of this burger bliss."
    },
    {
        username: "wild_whishkers",
        image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Elegance in the wild: the leopard's grace knows no bounds."
    }
];

app.get("/posts", (req, res)=>{
    res.render("index.ejs");
});

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});