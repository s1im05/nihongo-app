import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AzComponent} from './az/az.component';
import {AzListComponent} from './az/az-list/az-list.component';
import {AzLiteralComponent} from './az/az-literal/az-literal.component';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'az/:type', component: AzComponent},
    {path: 'az/:type/list', component: AzListComponent},
    {path: 'az/:type/literal/:literal', component: AzLiteralComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
