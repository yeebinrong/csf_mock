import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  orderDate;
  isBuying = true;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.orderDate = new Date().toLocaleDateString();

    this.orderForm = this.fb.group({
      date: this.fb.control(this.orderDate),
      type: this.fb.control(null, [Validators.required]),
      unit: this.fb.control('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    });
  }

  resetForm(f) {
    f.resetForm({date:this.orderDate});
  }

  processForm(f ) {
    if (f.value.type == 'buy') {
      this.isBuying = true;
    } else if (f.value.type == 'sell') {
      this.isBuying = false;
    }
    console.info("proceeding to order/pay")
    this.router.navigate(['/order/pay']);
    // f.resetForm({date:this.orderDate});
  }

}
