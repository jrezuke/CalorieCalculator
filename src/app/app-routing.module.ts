import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SitesComponent } from "app/sites/sites.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'sites', component: SitesComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
