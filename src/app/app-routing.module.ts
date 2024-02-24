import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectorApiPublicaComponent } from './lector_api/lector-api-publica/lector-api-publica.component';


const routes: Routes = [
  {path: '', component: LectorApiPublicaComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
