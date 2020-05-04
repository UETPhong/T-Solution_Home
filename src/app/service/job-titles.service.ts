import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobTitlesService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) { }

  // -----------------------GET------------------------------------
  // -----------------------GET------------------------------------
  // GET /api/jobtitle
  // GET /api/jobtitle/{id}
  // GET /api/jobtitle/export

  getAll() {
    return this.http.get(`${this.apiUrl}/api/jobtitle`)
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/api/jobtitle/${id}`)
  }
  getExport() {
    return this.http.get(`${this.apiUrl}/api/jobtitle/export`)
  }

  // -----------------------END_GET------------------------------------
  // -----------------------END_GET------------------------------------

  // -----------------------PUT------------------------------------
  // -----------------------PUT------------------------------------
  // PUT /api/jobtitle/{id}

  put(id, option) {
    return this.http.put(`${this.apiUrl}/api/jobtitle/${id}`, option, {
      reportProgress: true,
      observe: 'events',
    })
  }

  // -----------------------END_PUT------------------------------------
  // -----------------------END_PUT------------------------------------

  // -----------------------POT------------------------------------
  // -----------------------POT------------------------------------
  // POST /api/jobtitle
  // POST /api/jobtitle/import

  post(option) {
    return this.http.post(`${this.apiUrl}/api/jobtitle`, option, {
      reportProgress: true,
      observe: 'events',
    })
  }

  // -----------------------END_POT------------------------------------
  // -----------------------END_POT------------------------------------

  // -----------------------DELETE------------------------------------
  // -----------------------DELETE------------------------------------
  // DELETE /api/jobtitle/{id}

  delete(id) {
    return this.http.delete(`${this.apiUrl}/api/jobtitle/${id}`);
  }

  // -----------------------END_DELETE------------------------------------
  // -----------------------END_DELETE------------------------------------

}

