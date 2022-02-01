import { Action} from '@ngrx/store'
import { Product } from '../product/product.model'

const ADD_PRODUCT = 'ADD_PRODUCT'

export function addProductReducer(state: Product[]=[], action:any){
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
}