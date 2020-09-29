let express = require('express');
let path = require('path')
let bodyParser = require('body-parser');
let port = 8080;
let app = express();
let info = {
    "Brandon Young":{
       email: "youngbt@iu.edu",
       favoriteMusician: "Callum Gahram"
    }
};

app.listen(port, function() {
    console.log("Listening on :%d", port);
});

let router = express.Router();

router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname+"/html/index.html"));
});

router.get("/about",(req,res) => {
    res.send(info);
});

router.get("/password/generate/",(req,res) => {
    let length = req.query
    console.log(length)
    res.send(length);
});

//router.post("/password",(req,res) => {
    
//});

app.use("/",router);
app.use("/about",router);
app.use("/password/generate/",router);
app.use("/password",router);