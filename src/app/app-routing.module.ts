import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartsiteComponent } from './startsite/startsite.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'', component: StartsiteComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

