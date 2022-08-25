const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  res.send("welcome to my forma");
});

const func = ( operator, value1, value2) => {
if(operator=== "+"){
return parseInt(value1) + parseInt(value2)
}else if (operator === "-"){
return parseInt(value1) - parseInt(value2) 
}else if (operator === "*" || operator ==="x"){
  return parseInt(value1) * parseInt(value2)
}
else{
  return parseInt(value1) / parseInt(value2)
}
}


func('-','45','91')
console.log(func('-', '45', '91'))

app.post("/api/forma", (req, res) => {
  console.log("req redc");
  let data = req.body;
  console.log(req.body);
  console.log(data)

  let sum = func(data.sign, data.firstnumber, data.lastnumber);
  res.send(sum.toString());

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
