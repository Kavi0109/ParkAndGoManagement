import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Logo from "../../assets/images/logo.png";
import Back from "../../assets/images/emp1.jpg";

class EmployeeHome extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-6 p-4 mx-left">
            <img src={Back} alt="" />
          </div>
          <div className="col-6 p-4 mx-left">
            <div className="login-contect py-5">
              <div className="container py-xl-5 py-3">
                <div className="login-body">
                  <div className="login p-4 mx-aauto">
                    <Link to="/add-new-employee">
                      <button type="submit" className="btn submit mb-4">
                        Add New Employee
                      </button>
                    </Link>
                    <Link to="/get-all-employee">
                      <button type="submit" className="btn submit mb-4">
                        All Employees
                      </button>
                    </Link>
                    <button type="submit" className="btn submit mb-4">
                      Download Report
                    </button>
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
export default EmployeeHome;
