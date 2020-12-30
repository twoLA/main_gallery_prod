const Listings = require('../SDC_db/models/SDCschema.js');

module.exports = {
  fetchListing: (req, res) => {
    console.log('req params:    ', req.params)
    console.log('req params id: ', req.params.id);

    //fetchOne(req.params.id, callback);
    Listings.fetchOne(req.params.id, (err, data) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.end();
      }
      res.status(200);
      res.send(data);
    })
    //res.send(req.params.id);
  }
}