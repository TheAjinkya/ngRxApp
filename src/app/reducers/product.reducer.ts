import { Action } from '@ngrx/store';
import { Product } from '../product/product.model';

const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

DELETE_PRODUCT

export function addProductReducer(state: Product[] = [], action: any) {
  console.log('addProdReducer');
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return [...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1)];
    default:
      return state;
  }
}
