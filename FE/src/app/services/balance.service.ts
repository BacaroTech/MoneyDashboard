import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from './setting';
import { Documents } from '../model/document';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }

  getAllDocument(): Observable<Documents[]> {
    return this.http.get<Documents[]>(url+'/balance/getAll');
  }

  getDocumentById(body: Documents[]): Observable<Documents[]> {
    return this.http.post<Documents[]>(url+'/balance/byID', body);
  }

  getAllDocumentByMonth(body: any): Observable<Documents[]> {
    return this.http.post<Documents[]>(url+'/balance/byMonth', body);
  }

  insertDocument(body: any): Observable<Documents[]> {
    return this.http.post<Documents[]>(url+'/balance/insertDocument', body);
  }
}
