import { ICartState, IProduct } from '../states/index';
import { Cart } from '../actions/index';

export function cartReducer(
  state: ICartState,
  action: Cart.Actions
): any {
  let index: number;

  switch (action.type) {
    case Cart.ActionTypes.LOAD_PRODUCT_SUCCESSFUL:
      return (<any>Object).assign({}, state, { products: action.payload });

    default:
      return state;
  }
}
