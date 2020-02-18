import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from '../components/index';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [...fromComponents.components]
})
export class ComponentsModule { }
