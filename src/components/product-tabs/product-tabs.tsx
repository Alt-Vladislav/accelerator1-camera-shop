import { CameraType, CameraCategory, CameraLevel } from '../../types';
import { memo, useState } from 'react';
import classNames from 'classnames';

type ProductTabsProps = {
  vendorCode: string;
  category: CameraCategory;
  type: CameraType;
  level: CameraLevel;
  description: string;
}


function BaseProductTabs({ vendorCode, category, type, level, description }: ProductTabsProps): JSX.Element {
  const [isDescriptionActive, setIsDescriptionActive] = useState(true);
  const handleTabClick = () => setIsDescriptionActive((prev) => !prev);
  const tabs = [['Артикул', vendorCode], ['Категория', category], ['Тип камеры', type], ['Уровень', level]];

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={classNames('tabs__control', { 'is-active': !isDescriptionActive })} type="button" onClick={handleTabClick}>Характеристики</button>
        <button className={classNames('tabs__control', { 'is-active': isDescriptionActive })} type="button" onClick={handleTabClick}>Описание</button>
      </div>

      <div className="tabs__content">
        <div className={classNames('tabs__element', { 'is-active': !isDescriptionActive })}>
          <ul className="product__tabs-list">
            {
              tabs.map(([title, text]) => (
                <li key={title} className="item-list">
                  <span className="item-list__title">{title}:</span>
                  <p className="item-list__text"> {text}</p>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={classNames('tabs__element', { 'is-active': isDescriptionActive })}>
          <div className="product__tabs-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProductTabs = memo(BaseProductTabs);
