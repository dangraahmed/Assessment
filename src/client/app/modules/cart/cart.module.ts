// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/index';
import { CART_PROVIDERS } from './services/index';
import { MultilingualModule } from '../i18n/multilingual.module';

@NgModule({
  imports: [
    SharedModule,
    MultilingualModule,
  ],
  providers: [
    ...CART_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SharedModule
  ]
})
export class CartModule {

  constructor(@Optional() @SkipSelf() parentModule: CartModule) {
    if (parentModule) {
      throw new Error('CartModule already loaded; Import in root module only.');
    }
  }
}
