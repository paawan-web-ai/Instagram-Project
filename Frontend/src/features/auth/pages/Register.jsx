import React from "react";
import "../style/auth.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <main className="register">
      <div className="main-register">
        <img src="\src\assets\auth assests\meta.webp" alt="" />
        <h2>Get started on Instagram</h2>
        <p>Sign up to see photos and videos from your friends.</p>
        <form action="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <div className="form-btn">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. People
              who use our service may have shared information with us to help
              improve their experience. By tapping Submit, you agree to create
              an account and to our terms, conditions, and policies. Our privacy
              policy describes how we may use the information we collect when
              you create an account. For example, this information may be used
              to provide, personalize, and improve our products and services.
            </p>
            <button className="register-submit">Submit</button>
            <Link to="/login" className="already-have-acc">
              I already have an account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
