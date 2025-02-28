import { AppRoute } from '../../consts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../../pages/layout/layout';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import ErrorPage from '../../pages/error-page/error-page';


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Catalog.Path} element={<Layout />}>
            <Route index element={<CatalogPage />} />
            <Route path={AppRoute.Product.Path} element={<ProductPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
