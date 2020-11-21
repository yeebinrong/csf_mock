import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  isBuying;
  orderData;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.orderData = history.state;
    this.isBuying = this.orderData.type == 'buy' ? true : false;
  }

  createSnackBar() {
    this.snackBar.open("Your order has submitted", "Dismiss", {
      duration: 2000,
    })
  }
}
