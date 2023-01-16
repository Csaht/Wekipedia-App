import { Action } from '@ngrx/store';
import { Product } from '../show-content/showContent.model';
import { ProductActionTypes } from '../userAction/userAction';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Product[] = [], action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
}
