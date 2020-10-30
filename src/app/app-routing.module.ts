import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuardGuard } from './guards/home-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [HomeGuardGuard],
    children: [
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: 'detail/:id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
