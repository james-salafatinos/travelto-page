const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ limit: "10mb" }));
const dotenv = require("dotenv");

const DatasetObject = require("../models/datasetObject.model");
const mongoose = require("mongoose");
const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log("Error on connection with mongodb...", err));

//##### /PROFILES #######

router.get("/", function (req, res) {
  res.status(200).send("Youve reached the API");
});

router.post("/add-record", (req, res) => {
  // DB API, takes a post JSON of the weights and saves it to database
  console.log(
    "In /add-record accepting post request... Passing to direct Mongoose DB call to create document"
  );
  const user_weights = req.body;
  console.log("This is in post/ add-record on profiles.js", user_weights);
  DatasetObject.create(user_weights, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Saved weights to MongoDB with _id: ${JSON.stringify(result._id)}`
      );
      //This sends a notification back to the CLIENT that the database load was successful!
      res.redirect(`/${result._id}`);
    }
  });
});

router.post("/api", (req, res) => {
  // DB API, takes a post JSON of the weights and saves it to database
  console.log(
    "In /api accepting post request... Passing to direct Mongoose DB call to create document"
  );
  const user_weights = req.body;
  console.log("This is in post/ on api.js", user_weights);
  DatasetObject.create(user_weights, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.send("Sorry that did not work...");
    } else {
      res.json(result);
    }
  });
});

router.get("/:uuid", (req, res) => {
  //600dd15c316b6008f4e31dbf
  console.log(req.params);
  let uuid = req.params.uuid;
  DatasetObject.findById(uuid)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/api/:uuid", (req, res) => {
  //600dd15c316b6008f4e31dbf
  console.log(req.params);
  let uuid = req.params.uuid;
  DatasetObject.findById(uuid)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
