import { NgModule } from '@angular/core';

// Import Shared Module
import { SharedModule } from '../shared/shared.module'; 

// Import routing module
import { ResidenceRoutingModule } from './residence-routing.module';

// Import Component
import { ResidenceComponent } from './residence.component';
import { ResidenceThumbnailComponent } from './residence-thumbnail/residence-thumbnail.component';
import { ResidenceListComponent } from './residence-list/residence-list.component';

// Import Service
import { ResidenceService } from './shared/residence.service';

@NgModule({
    imports: [
        SharedModule,
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
