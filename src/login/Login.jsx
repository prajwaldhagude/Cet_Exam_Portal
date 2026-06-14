import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue</p>

        <form>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;