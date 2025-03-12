type ProductPictureProps = {
  imageJpg: string;
  imageJpg2x: string;
  imageWebp: string;
  imageWebp2x: string;
  width: number;
  height: number;
  title?: string;
}


export default function ProductPicture({ imageJpg, imageJpg2x, imageWebp, imageWebp2x, width, height, title = '' }: ProductPictureProps): JSX.Element {
  return (
    <div className="product-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet={`${imageWebp}, ${imageWebp2x} 2x`}
        />
        <img
          src={imageJpg}
          srcSet={imageJpg2x}
          width={width}
          height={height}
          alt={title}
        />
      </picture>
    </div>
  );
}
