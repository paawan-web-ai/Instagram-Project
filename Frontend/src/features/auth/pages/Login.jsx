import React from "react";
import "../style/auth.scss";
const Login = () => {
  return (
    <main>
      <div className="login-left">
        <div className="login-insta-icon">
          <img src="\src\assets\auth assests\insta-icon.png" alt="" />
        </div>
        <div className="left-content">
          <h2>
            See everyday moments from your <span>close friends.</span>
          </h2>
          <img src="\src\assets\auth assests\left-img-login.webp" alt="" />
        </div>
      </div>
      <div className="login-right">
        <div className="upper-content">
          <h2>Login</h2>
          <form action="">
            <input type="text" placeholder="username or email" />
            <input type="password" placeholder="Password" />
            <div className="button-submit">
              <button className="login">Log in</button>
              <button className="forget-password">Forget password</button>
            </div>
          </form>
        </div>
        <div className="bottom-content">
          <div className="fb-login">
            <button className="login-with-fb">
              <span>
                <img
                  src="\src\assets\auth assests\login-with-facebook.webp"
                  alt=""
                />
              </span>
              Log in with Facebook{" "}
            </button>
            <button className="create-account">Create new accound</button>
          </div>
          <img src="\src\assets\auth assests\meta.webp" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Login;
