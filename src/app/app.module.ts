import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormComponent } from './Components/form/form.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { UserInformationComponent } from './Components/user-information/user-information.component';
import { RepoSectionComponent } from './Components/repo-section/repo-section.component';
import { UserInformationImageComponent } from './Components/user-information-image/user-information-image.component';
import { UserInformationDataComponent } from './Components/user-information-data/user-information-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundErrorComponent } from './Components/page-not-found-error/page-not-found-error.component';
import { UserNotFoundErrorComponent } from './Components/user-not-found-error/user-not-found-error.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoCardComponent } from './Components/repo-card/repo-card.component';
import { PrimaryBadgeComponent } from './Components/primary-badge/primary-badge.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    UserDetailsComponent,
    UserInformationComponent,
    RepoSectionComponent,
    UserInformationImageComponent,
    UserInformationDataComponent,
    PageNotFoundErrorComponent,
    UserNotFoundErrorComponent,
    RepoCardComponent,
    PrimaryBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
