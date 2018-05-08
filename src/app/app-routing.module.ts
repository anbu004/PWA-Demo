import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'hn/createData', pathMatch: 'full' },
  { path: 'hn', loadChildren: './content/content.module#ContentModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
