import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartsiteComponent } from './startsite/startsite.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path:'', component: StartsiteComponent },
  { path: 'imprint', component: ImprintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

