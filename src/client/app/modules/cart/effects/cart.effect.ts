import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { CartService } from '../services/cart.service';
import { Cart } from '../actions/index';
import { RouterExtensions } from '../../../modules/core/index';

@Injectable()
export class CartEffects {
    // @Effect() loadCartSlabs$: Observable<Action> = this.actions$
    //     .ofType(Cart.ActionTypes.LOAD_PRODUCT)
    //     .switchMap(() => this.cartService.getProduct())
    //     .map(payload => new Cart.CartSuccessfulAction(payload))
    //     .catch(() => Observable.of(new Cart.CartFailedAction()));

    @Effect()
    loadCartSlabs$: Observable<Action> = this.actions$
        .ofType(Cart.ActionTypes.LOAD_PRODUCT)
        .debounceTime(300)
        .map(toPayload)
        .switchMap(param => {
            return this.cartService.getProduct()
                .map(payload => {
                    return new Cart.CartSuccessfulAction(payload);
                })
                .catch((e) => {
                    return Observable.of(new Cart.CartFailedAction());
                });
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        public routerExt: RouterExtensions,
        private cartService: CartService) {

    }
}
