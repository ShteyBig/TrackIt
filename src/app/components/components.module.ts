import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from '../components/index';
import { HeaderModule } from '../modules/header/header.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [...fromComponents.components, DashboardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardModule
  ],
  exports: [...fromComponents.components]
})
export class ComponentsModule { }
