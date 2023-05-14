import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { CompAComponent } from './home/comp-a/comp-a.component';
// import { CompBComponent } from './home/comp-b/comp-b.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './home/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CompAComponent,
    // CompBComponent,
    HeaderComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
