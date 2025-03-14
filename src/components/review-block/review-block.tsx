import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectReviews } from '../../store/camera-slice/camera-selectors';
import Spinner from '../spinner/spinner';
import { ReviewCard } from './review-card/review-card';
import { Button } from '../button/button';

const COMMENTS_STEP = 3;


export default function ReviewBlock() {
  const { data: reviews, loadingStatus } = useAppSelector(selectReviews);
  const [visibleCommentsNumber, setVisibleCommentsNumber] = useState(0);
  const handleButtonClick = () => {
    const nextVisibleCommentsNumber = visibleCommentsNumber + COMMENTS_STEP;
    setVisibleCommentsNumber(nextVisibleCommentsNumber > reviews.length ? reviews.length : nextVisibleCommentsNumber);
  };

  useEffect(() => {
    if (visibleCommentsNumber === 0 && reviews.length > 0) {
      setVisibleCommentsNumber(reviews.length < COMMENTS_STEP ? reviews.length : COMMENTS_STEP);
    }
  }, [visibleCommentsNumber, reviews.length]);

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
          </div>
          {
            loadingStatus === 'Loading'
              ?
              <Spinner />
              :
              (
                <ul className="review-block__list">
                  {reviews
                    .slice(0, visibleCommentsNumber)
                    .map((review) => <ReviewCard key={review.id} userReview={review} />)}
                </ul>
              )
          }

          {
            visibleCommentsNumber >= reviews.length || (
              <div className="review-block__buttons">
                <Button text='Показать больше отзывов' type='button' onClick={handleButtonClick} isPurple />
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
}
