import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICartState,  IProduct } from '../states/cart.state';

@Injectable()
export class CartService {

    // constructor() {

    // }

    getProduct(): Observable<object> {
        let dummyProduct: IProduct[] = [
            {
                id: 1,
                name: 'Camera',
                price: 2000
            }, {
                id: 2,
                name: 'Mobile Phone',
                price: 1000
            }
        ];

        return Observable.of(dummyProduct);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
