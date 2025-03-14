import { Page } from '../../types';
import Logo from '../logo/logo';

type HeaderProps = {
  currentPage: Page | undefined;
}


export default function Header({ currentPage }: HeaderProps): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo location='header' isUpButton={currentPage === 'Catalog'} />
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
