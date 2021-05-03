import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './components/card/card.module';

const sharedModules = [
  CardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    sharedModules
  ]
})
export class SharedModule {
}
