import { Routes, RouterModule } from "@angular/router";
import { PrincipalComponent } from './Components/principal/principal.component';
import { HomeComponent } from './Components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];   

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);