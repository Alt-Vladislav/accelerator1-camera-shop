import { SliceName } from '../consts';
import { State } from '../../hooks/use-app-selector';
import { createSelector } from '@reduxjs/toolkit';


const getPromotionsState = (state: State) => state[SliceName.Promotions].promotions;

const selectPromotions = createSelector(
  getPromotionsState,
  (promotions) => promotions
);

export { selectPromotions };
