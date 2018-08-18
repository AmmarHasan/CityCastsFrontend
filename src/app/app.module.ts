import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatMenuModule, MatCardModule, MatBadgeModule, MatSelectModule, MatInputModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CastComponent } from './cast/cast.component';
import { NewCastComponent } from './new-cast/new-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CastComponent,
    NewCastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent
  ]
})
export class AppModule { }
