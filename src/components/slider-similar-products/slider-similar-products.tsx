export default function SliderSimilarProducts() {
  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>

          <div className="product-similar__slider">
            <div className="product-similar__slider-list">

              <div className="product-card is-active">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/fast-shot.webp, /img/content/fast-shot@2x.webp 2x"
                    />
                    <img
                      src="/img/content/fast-shot.jpg"
                      srcSet="/img/content/fast-shot@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Фотоаппарат FastShot MR-5"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 4</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>12
                    </p>
                  </div>
                  <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>18 970 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="product-card is-active">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/das-auge.webp, /img/content/das-auge@2x.webp 2x"
                    />
                    <img
                      src="/img/content/das-auge.jpg"
                      srcSet="/img/content/das-auge@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Ретрокамера «Das Auge IV»"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 3</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>23
                    </p>
                  </div>
                  <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="product-card is-active">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/instaprinter.webp, /img/content/instaprinter@2x.webp 2x"
                    />
                    <img
                      src="/img/content/instaprinter.jpg"
                      srcSet="/img/content/instaprinter@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Фотоаппарат Instaprinter P2"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 5</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>849
                    </p>
                  </div>
                  <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>8 430 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/das-auge.webp, /img/content/das-auge@2x.webp 2x"
                    />
                    <img
                      src="/img/content/das-auge.jpg"
                      srcSet="/img/content/das-auge@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Ретрокамера «Das Auge IV»"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 4</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>12
                    </p>
                  </div>
                  <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>18 970 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/das-auge.webp, /img/content/das-auge@2x.webp 2x"
                    />
                    <img
                      src="/img/content/das-auge.jpg"
                      srcSet="/img/content/das-auge@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Ретрокамера «Das Auge IV»"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 3</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>23
                    </p>
                  </div>
                  <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

              <div className="product-card">
                <div className="product-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/img/content/instaprinter.webp, /img/content/instaprinter@2x.webp 2x"
                    />
                    <img
                      src="/img/content/instaprinter.jpg"
                      srcSet="/img/content/instaprinter@2x.jpg 2x"
                      width={280}
                      height={240}
                      alt="Фотоаппарат Instaprinter P2"
                    />
                  </picture>
                </div>
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <svg width={17} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-full-star" />
                    </svg>
                    <p className="visually-hidden">Рейтинг: 5</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>849
                    </p>
                  </div>
                  <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                  <p className="product-card__price">
                    <span className="visually-hidden">Цена:</span>8 430 ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <button
                    className="btn btn--purple product-card__btn"
                    type="button"
                  >
                    Купить
                  </button>
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>

            </div>

            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              disabled
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
