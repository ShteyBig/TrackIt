import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponents } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...headerComponents],
  exports: [...headerComponents]
})
export class HeaderModule { }
