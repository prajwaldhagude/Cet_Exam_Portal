import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join us today</p>

        <form>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="tel" placeholder="Mobile Number" required />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="login-link">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;