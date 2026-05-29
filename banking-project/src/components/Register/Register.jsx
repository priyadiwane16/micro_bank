import { useState } from "react";
import styles from "./Register.module.css";

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    account_number: "",
    balance: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(parseFloat(formData.balance)<1000){
      alert('Initial balance can not be < Rs.1000/-')
      return
    }
    const generatedAccountNumber=Math.floor(1000000000000000 + Math.random()*9000000000000000).toString()
    console.log("Data saved to database stimulation : ", {
      ...formData,
      id: Math.floor(Math.random() * 1000000000000000), // stimulate auto-increament ID
      created_at: new Date().toISOString(),
    });
    alert("Registration Successful! Please Login.");
    onNavigate("login");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Bank Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.group}>
          <label>Full Name</label>
          <input
            value={formData.full_name}
            type="text"
            name="full_name"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <label>Residential Address</label>
          <textarea
            name="address"
            rows="3"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.group}>
          <label>Phone Number</label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={10}
            pattern="[0-9]{10}"
            value={formData.phone_number || ""}
            name="phone_number"
            required
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              handleChange(e);
            }}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.group}>
            <label>Email Address</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              maxLength="20"
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label>Password</label>
            <input
              value={formData.password}
              type="password"
              name="password"
              minLength="8"
              maxLength="20"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$"
              title="Password must contain at least one uppercase letter, one lowercase latter and one number."
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* <div className={styles.group}>
            <label>Account Number</label>
            <input
              value={formData.account_number}
              type="password"
              name="account_number"
              required
              onChange={handleChange}
            />
          </div> */}
          <div className={styles.group}>
            <label>Initial Balance</label>
            <input
              value={formData.balance}
              type="number"
              name="balance"
              min='1000'
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.btn}>
          Register Account
        </button>
      </form>
      <p className={styles.footerText}>
        Already have an account?{" "}
        <span onClick={() => onNavigate("login")}>Login here</span>
      </p>
    </div>
  );
};

export default Register;
