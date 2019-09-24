import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  baseUrl = environment.baseUrl;
  H: any;
  D:any;
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  addQuotaion(quotation) {
    return this.http.post(this.baseUrl + '/quotations', quotation);
  }

  updateQuotation(quotation) {
    return this.http.put(`${this.baseUrl}/quotations/${quotation.quotationId}`, quotation);
  }

  getQuotations() {
    return this.http.get(this.baseUrl + '/quotations');
  }

  getQuotationById(quotationId: number) {
    return this.http.get(`${this.baseUrl}/quotations/${quotationId}`);
  }


  SaveQoutation(header: any, detail: any) {
    this.storage.remove('qtheader');
    this.storage.remove('qdetail');
    const result = this.storage.set('qtheader', header).then(() => {
      this.storage.set('qdetail', detail);
    },
      error => {
        console.error('Error Registration. ', error);
        return null;
      });
    return from(result);
  }


  getQuotationsNew(qtheader: any, qdetail: any) {
    this.storage.get('qtheader').then((val) => {
      this.H = val;
    });
    return of(this.H);
  }
}
