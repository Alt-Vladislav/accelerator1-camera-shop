import { AppRoute } from '../../consts';
import { Camera } from '../../types';
import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setPreloadCamera } from '../../store/camera-slice/camera-slice';
import { ProductPicture } from '../product-picture/product-picture';
import { ProductRating } from '../product-rating/product-rating';
import { ProductTitle } from '../product-title/product-title';
import { ProductPrice } from '../product-price/product-price';
import { Button } from '../button/button';
import { ButtonLink } from '../button-link/button-link';

type CameraCardProps = {
  camera: Camera;
}

const ImageSize = {
  Width: 280,
  Height: 240
};


export default function CameraCard({ camera }: CameraCardProps): JSX.Element {
  const { id, name, category, price, rating, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;
  const currentLink = AppRoute.Product.Path.replace(':id', id.toString());
  const dispatch = useAppDispatch();
  const handleLinkClick = useCallback(() => dispatch(setPreloadCamera(camera)), [dispatch, camera]);

  return (
    <div className="product-card">
      <ProductPicture
        imageJpg={previewImg}
        imageJpg2x={previewImg2x}
        imageWebp={previewImgWebp}
        imageWebp2x={previewImgWebp2x}
        width={ImageSize.Width}
        height={ImageSize.Height}
        title={name}
        isCard
      />

      <div className="product-card__info">
        <ProductRating rating={rating} reviewCount={reviewCount} isCard />
        <ProductTitle name={name} category={category} isCard />
        <ProductPrice price={price} isCard />
      </div>

      <div className="product-card__buttons">
        <Button text='Купить' extraClass='product-card__btn' type='button' isPurple />
        <ButtonLink text='Подробнее' link={currentLink} background='Transparent' onClick={handleLinkClick} />
      </div>
    </div>
  );
}
