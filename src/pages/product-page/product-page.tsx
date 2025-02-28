import SliderSimilarProducts from '../../components/slider-similar-products/slider-similar-products';


export default function ProductPage(): JSX.Element {
  return (
    <>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"
                />
                <img
                  src="/img/content/das-auge.jpg"
                  srcSet="img/content/das-auge@2x.jpg 2x"
                  width={560}
                  height={480}
                  alt="Ретрокамера Das Auge IV"
                />
              </picture>
            </div>
            <div className="product__content">
              <h1 className="title title--h3">Ретрокамера «Das Auge IV»</h1>
              <div className="rate product__rate">
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
              <p className="product__price">
                <span className="visually-hidden">Цена:</span>73 450 ₽
              </p>
              <button className="btn btn--purple" type="button">
                <svg width={24} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-add-basket" />
                </svg>
                Добавить в корзину
              </button>
              <div className="tabs product__tabs">
                <div className="tabs__controls product__tabs-controls">
                  <button className="tabs__control" type="button">
                    Характеристики
                  </button>
                  <button className="tabs__control is-active" type="button">
                    Описание
                  </button>
                </div>
                <div className="tabs__content">
                  <div className="tabs__element">
                    <ul className="product__tabs-list">
                      <li className="item-list">
                        <span className="item-list__title">Артикул:</span>
                        <p className="item-list__text"> DA4IU67AD5</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Категория:</span>
                        <p className="item-list__text">Видеокамера</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Тип камеры:</span>
                        <p className="item-list__text">Коллекционная</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Уровень:</span>
                        <p className="item-list__text">Любительский</p>
                      </li>
                    </ul>
                  </div>
                  <div className="tabs__element is-active">
                    <div className="product__tabs-text">
                      <p>
                        Немецкий концерн BRW разработал видеокамеру Das Auge IV
                        в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор
                        пользуется популярностью среди коллекционеров
                        и&nbsp;яростных почитателей старинной техники.
                      </p>
                      <p>
                        Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству
                        аналоговой съёмки, заказав этот чудо-аппарат. Кто знает,
                        может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь
                        к&nbsp;наградам всех престижных кинофестивалей.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SliderSimilarProducts />

      <div className="page-content__section">
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              {/*<button class="btn" type="button">Оставить свой отзыв</button>*/}
            </div>
            <ul className="review-block__list">
              <li className="review-card">
                <div className="review-card__head">
                  <p className="title title--h4">Сергей Горский</p>
                  <time className="review-card__data" dateTime="2022-04-13">
                    13 апреля
                  </time>
                </div>
                <div className="rate review-card__rate">
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
                  <p className="visually-hidden">Оценка: 5</p>
                </div>
                <ul className="review-card__list">
                  <li className="item-list">
                    <span className="item-list__title">Достоинства:</span>
                    <p className="item-list__text">
                      Надёжная, хорошо лежит в руке, необычно выглядит
                    </p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Недостатки:</span>
                    <p className="item-list__text">
                      Тяжеловата, сложно найти плёнку
                    </p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Комментарий:</span>
                    <p className="item-list__text">
                      Раз в полгода достаю из-под стекла, стираю пыль, заряжаю —
                      работает как часы. Ни у кого из знакомых такой нет, все
                      завидуют) Теперь это жемчужина моей коллекции, однозначно
                      стоит своих денег!
                    </p>
                  </li>
                </ul>
              </li>
              <li className="review-card">
                <div className="review-card__head">
                  <p className="title title--h4">Пётр Матросов</p>
                  <time className="review-card__data" dateTime="2022-03-02">
                    2 марта
                  </time>
                </div>
                <div className="rate review-card__rate">
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-full-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg width={17} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <p className="visually-hidden">Оценка: 1</p>
                </div>
                <ul className="review-card__list">
                  <li className="item-list">
                    <span className="item-list__title">Достоинства:</span>
                    <p className="item-list__text">Хорошее пресс-папье</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Недостатки:</span>
                    <p className="item-list__text">
                      Через 3 дня развалилась на куски
                    </p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Комментарий:</span>
                    <p className="item-list__text">
                      При попытке вставить плёнку сломался механизм открытия
                      отсека, пришлось заклеить его изолентой. Начал настраивать
                      фокус&nbsp;— линза провалилась внутрь корпуса. Пока
                      доставал — отломилось несколько лепестков диафрагмы. От
                      злости стукнул камеру об стол, и рукоятка треснула
                      пополам. Склеил всё суперклеем, теперь прижимаю ей бумагу.
                      НЕ РЕКОМЕНДУЮ!!!
                    </p>
                  </li>
                </ul>
              </li>
              <li className="review-card">
                <div className="review-card__head">
                  <p className="title title--h4">Татьяна Кузнецова </p>
                  <time className="review-card__data" dateTime="2021-12-30">
                    30 декабря
                  </time>
                </div>
                <div className="rate review-card__rate">
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
                  <p className="visually-hidden">Оценка: 4</p>
                </div>
                <ul className="review-card__list">
                  <li className="item-list">
                    <span className="item-list__title">Достоинства:</span>
                    <p className="item-list__text">Редкая</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Недостатки:</span>
                    <p className="item-list__text">Высокая цена</p>
                  </li>
                  <li className="item-list">
                    <span className="item-list__title">Комментарий:</span>
                    <p className="item-list__text">
                      Дорого для портативной видеокамеры, но в моей коллекции
                      как раз не хватало такого экземпляра. Следов использования
                      нет, доставили в заводской упаковке, выглядит шикарно!
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button">
                Показать больше отзывов
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
