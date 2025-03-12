import classNames from 'classnames';
import './spinner.css';

type SpinnerProps = {
  isElevated?: boolean;
}


export default function Spinner({ isElevated = false }: SpinnerProps): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <div className={classNames('spinner', { 'elevated': isElevated })}>
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
