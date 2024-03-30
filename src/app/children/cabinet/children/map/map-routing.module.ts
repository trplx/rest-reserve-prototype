import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapPage } from './pages/map.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
    {
        path: '',
        component: MapPage,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule
    ],
    declarations: [
        MapPage
    ]
})
export class MapRoutingModule { }
