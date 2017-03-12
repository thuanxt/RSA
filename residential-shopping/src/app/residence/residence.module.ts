import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ResidenceRoutingModule } from './residence-routing.module';

import { ResidenceComponent } from './residence.component';

import { ResidenceService } from './shared/residence.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        ResidenceRoutingModule
    ],
    exports: [],
    declarations: [
        ResidenceComponent
    ],
    providers: [
        ResidenceService
    ],
})
export class ResidenceModule { }
