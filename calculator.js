const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
// app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.get("/", (req, res) => {
   //res.send("/index.html");
   res.sendFile(__dirname + '/index.html');
});

app.post("/", (req, res) => {
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;
   res.send("The calculation result is : " + result);
});

app.get("/student", (req, res)=>{
   res.sendFile(path.join(__dirname, 'student.html'));
} );

app.post("/student", (req,res)=>{
   console.log(req.body);
   res.send("ทดสอบ");
});



app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
