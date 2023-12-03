import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className={styles.btnLogo}>
        <img className={styles.logo} src={"/home.png"} alt="Logo Site" />
      </Link>
      <div
        className={styles.menu}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? styles.open : ""}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/about"
          >
            Sobre nós
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/products"
          >
            Modelos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/register"
          >
            Cadastre-se
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/users"
          >
            Clientes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
