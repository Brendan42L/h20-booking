const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");


router.post("/", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const Admins = await Admin.findAll({
    where: {
      email: email,
      password: password,
    },
  });

  if (Admins[0]) {
    const token = jwt.sign({ id: Admins[0].id }, "fnu934h893hf39fn3wedcdwdca");
    return res.status(200).json(token);
  } else {
    return res.status(401).json("Could not authorize");
  }
});

// router.post("/", async (req, res) => {

//   const password = req.body.password;
//   const email = req.body.email;
//   const createAdmin = await Admin.create({email: email, password: password});
//   res.json(createAdmin);
// });

module.exports = router;
