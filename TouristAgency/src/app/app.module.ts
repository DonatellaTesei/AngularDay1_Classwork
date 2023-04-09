import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { TripsComponent } from './trips/trips.component';
import { HeroTripsComponent } from './hero-trips/hero-trips.component';
import { ContactComponent } from './contact/contact.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { LatestComponent } from './latest/latest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHomeComponent,
    HomePageComponent,
    FooterComponent,
    AboutComponent,
    HeroAboutComponent,
    TripsComponent,
    HeroTripsComponent,
    ContactComponent,
    ScrollToTopComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
