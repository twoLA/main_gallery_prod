const express = require('express');
const mongoose = require('mongoose');
//const controllers = require('../SDC_controllers/listing.js');
const Listings = require('../SDC_db/models/SDCschema.js');

require('newrelic');

const app = express();
const PORT = 3030;



// app.get('/:id', controllers.fetchListing);
app.get('/main_gallery/:id', (req, res) => {
  //console.log('req params:    ', req.params)

  // Listings.fetchOne(req.params.id, (err, data) => {
  Listings.ListingModel.find({listingId:req.params.id}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.end();
    }
    res.status(200);
    res.send(data);
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
});

// Connect to Mongoose.
// mongoose.connect('mongodb://54.219.128.69/SDC')
//   .then (() => {
//     console.log('Connected to database.');
//   })
//   .catch(() => {
//     console.log('Could not connect to database.');
//   });