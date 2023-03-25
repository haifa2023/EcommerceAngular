import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scategories } from '../models/scategories';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseurl="http://localhost:3001/api/scategories"


  constructor(private http:HttpClient) {}
  ListScategories():Observable<Scategories[]>
 {
 return this.http.get<Scategories[]>(this.baseurl);
 }

 GetScategorie():Observable<Scategories[]> //by id hethi
{
return this.http.get<Scategories[]>(this.baseurl);
} //hia kima lifou9ha
  
}
