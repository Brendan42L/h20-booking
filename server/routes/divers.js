const express = require("express");
const router = express.Router();

const { Divers } = require("../models");

router.get("/", async (req, res) => {
  const divers = await Divers.findAll();

  res.json(divers);
});

router.post("/", async (req, res) => {
  const values = req.body.diver;
  const createDiver = await Divers.create(values);
  res.json(createDiver);
});

module.exports = router;
