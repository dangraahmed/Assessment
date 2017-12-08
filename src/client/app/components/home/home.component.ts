// libs
import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../modules/ngrx/index';

// app
import { RouterExtensions, Config } from '../../modules/core/index';

import { Cart } from '../../modules/cart/actions/index';
import { ICartState, IProduct } from '../../modules/cart/index';
import { debug } from 'util';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public listOfProduct: any;
  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromStore.IAppState>, public routerext: RouterExtensions) { }

  ngOnInit() {
    this.store.select(fromStore.getProduct)
      .takeUntil(this._ngUnsubscribe)
      .subscribe(p => {
        this.store.dispatch(new Cart.CartAction());
        if (p !== undefined) {
          this.listOfProduct = p;
        }
      });
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

}
