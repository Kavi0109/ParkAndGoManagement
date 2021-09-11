import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
//import Logo from "../../assets/images/logo.png";
import Back from "../../assets/images/emp2.jpg";
import AddImage from "../../assets/images/add-image-24.png";
import Edit from "../../assets/images/edit-24.png";
import Delete from "../../assets/images/delete-24.png";

class GetAllEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
    };
    this.onDelete = this.onDelete.bind(this);
  }

  async componentDidMount() {
    await axios.get(`${APIURL}/employee/get-all-employee`).then((response) => {
      this.setState({ employeeList: response.data.EmployeeList });
      console.log("EmployeeList =>", this.state.employeeList);

      if (response.data.code === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    });
  }

  onDelete(e, id) {
    axios.delete(`${APIURL}/employee/delete-employee/${id}`).then((res) => {
      console.log("res", res);
      if (res.data.code === 200) {
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  }

  render() {
    return (
      <div>
      

        <div className="p-2">
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Photo</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Age</th>
                <th scope="col">NIC No</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Post</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">User Name</th>
                <th scope="col">Password</th>
                <th scope="col">Manage</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeeList.length > 0 &&
                this.state.employeeList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.employee_id}</td>
                    <td>
                      <img
                        alt="..."
                        src={item.employee_image}
                        style={{ height: 30, width: 30 }}
                        className="avatar avatar-sm rounded-circle me-2"
                      />
                    </td>
                    <td>
                      {item.employee_first_name} {item.employee_last_name}
                    </td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_nic}</td>
                    <td>{item.employee_dob}</td>
                    <td>{item.employee_gender}</td>
                    <td>{item.employee_address}</td>
                    <td>{item.employee_email}</td>
                    <td>{item.employee_phone}</td>
                    <td>{item.employee_post}</td>
                    <td>{item.employee_basicSalary}</td>
                    <td>{item.employee_username}</td>
                    <td>{item.employee_password}</td>
                    <td>
                      <div className="row">
                        <div className="col-4">
                          <Link to={`/upload-employee-image/${item._id}`}>
                            <button>
                              {" "}
                              <img src={AddImage} alt="" />
                            </button>
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to={`/get-emploee-dtails-by-id/${item._id}`}>
                            <button>
                              <img src={Edit} alt="" />{" "}
                            </button>
                          </Link>
                        </div>
                        <div className="col-4">
                          <button
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  "Do you want to delete this employee?"
                                )
                              ) {
                                this.onDelete(e, item._id);
                              }
                            }}
                          >
                            {" "}
                            <img src={Delete} alt="" />
                          </button>
                        </div>
                      
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default GetAllEmployee;
