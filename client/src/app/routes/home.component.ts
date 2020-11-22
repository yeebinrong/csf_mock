import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  currDate = new Date ();
  minDate;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 21));
    this.loginForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      contact: this.fb.control('', [Validators.required, Validators.maxLength(13), Validators.pattern(/[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/)]),
      gender: this.fb.control('', [Validators.required]),
      dob: this.fb.control(this.minDate, [Validators.required]),
    });
  }

  processForm(f ) {
    console.info("proceeding to order")
    f.value.dob = new Date(f.value.dob);
    this.router.navigateByUrl('/order', { state: f.value});
  }
}
