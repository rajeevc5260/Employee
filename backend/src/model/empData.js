const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/EmployeeDB");

const url = "mongodb+srv://rajeevc:rajeev321@cluster0.w68gpom.mongodb.net/EmployeeDB";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

var EmpSchema = new Schema({
  name: { type: String },
  position: { type: String },
  officeLocation: { type: String },
  salary: { type: Number },
});

const EmpData = mongoose.model("employee", EmpSchema);

module.exports = EmpData;
