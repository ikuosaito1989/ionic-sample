import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as hogeStore from './hoge/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        hoge: hogeStore.reducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      },
    ),
    // 本番は気をつける
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
})
export class RootStoreModule {}
