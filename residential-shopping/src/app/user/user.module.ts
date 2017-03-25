import { NgModule } from '@angular/core';

// Import Shared Module
import { SharedModule } from '../shared/shared.module'; 

// Import routing module
import { UserRoutingModule } from './user-routing.module';

// Import Component
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';

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
        UserLoginComponent
    ],
    providers: [
        UserService
    ],
})
export class UserModule { }
