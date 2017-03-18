import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenceComponent } from './residence.component';
import { ResidenceListComponent } from './residence-list/residence-list.component';

const routes: Routes = [
    { 
        path: 'residence',
        component: ResidenceComponent ,
        children: [
            {
                path: '',
                component: ResidenceListComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResidenceRoutingModule { }