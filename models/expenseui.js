const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    expenseamount: {
      type: Number,
      required: true,
     
    },
    incomeamount: {
      type: Number,
      required: true,
       unique: false,
    },
    expensedescription: {
      type: String,
    },
    expensecategory: {
      type: String,
    },
    visitHistory: [{ timestamp: { type: Number } }],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const UI = mongoose.model("ui", urlSchema);

module.exports = UI;
