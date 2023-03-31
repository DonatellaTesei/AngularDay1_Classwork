import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TripsComponent } from './trips/trips.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: "", component: HomePageComponent
}, {
  path: "about", component: AboutComponent
}, {
  path: "trips", component: TripsComponent
},{
  path: "contact", component: ContactComponent
},{
  path: "**", redirectTo: ""

}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
