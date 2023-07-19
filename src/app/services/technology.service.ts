import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(
    private http: HttpClient,
    private dbService: DbConnectionService
    ) { }

  apiUrl: string = this.dbService.getConnection().apiUrl + 'technology?select=*'

  getAll(): Observable<any> {
    const headers = new HttpHeaders()
      .set('apikey', this.dbService.getConnection().apiKey)
      .set('Authorization', this.dbService.getConnection().authorization);

    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      map(response => response
        .filter(item => item.main_skill === true)
        .map(item => ({
        name: item.technology_name,
        value: item.expertice
      })))
    );
  }



}
