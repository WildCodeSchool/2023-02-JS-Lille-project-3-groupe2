import { useAuth } from "../../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button type="button" className="logout_button" onClick={() => logout()}>
      Déconnexion
    </button>
  );
}
