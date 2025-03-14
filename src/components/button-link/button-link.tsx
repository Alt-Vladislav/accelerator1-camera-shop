import { memo } from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  text: string;
  link: string;
  background?: keyof typeof BackgroundSetting;
  onClick?: () => void;
}

const BackgroundSetting = {
  Transparent: {
    Class: 'btn--transparent'
  },
  PurpleBorder: {
    Class: 'btn--purple-border product-card__btn product-card__btn--in-cart',
  }
} as const;


function BaseButtonLink({ link, text, background, onClick }: ButtonLinkProps): JSX.Element {
  return (
    <Link to={link} className={`btn ${background ? BackgroundSetting[background].Class : ''}`} onClick={onClick}>
      {background === 'PurpleBorder' && (
        <svg width={16} height={16} aria-hidden="true">
          <use xlinkHref="#icon-basket" />
        </svg>
      )}
      {text}
    </Link>
  );
}

export const ButtonLink = memo(BaseButtonLink);
