import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="">
        <img className="logo__image" src="./images/logo.svg" alt="" />
      </Link>
      <ul className="header__list">
        <li className="header__item">
          <NavLink className="header__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/about">
            About
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/recipes">
            Recipe
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="btn">Browse recipes</button>
      </div>
    </header>
  );
}

export default Header;
