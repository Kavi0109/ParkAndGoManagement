import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
//import Logo from "../../assets/images/logo.png";
import Back from "../../assets/images/emp2.jpg";


const initialState = {
  employee_id: "",
  employee_first_name: "",
  employee_last_name: "",
  employee_age: "",
  employee_nic: "",
  employee_dob: "",
  employee_gender: "",
  employee_address: "",
  employee_email: "",
  employee_phone: "",
  employee_post: "",
  employee_basicSalary: "",
  employee_username: "",
  employee_password: "",
  employee_confirm_password: "",
  image: null,
};

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let EmployeeDetails = {
      employee_id: this.state.employee_id,
      employee_first_name: this.state.employee_first_name,
      employee_last_name: this.state.employee_last_name,
      employee_age: this.state.employee_age,
      employee_nic: this.state.employee_nic,
      employee_dob: this.state.employee_dob,
      employee_gender: this.state.employee_gender,
      employee_address: this.state.employee_address,
      employee_email: this.state.employee_email,
      employee_phone: this.state.employee_phone,
      employee_post: this.state.employee_post,
      employee_basicSalary: this.state.employee_basicSalary,
      employee_username: this.state.employee_username,
      employee_password: this.state.employee_password,
      employee_confirm_password: this.state.employee_confirm_password,
    };

    axios
      .post(`${APIURL}/employee/add-new-employee`, EmployeeDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/add-new-employee";
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      });
  }
//HTML code
  render() {
    return (
      <div>
      

        <div className="row">
          <div className="col-6 p-4 mx-left">
            <img src={Back} alt="" style={{ height: 1300, width: 1250 }} />
          </div>
          <div className="col-6 p-4 mx-right ">
            <div className="login-contect py-5">
              <div className="container py-xl-5 py-3">
                <div className="login-body">
                  <div className="login p-4 mx-auto">
                    <h5 className="text-center mb-4">Employee Registeration</h5>
                    <form onSubmit={this.onSubmit} method="post">
                      <div className="form-group">
                        <label>Employee ID</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_id"
                          value={this.state.employee_id}
                          onChange={this.onChange}
                          placeholder="EMP-000"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <div className="row">
                          <div className="col-6">
                            <input
                              type="text"
                              className="form-control"
                              name="employee_first_name"
                              value={this.state.employee_first_name}
                              onChange={this.onChange}
                              placeholder="First Name"
                            />
                          </div>

                          <div className="col-6">
                            <input
                              type="text"
                              className="form-control"
                              name="employee_last_name"
                              value={this.state.employee_last_name}
                              onChange={this.onChange}
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Age</label>
                        <input
                          type="number"
                          className="form-control"
                          name="employee_age"
                          value={this.state.employee_age}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>NIC</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_nic"
                          value={this.state.employee_nic}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          name="employee_dob"
                          value={this.state.employee_dob}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          className="form-control "
                          style={{ borderRadius: 25, height: 50 }}
                          name="employee_gender"
                          value={this.state.employee_gender}
                          onChange={this.onChange}
                        >
                          <option>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_address"
                          value={this.state.employee_address}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_email"
                          value={this.state.employee_email}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Mobile No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_phone"
                          value={this.state.employee_phone}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Post</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_post"
                          value={this.state.employee_post}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>Basic Salary</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_basicSalary"
                          value={this.state.employee_basicSalary}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label>User Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_username"
                          value={this.state.employee_username}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>

                      <div className="form-group">
                        <label className="mb-2">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_password"
                          value={this.state.employee_password}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-2">Confirm Password</label>
                        <input
                          type="text"
                          className="form-control"
                          name="employee_confirm_password"
                          value={this.state.employee_confirm_password}
                          onChange={this.onChange}
                          placeholder
                        />
                      </div>
                      <button type="submit" className="btn submit mb-4">
                        Add Employee
                      </button>
                    </form>
                    <Link to="/homeKasuni">
                      {" "}
                      <button type="submit" className="btn submit mb-4">
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
