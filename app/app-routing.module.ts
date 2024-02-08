import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { RegistrComponent } from './comp/registr/registr.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { TripsComponent } from './comp/trips/trips.component';
import { TripDatailsComponent } from './comp/trip-datails/trip-datails.component';
import { HomeComponent } from './comp/home/home.component';
import { AllUserComponent } from './comp/all-user/all-user.component';

const routes: Routes = [
   {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component:RegistrComponent},
  {path: 'Profile',component:ProfileComponent},
  {path:'Trips',component:TripsComponent},
  {path:'TripDetails/:tripId',component:TripDatailsComponent},
  {path:'allUsers',component:AllUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
