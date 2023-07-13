import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import iconGoogle from "../../assets/iconGoogle.png";
import iconLinkedin from "../../assets/iconLinkedin.png";

export default function LoginForm() {
  return (
    <div className="container-global">
      <form className="container-form-login">
        <h1 className="h1-title-connexion">Connexion</h1>
        <div className="label-login">
          <label htmlFor="email">Email :</label>
          <input
            // className="input-login"
            type="email"
            name="email"
            placeholder="Veuillez rentrer votre email..."
            required
          />

          <label htmlFor="password">Mot de passe : </label>
          <input
            // className="input-login"
            type="password"
            name="password"
            placeholder="Veuillez rentrer votre mot de passe..."
            required
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
            <Link to="/register"> Vous n'avez pas de compte?</Link>
            <br />
            <span>Mot de passe oublier?</span>
          </div>
          <div className="container-btn-validate">
            <button type="submit" className="btn-validate-login">
              VALIDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
