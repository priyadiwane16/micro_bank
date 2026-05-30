import { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ onLoginSuccess, onNavigate, registeredUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    //Mock authentication matching database layout
    if (!registeredUser) {
      alert("Please register first..");
      return;
    }

    if (email === registeredUser.email) {
      alert("Login Successfully ! ");
      onLoginSuccess(registeredUser);
    } else {
      alert("invalid email or password");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Secure Internet Banking</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.group}>
          <label> Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label> Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btn}>
          {" "}
          Login Securly
        </button>
      </form>
      <p className={styles.switch}>
        New to the bank?{" "}
        <span onClick={() => onNavigate("register")}>Register Details</span>
      </p>
    </div>
  );
};

export default Login;
