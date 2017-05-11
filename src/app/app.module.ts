import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './layout/card/card.component';
import { AzComponent } from './az/az.component';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { AzListComponent } from './az/az-list/az-list.component';
import { AzLiteralComponent } from './az/az-literal/az-literal.component';
import { AzTrainingListComponent } from './az/training/az-training-list/az-training-list.component';
import { AzProgressComponent } from './az/az-progress/az-progress.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CardComponent,
        AzComponent,
        NavComponent,
        LayoutComponent,
        AzListComponent,
        AzLiteralComponent,
        AzTrainingListComponent,
        AzProgressComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
