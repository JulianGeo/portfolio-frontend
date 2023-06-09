import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NavbarComponent } from './components/components/navbar/navbar.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ProjectComponent } from './components/components/project/project.component';
import { ExperienceComponent } from './components/components/experience/experience.component';
import { ExperienceListComponent } from './components/components/experience-list/experience-list.component';
import { ProjectListComponent } from './components/components/project-list/project-list.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
