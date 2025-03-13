import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/use-scroll-to-top';

type LogoProps = {
  location: 'header' | 'footer';
  isUpButton: boolean;
}


export default function Logo({ location, isUpButton }: LogoProps): JSX.Element {
  const scrollToTop = useScrollToTop();
  const handleLinkClick = (evt: React.MouseEvent) => {
    if (isUpButton) {
      evt.preventDefault();
      scrollToTop();
    }
  };

  return (
    <Link className={`${location}__logo`} to={AppRoute.Catalog.Path} aria-label={AppRoute.Catalog.TitleLink} onClick={handleLinkClick}>
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref={`#icon-logo${location === 'footer' ? '-mono' : ''}`} />
      </svg>
    </Link>
  );
}
