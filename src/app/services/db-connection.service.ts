import { Injectable } from '@angular/core';
import { Connection } from '../models/db-connection';

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {

  constructor() { }

  private connection: Connection = {
    apiUrl: 'https://rlcfqljugzpltutjtmbk.supabase.co/rest/v1/',
    apiKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsY2ZxbGp1Z3pwbHR1dGp0bWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDk4NDQsImV4cCI6MjAwMTkyNTg0NH0.36xq9K5SKvBbxeIsDLCMhU9_e6LqGtXJAvg-t4qd7w4',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsY2ZxbGp1Z3pwbHR1dGp0bWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNDk4NDQsImV4cCI6MjAwMTkyNTg0NH0.36xq9K5SKvBbxeIsDLCMhU9_e6LqGtXJAvg-t4qd7w4'
  }

  getConnection() {
    return this.connection;
  }
}
