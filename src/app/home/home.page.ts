import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { CashComponent } from '../components/cash/cash.component';
import { SalesComponent } from '../components/sales/sales.component';
import { ManufactureComponent } from '../components/manufacture/manufacture.component';
import { ManufacturereportComponent } from '../components/manufacturereport/manufacturereport.component';
import { ExpenseComponent } from '../components/expense/expense.component';
import { LedgerComponent } from '../components/ledger/ledger.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [HeaderComponent, CustomerComponent, CashComponent, SalesComponent, ManufactureComponent, ManufacturereportComponent,ExpenseComponent, LedgerComponent, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
