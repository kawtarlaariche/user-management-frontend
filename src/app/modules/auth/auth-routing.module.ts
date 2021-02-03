import { SignUpComponent } from './pages/signup/sign-up.component';
import { SignInComponent } from './pages/signin/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'signin', pathMatch:'prefix' },
  { path:'signin', component: SignInComponent },
  { path:'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
