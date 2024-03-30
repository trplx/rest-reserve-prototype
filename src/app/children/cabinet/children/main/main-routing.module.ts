import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MainPage } from './pages/main.page';

const routes: Routes = [
    {
        path: '',
        component: MainPage,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule
    ],
    declarations: [
        MainPage
    ]
})
export class MainRoutingModule { }
