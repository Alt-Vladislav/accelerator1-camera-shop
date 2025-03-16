import classNames from 'classnames';
import './spinner.css';

type SpinnerProps = {
  isElevated?: boolean;
  isLowered?: boolean;
}


export default function Spinner({ isElevated = false, isLowered = false }: SpinnerProps): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <div className={classNames('spinner', { 'elevated': isElevated, 'lowered': isLowered })}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
