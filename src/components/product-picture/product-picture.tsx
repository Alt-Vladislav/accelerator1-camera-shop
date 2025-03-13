import classNames from 'classnames';

type ProductPictureProps = {
  isCard?: boolean;
  imageJpg: string;
  imageJpg2x: string;
  imageWebp: string;
  imageWebp2x: string;
  width: number;
  height: number;
  title?: string;
}


export default function ProductPicture({ isCard = false, imageJpg, imageJpg2x, imageWebp, imageWebp2x, width, height, title = '' }: ProductPictureProps): JSX.Element {
  return (
    <div className={classNames({ 'product-card__img': isCard, 'product__img': !isCard })}>
      <picture>
        <source
          type="image/webp"
          srcSet={`/${imageWebp}, /${imageWebp2x} 2x`}
        />
        <img
          src={`/${imageJpg}`}
          srcSet={`/${imageJpg2x}`}
          width={width}
          height={height}
          alt={title}
        />
      </picture>
    </div>
  );
}
