import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DavidComponent } from './david/david.component';
import { MariaComponent } from './maria/maria.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DavidComponent,
    MariaComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ], 
  exports: [
    DavidComponent,
    MariaComponent,
  ]
})
export class ComponentsModule { }
