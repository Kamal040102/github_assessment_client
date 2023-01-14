import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { PageNotFoundErrorComponent } from './Components/page-not-found-error/page-not-found-error.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserNotFoundErrorComponent } from './Components/user-not-found-error/user-not-found-error.component';

const routes: Routes = [
  {path:'', component: FormComponent},
  {path:'repos/:username', component: UserDetailsComponent},
  {path:'user-not-found/:username', component: UserNotFoundErrorComponent},
  {path:"**", component: PageNotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
