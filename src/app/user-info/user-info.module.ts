import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFirstComponent } from './view-first/view-first.component';
import { ViewSecondComponent } from './view-second/view-second.component';
import { ViewThirdComponent } from './view-third/view-third.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './shared/user.service';
import { MaterialModule } from '../core/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ViewFirstComponent, ViewSecondComponent, ViewThirdComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [UserService]
})
export class UserInfoModule { }
