import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1> Welcome back, {user?.full_name}</h1>
          <p className={styles.meta}>
            User ID : {user?.id} / Registered on :
            {new Date(user?.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </header>
      <div className={styles.grid}>
        <div className={styles.cardPrimary}>
          <h3>Available balance </h3>
          <p className={styles.balance}>
            {parseFloat(user.balance).toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <div className={styles.cardDetails}>
          <h3>Account Information</h3>
          <div className={styles.infoRow}>
            <span>Account Number: </span>{" "}
            <strong>{user?.account_number}</strong>
          </div>
          <div className={styles.infoRow}>
            <span>Account Type: </span> <strong>{user?.account_type}</strong>
          </div>
        </div>

        <div className={styles.cardDetails}>
          <h3>Profile And Contact</h3>
          <div className={styles.infoRow}>
            <span>Email: </span> <strong>{user?.email}</strong>
          </div>
          <div className={styles.infoRow}>
            <span>Phone Number : </span> <strong>{user?.phone_number}</strong>
          </div>
          <div className={styles.infoRow}>
            <span>Address: </span> <strong>{user?.address}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
