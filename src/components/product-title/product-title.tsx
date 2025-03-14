import { memo } from 'react';
import './product-title.css';

type ProductTitleProps = {
  isCard?: boolean;
  name: string;
  category: string;
}

const CorrectionMap = {
  SearchText: 'lV',
  ReplaceText: 'IV'
};

const EXCLUSION_CATEGORY = 'Ретрокамера';


function BaseProductTitle({ isCard = false, name, category }: ProductTitleProps): JSX.Element {
  const titleStart = name.includes(EXCLUSION_CATEGORY) ? '' : category;
  const title = `${titleStart} ${name.replace(CorrectionMap.SearchText, CorrectionMap.ReplaceText)}`;

  return (
    isCard
      ? <p className="product-card__title">{title}</p>
      : <h1 className="title title--h3">{title}</h1>
  );
}

export const ProductTitle = memo(BaseProductTitle);
