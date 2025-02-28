export default function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <a className="header__logo" href="index.html" aria-label="Переход на главную">
          <svg width={100} height={36} aria-hidden="true">
            <use xlinkHref="#icon-logo" />
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="catalog.html">Каталог</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Гарантии</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Доставка</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
