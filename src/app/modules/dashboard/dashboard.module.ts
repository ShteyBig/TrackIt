import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { dashboardComponents, MainDashboardComponent } from './components';
import { DashboardItemDescriptionComponent } from './components/dashboard-item-description/dashboard-item-description.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [...dashboardComponents],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule
  ],
  entryComponents: [
    DashboardItemDescriptionComponent,
    EditItemComponent
  ],
  exports: [...dashboardComponents]
})
export class DashboardModule { }
