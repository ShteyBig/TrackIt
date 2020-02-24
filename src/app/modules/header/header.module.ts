import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponents, MainHeaderComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...headerComponents],
  exports: [MainHeaderComponent]
})
export class HeaderModule { }
