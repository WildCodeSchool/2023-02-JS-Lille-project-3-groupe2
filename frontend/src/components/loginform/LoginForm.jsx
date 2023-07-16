import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import iconGoogle from "../../assets/iconGoogle.png";
import iconLinkedin from "../../assets/iconLinkedin.png";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const [accountToSend, setAccountToSend] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({ email: "", password: "" });

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);
    setError({ email: "", password: "" }); // Reset both email and password errors

    try {
      const result = await login(email, password);
      console.info(result);
    } catch (err) {
      console.error(err);
      if (err.response) {
        if (err.response.status === 404) {
          setError({ ...error, email: "Email incorrect" }); // Set email error for 404 status
        } else if (err.response.status === 401) {
          setError({ ...error, password: "Mot de passe incorrect" }); // Set password error for 401 status
        } else {
          setError({ ...error, email: "Identifiants Incorrects" }); // Fallback error for other statuses
        }
      } else {
        setError({ ...error, email: "Identifiants Incorrects" }); // Fallback error for unknown errors
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-global">
      <form className="container-form-login">
        <h1 className="h1-title-connexion">Connexion</h1>
        <div className="label-login">
          <label htmlFor="email">Email :</label>
          <span className={`error-message ${error.email ? "active" : ""}`}>
            {error.email}
          </span>
          <input
            type="email"
            name="email"
            placeholder="Veuillez rentrer votre email..."
            required
            value={accountToSend.email}
            onChange={(e) =>
              setAccountToSend({ ...accountToSend, email: e.target.value })
            }
          />
          <label htmlFor="password">Mot de passe : </label>
          <span className={`error-message ${error.password ? "active" : ""}`}>
            {error.password}
          </span>{" "}
          <input
            type="password"
            name="password"
            placeholder="Veuillez rentrer votre mot de passe..."
            required
            value={accountToSend.password}
            onChange={(e) =>
              setAccountToSend({
                ...accountToSend,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="container-google-linkedin">
          <button type="button" className="btn-google-linkedin">
            <img src={iconGoogle} alt="logo google" />
          </button>

          <span>ou</span>

          <button type="button" className="btn-google-linkedin">
            <img src={iconLinkedin} alt="logo linkedin" />
          </button>
        </div>

        <div className="container-text-btnValidate">
          <div className="forget-account-or-password">
            <Link to="/register">Vous n'avez pas de compte?</Link>
            <br />
            <span>Mot de passe oublié ?</span>
          </div>
          <div className="container-btn-validate">
            <button
              onClick={(e) =>
                handleLogin(e, accountToSend.email, accountToSend.password)
              }
              type="submit"
              className="btn-validate-login"
              disabled={loading}
            >
              {loading ? "Chargement..." : "VALIDER"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
