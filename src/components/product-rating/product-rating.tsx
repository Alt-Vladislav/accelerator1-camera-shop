import { memo } from 'react';
import classNames from 'classnames';

type ProductRatingProps = {
  isCard?: boolean;
  isReview?: boolean;
  rating: number;
  reviewCount?: number;
}

const STAR_COUNT = 5;


function BaseProductRating({ isCard = false, isReview = false, rating, reviewCount }: ProductRatingProps): JSX.Element {
  return (
    <div className={classNames('rate', {
      'product-card__rate': isCard,
      'review-card__rate': isReview,
      'product__rate': !isCard && !isReview
    })}
    >
      {
        Array.from({ length: STAR_COUNT }, (_, index) => (
          <svg key={`star-${index}`} width={17} height={16} aria-hidden="true">
            <use xlinkHref={index < rating ? '#icon-full-star' : '#icon-star'} />
          </svg>
        ))
      }

      <p className="visually-hidden">{`${isReview ? 'Оценка' : 'Рейтинг'}: ${rating}`}</p>

      {
        reviewCount !== undefined && (
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>
            {reviewCount}
          </p>
        )
      }
    </div>
  );
}

export const ProductRating = memo(BaseProductRating);
