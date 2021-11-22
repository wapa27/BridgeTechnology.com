import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutBridgeTechComponent } from './pages/about-bridge-tech/about-bridge-tech.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'about-bridge-technology', component: AboutBridgeTechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
