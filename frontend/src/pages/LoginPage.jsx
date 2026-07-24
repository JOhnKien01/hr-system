import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import "../styles/pages/login.css";
import dotrLogo from "../assets/Department_of_Transportation_(DOTr).png";

export default function EmployeeLogin() {
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Enter your email address and password to continue.");
      return;
    }
   setError("");
    // Temporary only 

    localStorage.setItem("token", "sample_token");
    
   console.log("Logging in:", { email, password });

    navigate("/dashboard");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        {/* Card */}
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="login-icon-badge">
               <img src={dotrLogo} alt="DOTr Logo" className="login-logo" /> </div>
            <div className="login-title">DOTr- Human Resource Information System</div>
            <div className="login-subtitle">Sign in to access the Employee Information System</div>
          </div>

          {/* Error message */}
          {error && <div className="login-error">{error}</div>}

          {/* Email field */}
          <div className="login-field">
            <div className="login-label">Email address</div>
            <div className="login-input-group">
              <Mail size={16} className="login-input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="name@email.com"
                className="login-input"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="login-field" style={{ marginBottom: "8px" }}>
            <div className="login-label">Password</div>
            <div className="login-input-group">
              <Lock size={16} className="login-input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your password"
                className="login-input"
              />
              <div className="login-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>
          </div>

          {/* Options row */}
          <div className="login-options-row">
            <div className="login-forgot">Forgot password?</div>
          </div>

          {/* Login button */}
          <div className="login-button" onClick={handleLogin}>
            <p>Sign In</p>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer">
          Having trouble signing in?{" "}
          <span className="login-footer-link">Contact IT support</span>
        </div>
      </div>
    </div>
  );
}