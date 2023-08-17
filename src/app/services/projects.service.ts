import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DbConnectionService } from './db-connection.service';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(
    private http: HttpClient,
    private dbService: DbConnectionService
  ) { }


  apiUrl: string = this.dbService.getConnection().apiUrl + 'project?select=name,description,githubUrl,webUrl,image_url,updated_at,show,project_tech(technology(technology_name))'

  //apiUrl: string = 'https://rlcfqljugzpltutjtmbk.supabase.co/rest/v1/project?select=name,description,project_tech(technology(technology_name))'

  getAll(): Observable<Project[]> {
    const headers = new HttpHeaders()
      .set('apikey', this.dbService.getConnection().apiKey)
      .set('Authorization', this.dbService.getConnection().authorization)

    return this.http.get<Project[]>(this.apiUrl, { headers }).pipe(
      map(projects => {
        console.log(projects)
        return projects.filter(project => project.show)
      })
    );


  }
}
