import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import service
import { Auth0Service } from './auth0.service'

@NgModule({
    imports: [ 
        CommonModule,
        NgbModule.forRoot()
    ],
    exports: [
        NgbModule
    ],
    declarations: [],
    providers: [
        Auth0Service
    ],
})
export class CoreModule { 
    // prevent core module imported by other feature module
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
