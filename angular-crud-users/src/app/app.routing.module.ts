import { DetailsComponent } from './components/user/details/details.component';
import { CreateComponent } from './components/user/create/create.component';
import { ListComponent } from './components/user/list/list.component';
import { UpdateComponent } from './components/user/update/update.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListComponent },
  { path: 'add', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }