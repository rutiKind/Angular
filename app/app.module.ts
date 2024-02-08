
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './comp/menu/menu.component';
import { LoginComponent } from './comp/login/login.component';
import { RegistrComponent } from './comp/registr/registr.component';
import { TripsComponent } from './comp/trips/trips.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { HomeComponent } from './comp/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripDatailsComponent } from './comp/trip-datails/trip-datails.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';
import { CommonModule } from '@angular/common';
import { AllUserComponent } from './comp/all-user/all-user.component';
import {MatMenuModule} from '@angular/material/menu';
// import {MatExpansionModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FloatLabelType} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrComponent,
    TripsComponent,
    ProfileComponent,
    HomeComponent,
    TripDatailsComponent,
    AllUserComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    AsyncPipe,
    MatTabsModule,
    CommonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
