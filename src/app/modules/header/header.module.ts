import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponents, MainHeaderComponent } from './components';
import { ProfileComponent } from './components/profile/component/profile.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...headerComponents, ProfileComponent],
  exports: [MainHeaderComponent]
})
export class HeaderModule { }
