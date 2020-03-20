import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { APP_ROUTING } from './app.routes';

//services 
import { HomeService } from './services/home.services';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ HomeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
