//requirements

const express = require('express');
const { R } = require("@fridgerator/r-script");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//functions go here before the app.use() that publishes to public

app.post('/data', (req, res) => {

   // get input

   //console.log(req.body.power)

   //let response = req.body

   //res.send({response})

   let power = parseInt(req.body.power);
   let input = parseInt(req.body.value);
  
   // process data using js Math.pow()
   let squaredJS = Math.pow(input, power);
 
   // run through R script
   let r = new R("./R/index.R");
   r.data(input, power);
   let squaredR = r.callSync();
 
   // send results
   res.send({
     squaredJS: squaredJS,
     squaredR: squaredR,
   });
 })


app.use(express.static('public'));

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});