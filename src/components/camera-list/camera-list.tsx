import { Camera } from '../../types';
import { LoadingStatus } from '../../store/types';
import Spinner from '../spinner/spinner';
import ErrorPage from '../../pages/error-page/error-page';
import CameraCard from '../camera-card/camera-card';
import './camera-list.css';

type CameraListProps = {
  cameras: Camera[];
  loadingStatus: LoadingStatus;
}


export default function CameraList({ cameras, loadingStatus }: CameraListProps): JSX.Element {
  if (loadingStatus === 'Error') {
    return <ErrorPage isButtonHidden />;
  }
  if (loadingStatus === 'Loading') {
    return <Spinner isElevated />;
  }

  return (
    cameras.length === 0
      ? (
        <h1 className='empty'>Ничего не нашлось</h1>
      )
      : (
        <div className="cards catalog__cards">
          {
            cameras.map((camera) => <CameraCard key={camera.id} camera={camera} />)
          }
        </div>
      )
  );
}
