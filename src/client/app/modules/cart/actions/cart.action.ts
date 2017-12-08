import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import { ICartState, IProduct } from '../states/index';

export namespace Cart {
    export const CATEGORY: string = 'Cart';


    export interface ICartActions {
        LOAD_PRODUCT: string;
        LOAD_PRODUCT_SUCCESSFUL: string;
        LOAD_PRODUCT_FAILED: string;

    }

    export const ActionTypes: ICartActions = {
        LOAD_PRODUCT: type(`${CATEGORY} Product Load`),
        LOAD_PRODUCT_SUCCESSFUL: type(`${CATEGORY} Product Successful`),
        LOAD_PRODUCT_FAILED: type(`${CATEGORY} Product Failed`),
    };

    export class CartAction implements Action {
        type = ActionTypes.LOAD_PRODUCT;
        payload: string = null;
    }

    export class CartSuccessfulAction implements Action {
        type = ActionTypes.LOAD_PRODUCT_SUCCESSFUL;
        constructor(public payload: object) { }
    }

    export class CartFailedAction implements Action {
        type = ActionTypes.LOAD_PRODUCT_FAILED;
        payload: string = null;
    }

    export type Actions
        = CartAction
        | CartSuccessfulAction
        | CartFailedAction;
}
