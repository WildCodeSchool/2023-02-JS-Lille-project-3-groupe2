import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../assets/externatic_logo_candidate.png";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isLogin, user } = useAuth();

  return (
    <div className="navbarContainer">
      <div className="logoNavbar">
        <img src={logo} alt="externatic_logo" />
      </div>
      <div className="menuNavbar">
        <ul>
          <li>
            {" "}
            <Link to="/">Accueil</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Offres</Link>
          </li>
          <li>
            {" "}
            <Link to="/">À propos</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      {!isLogin ? (
        <div className="loginNavbar">
          {" "}
          <button type="button">Sign in</button>
          <button type="button">Sign up</button>
        </div>
      ) : (
        <div className="userNavContainer">
          {" "}
          <p>{user.userInfos.firstname}</p>
          <p> {user.userInfos.lastname}</p>
          <span>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <FiLogOut />
            </motion.button>
          </span>
        </div>
      )}
    </div>
  );
}
