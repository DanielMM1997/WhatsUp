import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DavidComponent } from './david/david.component';
import { MariaComponent } from './maria/maria.component';



@NgModule({
  declarations: [
    DavidComponent,
    MariaComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    DavidComponent,
    MariaComponent
  ]
})
export class ComponentsModule { }
