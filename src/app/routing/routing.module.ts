import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { NewCastComponent } from '../new-cast/new-cast.component';
import { AuthGuard } from '../_guard/auth.guard';


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
      canActivate: [AuthGuard]
  },
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  providers: [
      AuthGuard
  ],
  declarations: []
})
export class RoutingModule { }
