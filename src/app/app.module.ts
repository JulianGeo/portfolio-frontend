import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NavbarComponent } from './components/components/navbar/navbar.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ExperienceComponent } from './components/components/experience-components/experience/experience.component';
import { ExperienceListComponent } from './components/components/experience-components/experience-list/experience-list.component';
import { ProjectListComponent } from './components/components/project-components/project-list/project-list.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TechnologiesChartComponent } from './components/components/technologies-chart/technologies-chart.component';
import { SkillsContainerComponent } from './components/components/skills-container/skills-container.component';
import { EducationComponent } from './components/components/education-components/education/education.component';
import { EducationListComponent } from './components/components/education-components/education-list/education-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ProfessionalProfileComponent } from './components/components/professional-profile/professional-profile.component';
import { EducationPopupComponent } from './components/components/education-components/education-popup/education-popup.component';
import { ExperiencePopupComponent } from './components/components/experience-components/experience-popup/experience-popup.component';
import { ProjectComponent } from './components/components/project-components/project/project.component';
import { EducationDetailComponent } from './components/components/education-components/education-detail/education-detail.component';
import { ExperienceDetailComponent } from './components/components/experience-components/experience-detail/experience-detail.component';
import { MaterialBModule } from './modules/materialB/materialB.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    ExperienceComponent,
    ExperienceListComponent,
    ProjectListComponent,
    HomePageComponent,
    ProjectsComponent,
    AboutMeComponent,
    TechnologiesChartComponent,
    SkillsContainerComponent,
    EducationComponent,
    EducationListComponent,
    ProfessionalProfileComponent,
    EducationPopupComponent,
    ExperiencePopupComponent,
    EducationDetailComponent,
    ExperienceDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialBModule,
    HttpClientModule,
    NgxChartsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
