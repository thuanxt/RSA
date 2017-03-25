import { NgModule } from '@angular/core';

// Import Shared Module
import { SharedModule } from '../shared/shared.module'; 

// Import routing module
import { UserRoutingModule } from './user-routing.module';

// Import Component
import { UserComponent } from './user.component';

// Import Service
import { UserService } from './shared/user.service';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule
    ],
    exports: [],
    declarations: [
        UserComponent,
    ],
    providers: [
        UserService
    ],
})
export class ResidenceModule { }
