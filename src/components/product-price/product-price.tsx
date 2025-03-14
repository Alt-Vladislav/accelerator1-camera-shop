import { memo } from 'react';
import classNames from 'classnames';

type ProductPriceProps = {
  isCard?: boolean;
  price: number;
}


function BaseProductPrice({ isCard = false, price }: ProductPriceProps): JSX.Element {
  return (
    <p className={classNames({ 'product-card__price': isCard, 'product__price': !isCard })}>
      <span className="visually-hidden">Цена:</span>
      {`${price.toLocaleString()} ₽`}
    </p>
  );
}

export const ProductPrice = memo(BaseProductPrice);
