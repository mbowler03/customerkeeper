const express = require("express");
const router = express.Router();
const Customer = require("../models");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().sort({
      date: -1,
    });
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const {
    first_name,
    last_name,
    address,
    address2,
    city,
    state,
    zip,
    phone,
    email,
  } = req.body;

  try {
    const newCustomer = new Customer({
      first_name,
      last_name,
      address,
      address2,
      city,
      state,
      zip,
      phone,
      email,
    });

    const customer = await newCustomer.save();

    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  const {
    first_name,
    last_name,
    address,
    address2,
    city,
    state,
    zip,
    phone,
    email,
  } = req.body;
  //not sure if there is a more DRY method here...
  const customerFields = {};
  if (first_name) customerFields.first_name = first_name;
  if (last_name) customerFields.last_name = last_name;
  if (address) customerFields.address = address;
  if (address2) customerFields.address2 = address2;
  if (city) customerFields.city = city;
  if (state) customerFields.state = state;
  if (zip) customerFields.city = zip;
  if (phone) customerFields.phone = phone;
  if (email) customerFields.type = email;

  try {
    let customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).json({ msg: "Contact not found" });

    contact = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: customerFields },
      { new: true }
    );

    res.json(customer);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).json({ msg: "Contact not found" });

    await Customer.findByIdAndRemove(req.params.id);

    res.json({ msg: "Customer removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
