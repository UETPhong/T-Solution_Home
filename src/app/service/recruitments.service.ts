import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentsService {

  get apiUrl(): string {
    return environment.apiUrl;
  }

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  // -----------------------GET------------------------------------
  // -----------------------GET------------------------------------
  // GET /api/recruitments
  // GET /api/recruitments/{id}



  getAll(option) {
    return this.http.get(`${this.apiUrl}/api/recruitments`, {params: option})
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/api/recruitments/${id}`)
  }

  // -----------------------END_GET------------------------------------
  // -----------------------END_GET------------------------------------

  // -----------------------PUT------------------------------------
  // -----------------------PUT------------------------------------
  // PUT /api/recruitments/{id}  
  // put(id, option) {
  //   return this.http.put(`${this.apiUrl}/api/recruitments/${id}`, option, {
  //     reportProgress: true,
  //     observe: 'events',
  //   })
  // }

  // -----------------------END_PUT------------------------------------
  // -----------------------END_PUT------------------------------------

  // -----------------------POT------------------------------------
  // -----------------------POT------------------------------------
  // POST /api/recruitments

  // post(option) {
  //   return this.http.post(`${this.apiUrl}/api/recruitments`, option, {
  //     reportProgress: true,
  //     observe: 'events',
  //   })
  // }

  // -----------------------END_POT------------------------------------
  // -----------------------END_POT------------------------------------

  // -----------------------DELETE------------------------------------
  // -----------------------DELETE------------------------------------
  // DELETE /api/recruitments/{id}

  // delete(id) {
  //   return this.http.delete(`${this.apiUrl}/api/recruitments/${id}`);
  // }

  // -----------------------END_DELETE------------------------------------
  // -----------------------END_DELETE------------------------------------




  get(endpoint: string, params?): Observable<any> {
    const headers = this.httpOptions.headers;
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers, params });
  }

  post(endpoint: string, data): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, this.httpOptions);
  }

  put(endpoint: string, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, this.httpOptions);
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`, this.httpOptions);
  }
}


