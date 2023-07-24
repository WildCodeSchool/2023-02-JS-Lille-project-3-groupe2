import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../assets/externatic_logo_candidate.png";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLogin, user, logout } = useAuth();
  if (user.userAuth.account_type === "candidat")
    return (
      <div className="navbarContainer">
        <div className="logoNavbar">
          <img src={logo} alt="externatic_logo" />
        </div>
        <div className="menuNavbar">
          <ul>
            <li>
              {" "}
              <Link to="/candidate">Accueil</Link>
            </li>
            <li>
              {" "}
              <Link to="/candidate/offer">Offres</Link>
            </li>
            <li>
              {" "}
              <Link to="/candidate/about">À propos</Link>
            </li>
            <li>
              {" "}
              <Link to="/candidate/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {!isLogin ? (
          <div className="loginNavbar">
            {" "}
            <Link to="/login">
              <button type="button"> Sign in</button>
            </Link>
            <Link to="/register">
              <button type="button"> Sign up</button>
            </Link>
          </div>
        ) : (
          <div className="userNavContainer">
            {" "}
            <p>{user.userInfos.firstname}</p>
            <p> {user.userInfos.lastname}</p>
            <span>
              <motion.button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
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
            <Link to="/offer">Offres</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">À propos</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {!isLogin ? (
        <div className="loginNavbar">
          {" "}
          <Link to="/login">
            <button type="button"> Sign in</button>
          </Link>
          <Link to="/register">
            <button type="button"> Sign up</button>
          </Link>
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
