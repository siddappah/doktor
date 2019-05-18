import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    tan: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('[A-Za-z]{4}[0-9]{5}[A-Za-z]{1}')
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(12),
      Validators.pattern('[0-9]')
    ]),
    doctors: new FormControl(3, [
      Validators.required,
      Validators.pattern('[0-9]')
    ]),
    subscribe: new FormControl('', [
      Validators.required,
    ])
  });
  constructor() { }

  ngOnInit() {
  }

  Save() {
    console.log(this.profileForm.valid);
  }

}
