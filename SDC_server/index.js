const express = require('express');
const mongoose = require('mongoose');
const controllers = require('../SDC_controllers/listing.js');
const Listings = require('../SDC_db/models/SDCschema.js');

require('newrelic');

const app = express();
const PORT = 3030;

app.use('/loaderio-0387c8a47aed375e9c28d733aff2f107.txt', express.static('main_gallery_prod/loaderio-0387c8a47aed375e9c28d733aff2f107.txt'));

app.get('/main_gallery/:id', controllers.fetchListing);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
});