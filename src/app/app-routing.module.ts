import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },

  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
