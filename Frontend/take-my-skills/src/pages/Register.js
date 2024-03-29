import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import Alert from "../components/Alert";
import DefaultURL from "../GlobalVariables";

function Register() {
  const navigate = useNavigate();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfos, setAlertInfos] = useState(["", ""]);

  const onSubmit = async (values) => {
    try {
      await axios.post(`${DefaultURL}/users/register`, values);

      setShowAlert(true);
      setAlertInfos(["success", "You've been Successfully Registered!"]);

      await axios.post(`${DefaultURL}/mail/send/${values.email}`, {
        subject: "Registration",
        message: `Congratulation ${
          values.name
        } ! You are now a ${values.role.substring(5)} on TradeMySkills.com.`,
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setShowAlert(true);
      setAlertInfos(["danger", err.response.data.message]);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registerData = {
      name: formData.get("username"),
      phoneNumber: formData.get("phoneNumber"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    onSubmit(registerData);
  };

  return (
    <div>
      {showAlert && <Alert type={alertInfos[0]} message={alertInfos[1]} />}
      <form onSubmit={onSave} style={{ marginTop: 78 }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h1 className="mb-5">Register</h1>

                  <div className="form-outline ">
                    <input
                      type="text"
                      className="form-control mb-4"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                    />

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <select
                        className="form-select"
                        name="role"
                        aria-label="Default select example"
                      >
                        <option selected disabled>
                          Choose A Role
                        </option>
                        <option value="ROLE_CUSTOMER">Customer</option>
                        <option value="ROLE_WORKER">Worker</option>
                      </select>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        name="checkbox"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I accept the{" "}
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                        .
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Already a member? <a href="/login">Login NOW</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
