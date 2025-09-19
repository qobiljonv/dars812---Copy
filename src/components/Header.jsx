import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header className="header">
        <Link className="header__logo" to="">
          <img className="logo__image" src="/images/logo.svg" alt="" />
        </Link>

        <div className="burger">
          <button onClick={handleToggle} className="burger-time">
            <img src="/images/icon-hamburger-menu.svg" alt="" />
          </button>

          {isOpen && (
            <div className="burger__box">
              <ul className="burger__list">
                <li className="burger__item">
                  <NavLink className="header__link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="burger__item">
                  <NavLink className="header__link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="burger__item">
                  <NavLink className="header__link" to="/recipes">
                    Recipe
                  </NavLink>
                </li>
              </ul>
              <button className="btn burger__btn">Browse recipes</button>
            </div>
          )}
        </div>
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
          <button className="btn header__btn">Browse recipes</button>
        </div>
      </header>
      <hr className="line" />
    </>
  );
}

export default Header;
