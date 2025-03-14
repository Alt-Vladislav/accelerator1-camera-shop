import { memo } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isPurple?: boolean;
  isModal?: boolean;
  extraClass?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const ICON_TRIGGER_KEYWORDS = ['Добавить в корзину', 'Заказать'];

function BaseButton({ text, type, isPurple = false, isModal = false, extraClass = '', isDisabled = false, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(`btn ${extraClass}`, { 'btn--purple': isPurple, 'modal__btn': isModal })}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {
        (ICON_TRIGGER_KEYWORDS.includes(text)) &&
        (
          <svg width={24} height={16} aria-hidden="true">
            <use xlinkHref="#icon-add-basket" />
          </svg>
        )
      }

      {text}
    </button>
  );
}

export const Button = memo(BaseButton);
