import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { selectCamera } from '../../store/camera-slice/camera-selectors';
import { fetchCamera, fetchSimilarCameras, fetchReviews } from '../../store/camera-slice/camera-thunks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useScrollToTop from '../../hooks/use-scroll-to-top';
import Spinner from '../../components/spinner/spinner';
import ErrorPage from '../error-page/error-page';
import { ProductPicture } from '../../components/product-picture/product-picture';
import { ProductTitle } from '../../components/product-title/product-title';
import { ProductRating } from '../../components/product-rating/product-rating';
import { ProductPrice } from '../../components/product-price/product-price';
import { Button } from '../../components/button/button';
import { ProductTabs } from '../../components/product-tabs/product-tabs';
import ReviewBlock from '../../components/review-block/review-block';

const ImageSize = {
  Width: 560,
  Height: 480
};


export default function ProductPage(): JSX.Element {
  const { data: camera, loadingStatus } = useAppSelector(selectCamera);
  const cameraId = useParams().id;
  const dispatch = useAppDispatch();
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  useEffect(() => {
    if (cameraId && (loadingStatus === 'Unknown')) {
      dispatch(fetchCamera({ id: cameraId }));
      dispatch(fetchSimilarCameras({ id: cameraId }));
      dispatch(fetchReviews({ id: cameraId }));
    }
  }, [cameraId, loadingStatus, dispatch]);

  if (camera === null && loadingStatus === 'Loading') {
    return <Spinner isLowered/>;
  }
  if (cameraId === undefined || camera === null) {
    return <ErrorPage />;
  }

  const { name, vendorCode, type, category, description, level, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  return (
    <>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <ProductPicture
              imageJpg={previewImg}
              imageJpg2x={previewImg2x}
              imageWebp={previewImgWebp}
              imageWebp2x={previewImgWebp2x}
              width={ImageSize.Width}
              height={ImageSize.Height}
              title={name}
            />

            <div className="product__content">
              <ProductTitle name={name} category={category} />
              <ProductRating rating={rating} reviewCount={reviewCount} />
              <ProductPrice price={price} />
              <Button text='Добавить в корзину' type='button' isPurple />
              <ProductTabs vendorCode={vendorCode} category={category} type={type} level={level} description={description} />
            </div>
          </div>
        </section>
      </div>

      {/*TODO <SliderSimilarProducts /> */}
      <ReviewBlock />
    </>
  );
}
