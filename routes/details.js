var express = require('express');
const detailsModel = require('../models/details');
var router = express.Router();


/* POST details listing. */
router.post('/push_data', async function(req, res) {
  const __data = req.body;
  const rawData = new detailsModel({data: __data});
  await rawData.save();
  res.send({data: rawData});
});

/* GET all listings */
router.get('/get_all', async function(req, res) {
  const allDetails = await detailsModel.find();
  res.send({data: allDetails});
});


module.exports = router;
