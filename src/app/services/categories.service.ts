import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categories} from '../models/categories';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseurl="http://localhost:3001/api/categories"

  constructor(private http:HttpClient) {}

ListCategories():Observable<Categories[]>
 {
 return this.http.get<Categories[]>(this.baseurl);
 }

 AddCategories(cat: Categories):Observable<Categories>
 {
 return this.http.post<Categories>(this.baseurl,cat)
 }
 Deletecategories(id:object):Observable<Categories>
 {
 return this.http.delete<Categories>(this.baseurl + '/' + id);
 }


}
