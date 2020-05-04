import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobPositionsService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) { }

  // -----------------------GET------------------------------------
  // -----------------------GET------------------------------------
  // GET /api/position
  // GET /api/position/{id}
  // GET /api/position/export

  getAll() {
    return this.http.get(`${this.apiUrl}/api/position`)
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/api/position/${id}`)
  }
  getExport() {
    return this.http.get(`${this.apiUrl}/api/position/export`)
  }

  // -----------------------END_GET------------------------------------
  // -----------------------END_GET------------------------------------

  // -----------------------PUT------------------------------------
  // -----------------------PUT------------------------------------
  // PUT /api/position/{id}

  put(id, option) {
    return this.http.put(`${this.apiUrl}/api/position/${id}`, option, {
      reportProgress: true,
      observe: 'events',
    })
  }

  // -----------------------END_PUT------------------------------------
  // -----------------------END_PUT------------------------------------

  // -----------------------POT------------------------------------
  // -----------------------POT------------------------------------
  // POST /api/position
  // POST /api/position/import

  post(option) {
    return this.http.post(`${this.apiUrl}/api/position`, option, {
      reportProgress: true,
      observe: 'events',
    })
  }

  // -----------------------END_POT------------------------------------
  // -----------------------END_POT------------------------------------

  // -----------------------DELETE------------------------------------
  // -----------------------DELETE------------------------------------
  // DELETE /api/position/{id}

  delete(id) {
    return this.http.delete(`${this.apiUrl}/api/position/${id}`);
  }

  // -----------------------END_DELETE------------------------------------
  // -----------------------END_DELETE------------------------------------

}
