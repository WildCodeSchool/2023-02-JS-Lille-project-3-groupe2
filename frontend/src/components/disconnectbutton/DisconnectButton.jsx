import React from "react";
import "./DisconnectButton.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function DisconnectButton() {
  const { logout, setIsLogin } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className="disconnect_button"
        onClick={() => {
          logout();
          navigate("/");
          setIsLogin(false);
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}

export default DisconnectButton;
