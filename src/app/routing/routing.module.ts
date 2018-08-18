import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { NewCastComponent } from '../new-cast/new-cast.component';


const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'signup',
      component: SignupComponent,
  },
  {
      path: 'new',
      component: NewCastComponent,
  },
  {
      path: '',
      component: HomeComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
