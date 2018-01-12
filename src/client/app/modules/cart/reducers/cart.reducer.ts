import { ICartState, IProduct, ICartProduct } from '../states/index';
import { Cart } from '../actions/index';

export function cartReducer(
  state: ICartState,
  action: Cart.Actions
): any {
  let index: number;

  switch (action.type) {
    case Cart.ActionTypes.LOAD_PRODUCT_SUCCESSFUL:
      return (<any>Object).assign({}, state, { products: action.payload });

    case Cart.ActionTypes.REMOVE_TO_CART:
      index = state.selectedProduct.map(ts => ts.product.id).indexOf((<ICartProduct>action.payload).product.id);
      return (<any>Object).assign({}, state, {
        selectedProduct:
          [
            ...state.selectedProduct.slice(0, index),
            ...state.selectedProduct.slice(index + 1)
          ]
      });

    case Cart.ActionTypes.ADD_TO_CART:
      if (state.selectedProduct) {
        index = state.selectedProduct.map(ts => ts.product.id).indexOf((<IProduct>action.payload).id);

        if (index > -1) {
          return (<any>Object).assign({}, state, {
            selectedProduct:
              [
                ...state.selectedProduct.slice(0, index),
                Object.assign({}, state.selectedProduct[index], { product: action.payload, quantity: state.selectedProduct[index].quantity + 1 }),
                ...state.selectedProduct.slice(index + 1)
              ]
          });
        } else {
          return (<any>Object).assign({}, state, {
            selectedProduct:
              [
                ...state.selectedProduct,
                { product: action.payload, quantity: 1 }
              ]
          });

        }
      } else {
        return (<any>Object).assign({}, state, {
          selectedProduct:
            [
              { product: action.payload, quantity: 1 }
            ]
        });
      }


    default:
      return state;
  }
}
