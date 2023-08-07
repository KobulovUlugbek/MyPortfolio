import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { MailIconsComponent } from './mail-icons/mail-icons.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartsiteComponent,
    MailIconsComponent,
    AboutMeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
