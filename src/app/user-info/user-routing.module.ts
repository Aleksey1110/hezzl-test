import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFirstComponent } from './view-first/view-first.component';
import { ViewSecondComponent } from './view-second/view-second.component';
import { ViewThirdComponent } from './view-third/view-third.component';

// Основные роуты модуля
const routes: Routes = [
    { path: 'first', component: ViewFirstComponent },
    { path: 'second', component: ViewSecondComponent },
    { path: 'third', component: ViewThirdComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
