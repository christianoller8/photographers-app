import { environment } from 'environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Photographer } from '../interfaces/photographer.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotographersService {

  // private username = 'test@gmail.com';
  // private password = '1234';
  // private baseUrl: string = 'https://inphototest.app2u.es/api/photographer/';

  // private headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
  // });

   // getPhotographer( ):Observable<Data> {
  //   return this.http.get<Data>(this.baseUrl, { headers: this.headers });
  // }

  // getPhotographerById( id: string ):Observable<Photographer> {
  //   return this.http.get<Photographer>(`${this.baseUrl}${id}`, { headers: this.headers });
  // }

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

getPhotographers( ): Observable<Photographer[]>{
  return this.http.get<Photographer[]>(`${this.baseUrl}/results`);
}

getPhotographerById (id: string): Observable<Photographer|undefined>{
  return this.http.get<Photographer>(`${this.baseUrl}/results/${id}`)
  .pipe(
      catchError ( error => of(undefined)
  ))
}

}