import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICartState, IProduct } from '../states/cart.state';

@Injectable()
export class CartService {

    // constructor() {

    // }

    getProduct(): Observable<object> {
        let dummyProduct: IProduct[] = [
            { id: 1, name: 'Camera', price: 1000, description: 'No Description for Camera' },
            { id: 2, name: 'Mobile', price: 1100, description: 'No Description for Mobile' },
            { id: 3, name: 'TV', price: 1200, description: 'No Description for TV' },
            { id: 4, name: 'Computer', price: 1300, description: 'No Description for Computer' },
            // { id: 5, name: 'Wifi', price: 1400, description: 'No Description for Wifi' },
            // { id: 6, name: 'Monitor', price: 1500, description: 'No Description for Monitor' },
            // { id: 7, name: 'KeyBoard', price: 1600, description: 'No Description for KeyBoard' },
            // { id: 8, name: 'Mouse', price: 1700, description: 'No Description for Mouse' },
            // { id: 9, name: 'Tablet', price: 1800, description: 'No Description for Tablet' },
            // { id: 10, name: 'iPhone', price: 1900, description: 'No Description for iPhone' },
            // { id: 11, name: 'Camera', price: 2000, description: 'No Description for Camera' },
            // { id: 12, name: 'Mobile', price: 2100, description: 'No Description for Mobile' },
            // { id: 13, name: 'TV', price: 2200, description: 'No Description for TV' },
            // { id: 14, name: 'Computer', price: 2300, description: 'No Description for Computer' },
            // { id: 15, name: 'Wifi', price: 2400, description: 'No Description for Wifi' },
            // { id: 16, name: 'Monitor', price: 2500, description: 'No Description for Monitor' },
            // { id: 17, name: 'KeyBoard', price: 2600, description: 'No Description for KeyBoard' },
            // { id: 18, name: 'Mouse', price: 2700, description: 'No Description for Mouse' },
            // { id: 19, name: 'Tablet', price: 2800, description: 'No Description for Tablet' },
            // { id: 20, name: 'iPhone', price: 2900, description: 'No Description for iPhone' },
            // { id: 21, name: 'Camera', price: 3000, description: 'No Description for Camera' },
            // { id: 22, name: 'Mobile', price: 3100, description: 'No Description for Mobile' },
            // { id: 23, name: 'TV', price: 3200, description: 'No Description for TV' },
            // { id: 24, name: 'Computer', price: 3300, description: 'No Description for Computer' },
            // { id: 25, name: 'Wifi', price: 3400, description: 'No Description for Wifi' },
            // { id: 26, name: 'Monitor', price: 3500, description: 'No Description for Monitor' },
            // { id: 27, name: 'KeyBoard', price: 3600, description: 'No Description for KeyBoard' },
            // { id: 28, name: 'Mouse', price: 3700, description: 'No Description for Mouse' },
            // { id: 29, name: 'Tablet', price: 3800, description: 'No Description for Tablet' },
            // { id: 30, name: 'iPhone', price: 3900, description: 'No Description for iPhone' }
        ];

        return Observable.of(dummyProduct);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
