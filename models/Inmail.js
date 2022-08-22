const mongoose = require('mongoose');

const InmailSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('inmail', InmailSchema);
