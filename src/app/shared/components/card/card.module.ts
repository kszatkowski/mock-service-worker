import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
