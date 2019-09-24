import { QuotationsService } from './../../services/quotations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-view',
  templateUrl: './quotation-view.page.html',
  styleUrls: ['./quotation-view.page.scss'],
})
export class QuotationViewPage implements OnInit {

  constructor(
  private qts: QuotationsService
    ) { }

  ngOnInit() {
    this.getQuotationsNew("qheader", "qdetail");
  }


  getQuotationsNew(qheader:any, qdetail:any){
    this.qts.getQuotationsNew(qheader, qdetail).subscribe(data => {
      if (data) {
        console.log("Data:", data);
      }
    });
  }


}
