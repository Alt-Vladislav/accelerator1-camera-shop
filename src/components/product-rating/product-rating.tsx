import { memo } from 'react';
import classNames from 'classnames';

type ProductRatingProps = {
  isCard?: boolean;
  rating: number;
  reviewCount: number;
}

const STAR_COUNT = 5;


function BaseProductRating({ isCard = false, rating, reviewCount }: ProductRatingProps): JSX.Element {
  return (
    <div className={classNames('rate', { 'product-card__rate': isCard, 'product__rate': !isCard })}>
      {Array.from({ length: STAR_COUNT }, (_, index) => (
        <svg key={`star-${index}`} width={17} height={16} aria-hidden="true">
          <use xlinkHref={index < rating ? '#icon-full-star' : '#icon-star'} />
        </svg>
      ))}

      <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
}

export const ProductRating = memo(BaseProductRating);
