import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    // Here, you can implement your own authentication logic
    // For example:
    // Your authentication API call or logic should go here

    // Once authentication is successful, navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <input
          type="email"
          id="email" // Add id attribute
          name="email" // Add name attribute
          placeholder="Enter email address"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="password"
          id="password" // Add id attribute
          name="password" // Add name attribute
          placeholder="Enter Password"
          value={values.pass}
          onChange={(e) => setValues({ ...values, pass: e.target.value })}
        />

        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className="loginButton"
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
