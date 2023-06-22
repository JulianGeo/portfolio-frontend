import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectListComponent } from './components/components/project-components/project-list/project-list.component';
import { EducationListComponent } from './components/components/education-components/education-list/education-list.component';
import { ExperienceListComponent } from './components/components/experience-components/experience-list/experience-list.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

    {
    path: 'test',
    component: ExperienceListComponent
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
    component: ProjectListComponent
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
