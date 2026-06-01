import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { useState } from "react";
import styles from "./App.module.css";
function App() {
  const [view, setView] = useState("login"); //login | register | dashboard
  const [currentUser, setCurrentUser] = useState(null);
  const [registerUserDatabase, setRegisterUserDatabase] = useState(null); //temporary storage holds user data after registered

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setView("dashboard");
  };

  const handleRegisterSuccess = (newUserData) => {
    setRegisterUserDatabase(newUserData);
    setView("login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView("login");
  };
  return (
    <div className={styles.display}>
      {view === "login" && (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onNavigate={setView}
          registeredUser={registerUserDatabase}
        />
      )}

      {view === "register" && (
        <Register
          onRegisterSuccess={handleRegisterSuccess}
          onNavigate={setView}
        />
      )}

      {view === "dashboard" && (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
