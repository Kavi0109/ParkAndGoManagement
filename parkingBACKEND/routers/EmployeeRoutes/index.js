const routes = require("express").Router();
const EmployeeRoutes = require("../../controllers/employee");
const upload = require("../../utils/multer");

routes.post("/add-new-employee", EmployeeRoutes.addEmplyee);

routes.get("/get-all-employee", EmployeeRoutes.getAllEmployees);

routes.get("/get-employee/:id", EmployeeRoutes.getEmployeeById);

routes.put(
  "/upload-image/:id",
  upload.single("image"),
  EmployeeRoutes.uploadImage
);

routes.put(
  "/update-employee-details/:id",
  EmployeeRoutes.updateEmployeeDetails
);

routes.delete("/delete-employee/:id", EmployeeRoutes.deleteEmployee);

module.exports = routes;
