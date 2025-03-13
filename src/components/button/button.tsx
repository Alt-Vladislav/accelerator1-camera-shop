import classNames from 'classnames';

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isPurple?: boolean;
  isModal?: boolean;
  extraClass?: string;
  isDisabled?: boolean;
}


export default function Button({ text, type, isPurple = false, isModal = false, extraClass = '', isDisabled = false }: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(`btn ${extraClass}`, { 'btn--purple': isPurple, 'modal__btn': isModal })}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
