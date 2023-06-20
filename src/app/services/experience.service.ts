import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private http: HttpClient,
    private dbService: DbConnectionService
  ) { }


  apiUrl: string = this.dbService.getConnection().apiUrl
  + 'experience?select=company,description,position,start_date,end_date,experience_tech(technology(technology_name))'


  getAll(): Observable<any> {
    const headers = new HttpHeaders()
      .set('apikey', this.dbService.getConnection().apiKey)
      .set('Authorization', this.dbService.getConnection().authorization);

    return this.http.get(this.apiUrl, { headers });
  }
}
