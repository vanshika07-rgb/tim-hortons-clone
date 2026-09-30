import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Auth.css";

function Auth() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  // ==========================================
  // SWITCH LOGIN / SIGN UP
  // ==========================================

  const switchMode = () => {
    setIsSignUp(!isSignUp);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setMessage("");
    setError("");
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      // ========================================
      // CREATE ACCOUNT
      // ========================================

      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Account creation failed."
          );
        }

        // Account created successfully
        setMessage(
          "✅ Account created successfully! You can now sign in."
        );

        // Switch automatically to Sign In
        setIsSignUp(false);

        setFormData({
          name: "",
          email: formData.email,
          password: "",
          confirmPassword: "",
        });

        setLoading(false);
        return;
      }

      // ========================================
      // LOGIN
      // ========================================

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed."
        );
      }

      // ========================================
      // SAVE LOGIN SESSION
      // ========================================

      localStorage.setItem(
        "timHortonsUser",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "timHortonsToken",
        data.token
      );

      // Go to Home
      navigate("/");

    } catch (error) {
      console.error("Authentication error:", error);

      setError(
        error.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">

        {/* Decorative Coffee */}
        <div className="auth-decoration auth-decoration-one">
          ☕
        </div>

        {/* Decorative Donut */}
        <div className="auth-decoration auth-decoration-two">
          🍩
        </div>


        <div className="auth-card">

          {/* Icon */}
          <div className="auth-icon">
            ☕
          </div>

          {/* Label */}
          <p className="auth-label">
            TIM HORTONS
          </p>


          {/* Heading */}
          <h1>
            {isSignUp
              ? "Create Your Account"
              : "Welcome Back"}
          </h1>


          {/* Subtitle */}
          <p className="auth-subtitle">
            {isSignUp
              ? "Join us and make every morning magical."
              : "Sign in to continue your Tim Hortons experience."}
          </p>


          {/* SUCCESS MESSAGE */}
          {message && (
            <div className="auth-success">
              {message}
            </div>
          )}


          {/* ERROR MESSAGE */}
          {error && (
            <div className="auth-error">
              ❌ {error}
            </div>
          )}


          {/* FORM */}
          <form onSubmit={handleSubmit}>

            {/* NAME - SIGN UP ONLY */}
            {isSignUp && (
              <div className="auth-field">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>
            )}


            {/* EMAIL */}
            <div className="auth-field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* PASSWORD */}
            <div className="auth-field">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>


            {/* CONFIRM PASSWORD */}
            {isSignUp && (
              <div className="auth-field">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>
            )}


            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading
                ? "PLEASE WAIT..."
                : isSignUp
                ? "CREATE ACCOUNT →"
                : "SIGN IN →"}
            </button>

          </form>


          {/* SWITCH */}
          <div className="auth-switch">

            <span>
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              type="button"
              onClick={switchMode}
            >
              {isSignUp
                ? "Sign In"
                : "Create Account"}
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Auth;