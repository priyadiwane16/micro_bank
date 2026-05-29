import { useState } from "react";
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {" "}
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : " "}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {isLogin ? (
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Password ?</a>
              <button> Login</button>
              <p>
                Not a Member?{" "}
                <span>
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup now
                  </a>
                </span>{" "}
              </p>
            </div>
          ) : (
            <>
              <div className="form">
                <h2>Signup Form</h2>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <button> Signup</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default LoginForm;
