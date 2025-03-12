import './product-title.css';

type ProductTitleProps = {
  name: string;
  category: string;
}

const CorrectionMap = {
  SearchText: 'lV',
  ReplaceText: 'IV'
};

const EXCLUSION_CATEGORY = 'Ретрокамера';


export default function ProductTitle({ name, category }: ProductTitleProps): JSX.Element {
  const titleStart = name.includes(EXCLUSION_CATEGORY) ? '' : category;

  return (
    <p className="product-card__title">
      {`${titleStart} ${name.replace(CorrectionMap.SearchText, CorrectionMap.ReplaceText)}`}
    </p>
  );
}
