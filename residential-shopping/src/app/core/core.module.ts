import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [ 
        CommonModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        NgbModule.forRoot()
    ],
    exports: [
        InMemoryWebApiModule,
        NgbModule
    ],
    declarations: [],
    providers: [],
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
