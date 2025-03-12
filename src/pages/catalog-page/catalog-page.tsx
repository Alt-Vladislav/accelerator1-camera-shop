import { useAppSelector } from '../../hooks/use-app-selector';
import { selectCameras } from '../../store/cameras-slice/cameras-selectors';
import AsideBanner from '../../components/aside-banner/aside-banner';
import CameraList from '../../components/camera-list/camera-list';


export default function CatalogPage(): JSX.Element {
  const { data: cameras, loadingStatus } = useAppSelector(selectCameras);

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <AsideBanner />

          <div className="catalog__content">
            <CameraList cameras={cameras} loadingStatus={loadingStatus} />
          </div>
        </div>
      </div>
    </section>
  );
}
