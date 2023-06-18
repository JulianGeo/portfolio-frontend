import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { }

  //apiUrl: string = 'https://rlcfqljugzpltutjtmbk.supabase.co/rest/v1/project?select=*';
  apiUrl: string = 'https://rlcfqljugzpltutjtmbk.supabase.co/rest/v1/technology?select=*'
  apiKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsY2ZxbGp1Z3pwbHR1dGp0bWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDk4NDQsImV4cCI6MjAwMTkyNTg0NH0.36xq9K5SKvBbxeIsDLCMhU9_e6LqGtXJAvg-t4qd7w4';
  authorization: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsY2ZxbGp1Z3pwbHR1dGp0bWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDk4NDQsImV4cCI6MjAwMTkyNTg0NH0.36xq9K5SKvBbxeIsDLCMhU9_e6LqGtXJAvg-t4qd7w4';

  getAll(): Observable<any> {
    const headers = new HttpHeaders()
      .set('apikey', this.apiKey)
      .set('Authorization', this.authorization);

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
