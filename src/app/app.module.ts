import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { MailIconsComponent } from './mail-icons/mail-icons.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorksHeaderComponent } from './my-works-header/my-works-header.component';
import { JoinComponent } from './join/join.component';
import { EllPolloLocoComponent } from './ell-pollo-loco/ell-pollo-loco.component';
import { KochweltComponent } from './kochwelt/kochwelt.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartsiteComponent,
    MailIconsComponent,
    AboutMeComponent,
    NavbarComponent,
    MySkillsComponent,
    MyWorksHeaderComponent,
    JoinComponent,
    EllPolloLocoComponent,
    KochweltComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
