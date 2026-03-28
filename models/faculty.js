console.log("File is running...");
const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    designation: String
});

module.exports = mongoose.model("Faculty",FacultySchema);