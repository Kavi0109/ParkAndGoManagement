import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
//import Logo from "../../assets/images/logo.png";
import Back from "../../assets/images/emp2.jpg";

const initialState = {
  image: null,
};

class UploadImage extends Component {
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
    const formData = new FormData();

    formData.append("image", this.state.image);

    axios
      .put(
        `${APIURL}/employee/upload-image/${this.props.match.params.id}`,
        formData
      )
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/get-all-employee";
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      });
  }

  render() {
    return (
      <div>
        

        <div className="row">
          <div className="col-6 p-4 mx-left">
            <img src={Back} alt="" style={{ height: 500, width: 1500 }} />
          </div>
          <div className="col-6 p-4 mx-right ">
            <div className="login-contect py-5">
              <div className="container py-xl-5 py-3">
                <div className="login-body">
                  <div className="login p-4 mx-auto">
                    <h5 className="text-center mb-4">Upload Employee Image</h5>
                    <form onSubmit={this.onSubmit} method="post">
                      <div className="form-group">
                        <label>Images</label>
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={this.onFileChange}
                          className="form-control form-control-user"
                          required
                        />
                      </div>
                      <button type="submit" className="btn submit mb-4">
                        Upload Image
                      </button>
                    </form>
                    <Link to="/get-all-employee">
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
export default UploadImage;
