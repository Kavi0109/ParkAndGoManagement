const Employee = require("../model/employee.model");
const cloudinary = require("../utils/cloudinary");

const EmployeeControllers = {
  addEmplyee: async (req, res) => {
    try {
      const {
        employee_id,
        employee_first_name,
        employee_last_name,
        employee_age,
        employee_nic,
        employee_dob,
        employee_gender,
        employee_address,
        employee_email,
        employee_phone,
        employee_post,
        employee_basicSalary,
        employee_username,
        employee_password,
        employee_confirm_password,
      } = req.body;

      if (
        !employee_id ||
        !employee_first_name ||
        !employee_last_name ||
        !employee_age ||
        !employee_nic ||
        !employee_dob ||
        !employee_gender ||
        !employee_address ||
        !employee_email ||
        !employee_phone ||
        !employee_post ||
        !employee_basicSalary ||
        !employee_username ||
        !employee_password ||
        !employee_confirm_password
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      if (!validateEmail(employee_email)) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "Email is invalid, Please enter a valid email",
        });
      }

      const employeeId = await Employee.findOne({ employee_id });
      if (employeeId) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${employeeId.employee_id} id already registered.`,
        });
      }
      const employeeFirstName = await Employee.findOne({ employee_first_name });
      const employeeLastName = await Employee.findOne({ employee_last_name });
      if (employeeFirstName && employeeLastName) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${employeeFirstName.employee_first_name} ${employeeLastName.employee_last_name} is already registered employee.`,
        });
      }

      const employeePhone = await Employee.findOne({ employee_phone });
      if (employeePhone) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "This phone already exist.",
        });
      }

      const employeeEmail = await Employee.findOne({ employee_email });
      if (employeeEmail) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "This Email already registered.",
        });
      }

      if (employee_confirm_password != employee_password) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "Confirm paswword does not match with password.",
        });
      }

      const newEmployee = new Employee({
        employee_id,
        employee_first_name,
        employee_last_name,
        employee_age,
        employee_nic,
        employee_dob,
        employee_gender,
        employee_address,
        employee_email,
        employee_phone,
        employee_post,
        employee_basicSalary,
        employee_username,
        employee_password,
      });

      await newEmployee.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        EmployeeDetails: newEmployee,
        message: "Registration was successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAllEmployees: async (req, res) => {
    try {
      const allEmployees = await Employee.find();

      if (!allEmployees) {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeList: allEmployees,
          message: "Employee list not found.",
        });
      } else {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeList: allEmployees,
          message: "All employee list recieved.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const EmployeeDetails = await Employee.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeDetails: EmployeeDetails,
          message: `${EmployeeDetails.employee_first_name} ${EmployeeDetails.employee_last_name}'s'  details recieved.`,
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  uploadImage: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "EmployeeList",
      });
      if (req.params && req.params.id) {
        await Employee.findByIdAndUpdate(req.params.id, {
          employee_image: result.secure_url,
        });

        const uploadImage = await Employee.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          UpdateEmployee: uploadImage,
          message: "Image upload successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  updateEmployeeDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          employee_id,
          employee_first_name,
          employee_last_name,
          employee_age,
          employee_nic,
          employee_dob,
          employee_gender,
          employee_address,
          employee_email,
          employee_phone,
          employee_post,
          employee_basicSalary,
          employee_username,
          employee_password,
          employee_confirm_password,
        } = req.body;

        if (!validateEmail(employee_email)) {
          return res.status(200).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: "Email is invalid, Please enter a valid email",
          });
        }

        if (employee_confirm_password != employee_password) {
          return res.status(200).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: "Confirm paswword does not match with password.",
          });
        }

        const updateEmployee = await Employee.findById(req.params.id);

        await Employee.findByIdAndUpdate(req.params.id, {
          employee_id,
          employee_first_name,
          employee_last_name,
          employee_age,
          employee_nic,
          employee_dob,
          employee_gender,
          employee_address,
          employee_email,
          employee_phone,
          employee_post,
          employee_basicSalary,
          employee_username,
          employee_password,
        });

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          UpdateEmployee: updateEmployee,
          message:
            updateEmployee.employee_first_name +
            "" +
            updateEmployee.employee_first_name +
            " is updated successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeDetails: employee,
          message:
            employee.employee_first_name +
            "" +
            employee.employee_last_name +
            " is deleted successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = EmployeeControllers;
