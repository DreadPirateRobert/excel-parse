import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelParseComponent } from './excel-parse/excel-parse.component';


const routes: Routes = [
  {
      path: 'excel-parse',
      component: ExcelParseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
