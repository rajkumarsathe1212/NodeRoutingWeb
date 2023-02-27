let express = require("express");
let fs = require("fs");

let app = express();

app.use(express.static("public"));

let header = fs.readFileSync("pages/header.html");
let footer = fs.readFileSync("pages/footer.html");

app.get("/",(req,res)=>{
    res.end(header + fs.readFileSync("pages/index.html") + footer)
});

app.get("/about",(req,res)=>{
    res.end(header + fs.readFileSync("pages/about.html") + footer)
});

app.get("/resume",(req,res)=>{
    res.end(header + fs.readFileSync("pages/resume.html") + footer)
});

app.get("/portfolio",(req,res)=>{
    res.end(header + fs.readFileSync("pages/portfolio.html") + footer)
});

app.get("/service",(req,res)=>{
    res.end(header + fs.readFileSync("pages/service.html") + footer)
});

app.get("/contact",(req,res)=>{
    res.end(header + fs.readFileSync("pages/contact.html") + footer)
});

app.get("/:anything",(req,res)=>{
    res.end("Page not found");
})

app.listen(8081,()=>{
    console.log("Server started");
});
