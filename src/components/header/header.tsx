import NavigationList from '../navigation-list/navigation-list';
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
          <NavigationList currentPage={currentPage} type='Header' />
        </nav>
      </div>
    </header >
  );
}
