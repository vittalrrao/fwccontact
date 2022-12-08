const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const debug = require('debug');
const contactUs = require('./routes/contactUs');

mongoose.connect('mongodb+srv://fwcinc:Fwc1348@contactform.qpdnohv.mongodb.net/ContactForm?retryWrites=true',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.');
    } else {
      console.log('Error in DB connection : ' + err);
    }
  });


// mongoose.connect('mongodb+srv://fwcinc:Fwc1348@contactform.qpdnohv.mongodb.net/?retryWrites=true', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err) => {
//   if (!err) {
//     console.log('MongoDB Connection Succeeded.');
//   } else {
//     console.log('Error in DB connection : ' + err);
//   }
// });


app.use(express.json());
app.use('/api/contactus', contactUs);

app.get("/url", (req, res, next) => {
  res.json(["Tony", "sa", "Michael", "Ginger", "Food"]);
});

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Listning on port ${port}....`));
