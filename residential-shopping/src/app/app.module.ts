import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// import core module
import { CoreModule } from './core/core.module';

// import routing module
import { AppRoutingModule } from './app-routing.module';

// import feature module
import { ResidenceModule } from './residence/residence.module';

// import component
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    ResidenceModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
