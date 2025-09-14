function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Made with ❤️ and 🥑</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a href="" className="footer__link">
            <img
              src="/images/icon-instagram.svg"
              alt=""
              className="footer__icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">
            <img
              src="/images/icon-bluesky.svg"
              alt=""
              className="footer__icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">
            <img
              src="/images/icon-tiktok.svg"
              alt=""
              className="footer__icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
