import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { DavidComponent } from './server/david/david.component';
import { MariaComponent } from './server/maria/maria.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'david', component: DavidComponent},
  { path:'maria', component: MariaComponent},
  { path:'server', component: ServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
