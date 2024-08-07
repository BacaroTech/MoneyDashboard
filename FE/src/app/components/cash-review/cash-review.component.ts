import { Component, OnInit } from '@angular/core';
import convertToName from 'src/app/common/mappingMonth';
import { Documents } from 'src/app/model/document';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-cash-review',
  templateUrl: './cash-review.component.html',
  styleUrls: ['./cash-review.component.css']
})
export class CashReviewComponent implements OnInit {

  datasBilancioValue: Number[] = [];
  datasBilancioLabelX: String[] = [];
  isLoadingBalance: boolean = true;

  constructor(private balance: BalanceService) { }

  ngOnInit(): void {
    this.balance.getAllDocument()
    .subscribe({
      next: (data: Documents[]) => {     
        this.datasBilancioValue = [];
        this.datasBilancioLabelX = [];
        this.normalizationDocumentForChar(data);
        this.isLoadingBalance = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoadingBalance = false;
      }
    }) 
  }

  private normalizationDocumentForChar(datas: Documents[]){
    datas.forEach(data => {
      this.datasBilancioLabelX.push(convertToName(data.data_inserimento.split('-')[1]));
      this.datasBilancioValue.push(
        data.contante + data.altro + data.conto
      );
    })
  }
  
}
