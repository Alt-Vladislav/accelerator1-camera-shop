// import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageName } from '../../utils';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import UpButton from '../../components/up-button/up-button';


export default function Layout(): JSX.Element {
  const currentPage = getPageName(useLocation().pathname);

  return (
    <div className="wrapper">
      <Helmet>
        {/*TODO 'сделать helmet' <title>{currentPageName === 'Quest' ? title.replace('@', currentQuest?.title || '') : title}</title> */}
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
