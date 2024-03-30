import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CabinetPage } from './pages/cabinet.page';

const routes: Routes = [
    {
        path: '',
        component: CabinetPage,
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full',
            },
            {
                path: 'main',
                loadChildren: () => import('./children/main/main-routing.module')
                    .then((m: any) => m.MainRoutingModule),
            },
            {
                path: 'map',
                loadChildren: () => import('./children/map/map-routing.module')
                    .then((m: any) => m.MapRoutingModule),

            },
            {
                path: 'profile',
                loadChildren: () => import('./children/profile/profile-routing.module')
                    .then((m: any) => m.ProfileRoutingModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule
    ],
    declarations: [
        CabinetPage
    ]
})
export class CabinetRoutingModule { }
