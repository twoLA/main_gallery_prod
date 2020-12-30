const express = require('express');
const mongoose = require('mongoose');
const controllers = require('../SDC_controllers/listing.js');
const Listings = require('../SDC_db/models/SDCschema.js');

require('newrelic');

const app = express();
const PORT = 3030;

app.get('/main_gallery/:id', controllers.fetchListing);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
});