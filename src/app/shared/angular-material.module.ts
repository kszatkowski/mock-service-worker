import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const angularMaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [angularMaterialModules],
  exports: [angularMaterialModules]
})
export class AngularMaterialModule { }
