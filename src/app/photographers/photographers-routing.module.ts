import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
{
path:'',
component: LayoutPageComponent,
children: [
    {
    path: 'list',
    component: ListPageComponent,
    },
    {
    path: ':id',
    component: DetailsPageComponent,
    },
    {
    path: '**',
    redirectTo: 'list',
    } 
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PhotographersRoutingModule { }
