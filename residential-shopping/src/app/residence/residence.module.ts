import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ResidenceRoutingModule } from './residence-routing.module';

// Import Component
import { ResidenceComponent } from './residence.component';
import { ResidenceThumbnailComponent } from './residence-thumbnail/residence-thumbnail.component';
import { ResidenceListComponent } from './residence-list/residence-list.component';

import { ResidenceService } from './shared/residence.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule,
        ResidenceRoutingModule
    ],
    exports: [],
    declarations: [
        ResidenceComponent,
        ResidenceThumbnailComponent,
        ResidenceListComponent
    ],
    providers: [
        ResidenceService
    ],
})
export class ResidenceModule { }
