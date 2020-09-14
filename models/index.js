const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
