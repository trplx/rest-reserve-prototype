import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    }
];
@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        IonicModule
    ]
})
export class AccountRoutingModule { }
