import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [ 
  {path: 'product', component: ProductDetailComponent ,  canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'email-confirm/:userid/:code', component: EmailConfirmComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
