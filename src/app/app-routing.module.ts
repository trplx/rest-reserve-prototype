import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./children/account/account-routing.module').then(m => m.AccountRoutingModule)
    },
    {
        path: 'test',
        loadChildren: () => import('./children/account/account-routing.module').then(m => m.AccountRoutingModule)
    },
    {
        path: 'cabinet',
        loadChildren: () => import('./children/cabinet/cabinet-routing.module').then(m => m.CabinetRoutingModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        HttpClient
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppRoutingModule { }
