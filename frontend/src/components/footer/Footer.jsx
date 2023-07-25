import { FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer_part1">
        <p className="footer_text1">
          Externatic, cabinet de recrutement informatique est un cabinet dédié
          au recrutement de profils d’experts, ingénieurs et managers dans le
          domaine de l’informatique
        </p>
      </div>
      <div className="footer_part2">
        <ul className="footer_text2">
          <Link to="/cgu">
            <li>Mentions légales</li>
          </Link>
          <Link to="/privacy">
            <li>Politique de confidentialité</li>
          </Link>
          <Link to="/cookies">
            <li>Politique de cookies</li>
          </Link>
        </ul>
        <div>
          <ul className="footer_text3">
            <li>Contact</li>
            <li>Tél. +33 (0)2 85 52 26 33</li>
            <li>Mail : contact@externatic.fr</li>
            <li>Adresse : 1 rue Racine – 44000 NANTES – France</li>
            <li>Tél. +33 (0)2 85 52 26 33</li>
            <li>Mail : contact@externatic.fr</li>
          </ul>
        </div>
      </div>
      <div className="footer_part3">
        <p className="footer_text4">Réseaux Sociaux</p>
        <div className="footer_icons">
          <FaSquareTwitter size={30} className="footer_icons_1" />
          <FaLinkedin size={30} className="footer_icons_1" />
        </div>
      </div>
    </footer>
  );
}
