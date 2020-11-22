import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  orderDate;
  loginData;
  price;
  unit;
  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { 
    // console.info(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    this.getAPIdata();
    this.orderDate = new Date().toLocaleDateString();
    this.orderForm = this.fb.group({
      date: this.fb.control(this.orderDate),
      type: this.fb.control(null, [Validators.required]),
      price: this.fb.control(this.price),
      unit: this.fb.control(1, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    });
    this.unit = this.orderForm.value.unit || 1;
    this.loginData = history.state;
    if (this.loginData.name == undefined) {
      this.router.navigate(['/']);
    } else {
      this.snackBar.open(`You have logged in as ${this.loginData.name}.`, "Dismiss", {
        duration: 2000,
      });
    }
  }

  resetForm(f) {
    f.resetForm({date:this.orderDate, price:this.price});
  }

  processForm(f ) {
    console.info("proceeding to order/pay")
    f.value.price = this.price;
    this.router.navigateByUrl('/order/pay', {state: f.value});
  }

  getAPIdata () {
    this.http.get('http://localhost:3000/api/abc').subscribe(data => {
      this.price = data['BTCUSD'].averages.day || 123.123; 
    });
  }
}
