import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import './error-page.css';

type ErrorPageProps = {
  isButtonHidden?: boolean;
};

export default function ErrorPage({ isButtonHidden = false }: ErrorPageProps): JSX.Element {
  return (
    <>
      <h1 className="title--h3 link-container">404 Ресурс не найден</h1>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      {
        isButtonHidden || (
          <div className="link-container">
            <Link to={AppRoute.Catalog.Path} className="btn btn--purple product-card__btn">
              На главную
            </Link>
          </div>
        )
      }
    </>
  );
}
