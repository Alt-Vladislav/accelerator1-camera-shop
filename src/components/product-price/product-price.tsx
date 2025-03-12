type ProductPriceProps = {
  price: number;
}


export default function ProductPrice({ price }: ProductPriceProps): JSX.Element {
  return (
    <p className="product-card__price">
      <span className="visually-hidden">Цена:</span>
      {`${price.toLocaleString()} ₽`}
    </p>
  );
}
