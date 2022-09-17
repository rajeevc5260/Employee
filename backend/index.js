const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const EmpData = require("./src/model/empData");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST
app.post("/insert", function (req, res) {
  res.header("Access-Control-Allows-Origin", "*");
  res.header("Access-Control-Allows-Methods: GET, POST, PATCH, PUT, DELETE");
  console.log(req.body);

  var employee = {
    name: req.body.employee.name,
    position: req.body.employee.position,
    officeLocation: req.body.employee.officeLocation,
    salary: req.body.employee.salary,
  };

  var employee = new EmpData(employee);
  employee.save();
  //   employee.save((err, employee) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.json(employee);
  //     }
  //   });
});

// GET
app.get("/", (req, res) => {
  res.header("Access-Control-Allows-Origin", "*");
  res.header("Access-Control-Allows-Methods: GET, POST, PATCH, PUT, DELETE");

  EmpData.find({}, (err, employees) => {
    if (err) {
      res.send(err);
    }
    res.json(employees);
  });
});

// Localhost PORT--
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
