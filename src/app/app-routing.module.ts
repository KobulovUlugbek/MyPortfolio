import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartsiteComponent } from './startsite/startsite.component';


const routes: Routes = [
  { path:'', component: StartsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
