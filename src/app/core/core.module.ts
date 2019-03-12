import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MaterialModule } from './shared/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
