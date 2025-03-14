import { AppRoute } from '../../consts';
import { getPageName } from '../../utils';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectCamera } from '../../store/camera-slice/camera-selectors';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import UpButton from '../../components/up-button/up-button';


export default function Layout(): JSX.Element {
  const currentPage = getPageName(useLocation().pathname);
  const {data: camera} = useAppSelector(selectCamera);
  const title = currentPage ? AppRoute[currentPage].Title : '';

  return (
    <div className="wrapper">
      <Helmet>
        <title>{currentPage === 'Product' ? title.replace('@', camera?.name || '') : title}</title>
      </Helmet>

      <Header currentPage={currentPage} />

      <main>
        {currentPage === 'Catalog' && <Banner />}
        <div className="page-content">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>

      {/* TODO: сделать кнопку наверх */}
      {false && <UpButton />}
      <Footer currentPage={currentPage} />
    </div>
  );
}
