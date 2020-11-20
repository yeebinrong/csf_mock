import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  orderForm: FormGroup;
  currDate = new Date ();
  minDate;
  orderDate;
  isProceed = false;
  isBuying = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderDate = new Date().toLocaleDateString();
    this.minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 21));
    this.loginForm = this.fb.group({
      name: this.fb.control('bin rong', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      contact: this.fb.control('83540269', [Validators.required, Validators.maxLength(13), Validators.pattern(/[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/)]),
      gender: this.fb.control('Male', [Validators.required]),
      dob: this.fb.control(this.minDate, [Validators.required]),
    });

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
    // f.resetForm({date:this.orderDate});
    if (f.value.type == 'buy') {
      this.isProceed = true;
      this.isBuying = true;
    } else if (f.value.type == 'sell') {
      this.isProceed = true;
      this.isBuying = false;
    }
  }
}
