import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoComponent } from './views/atendimento/atendimento.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full' },
{path:'Login',component:LoginComponent},
{path:'Home',component:HomeComponent},
{path:'Atendimento', component:AtendimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
