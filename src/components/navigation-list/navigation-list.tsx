import { Navigation } from '../../consts';
import { Page } from '../../types';
import { getPageName } from '../../utils';
import { Link } from 'react-router-dom';

type NavigationListProps = {
  currentPage: Page | undefined;
  type: keyof typeof NavigationClass;
}

const NavigationClass = {
  Header: {
    Ul: 'main-nav__list',
    Li: 'main-nav__item',
    Link: 'main-nav__link'
  },
  Footer: {
    Ul: 'footer__list',
    Li: 'footer__item',
    Link: 'link'
  }
} as const;


export default function NavigationList({ currentPage, type }: NavigationListProps): JSX.Element {
  return (
    <ul className={NavigationClass[type].Ul}>
      {
        Object.entries(Navigation).map(([key, { Name, Path }]) => (
          <li key={key} className={NavigationClass[type].Li}>
            {
              Path === null || currentPage === getPageName(Path)
                ? <span className={NavigationClass[type].Link}>{Name}</span>
                : <Link className={NavigationClass[type].Link} to={Path}>{Name}</Link>
            }
          </li>
        ))
      }
    </ul>
  );
}
