import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CashFlow } from '../model/cashFlow';
import url from './setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  constructor(private http: HttpClient) { }

  getAllFlow(): Observable<CashFlow[]> {
    return this.http.get<CashFlow[]>(url+'/flow/getAll');
  }

  getFlowById(body: any): Observable<CashFlow[]> {
    return this.http.post<CashFlow[]>(url+'/flow/byID', body);
  }

  insertFlow(body: CashFlow[]): Observable<CashFlow[]> {
    return this.http.post<CashFlow[]>(url+'/flow/insertFlow', body);
  }

  updateFlow(body: CashFlow[]): Observable<CashFlow[]> {
    return this.http.post<CashFlow[]>(url+'/flow/updateFlow', body);
  }

  postForMonth(date: string): Observable<CashFlow[]> {
    return this.http.post<CashFlow[]>(url+'/flow/forMonth', {"date":date});
  }

  deleteFlow(body: any): Observable<any> {
    return this.http.post<any>(url+'/flow/deleteID', body);
  }
}
