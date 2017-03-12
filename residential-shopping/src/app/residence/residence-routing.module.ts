import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenceComponent } from './residence.component';

const routes: Routes = [
    { 
        path: 'residence',
        component: ResidenceComponent ,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResidenceRoutingModule { }