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
let router = express.Router();

app.listen(port, function() {
    console.log("Listening on :%d", port);
});

router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname+"/html/index.html"));
});

router.get("/about",(req,res) => {
    res.send(info);
});

router.get("/password/generate/",(req,res) => {
    let length = req.query /*generate password here*/
    res.send(length);
});

router.post("/password",(req,res) => {
    
});