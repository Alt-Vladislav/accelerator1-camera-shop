import { Review } from '../../../types';
import { memo } from 'react';
import { ProductRating } from '../../product-rating/product-rating';

type ReviewCardProps = {
  userReview: Review;
}


function BaseReviewCard({ userReview }: ReviewCardProps): JSX.Element {
  const { createAt, userName, advantage, disadvantage, review, rating } = userReview;
  const formattedDate = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(new Date(createAt));
  const itemList = [['Достоинства', advantage], ['Недостатки', disadvantage], ['Комментарий', review]];

  return (
    <li className="review-card">

      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={createAt.split('T')[0]}>{formattedDate}</time>
      </div>

      <ProductRating rating={rating} isReview />

      <ul className="review-card__list">
        {
          itemList.map(([title, text]) => (
            <li key={title} className="item-list">
              <span className="item-list__title">{title}:</span>
              <p className="item-list__text">{text}</p>
            </li>
          ))
        }
      </ul>
    </li>
  );
}

export const ReviewCard = memo(BaseReviewCard);
