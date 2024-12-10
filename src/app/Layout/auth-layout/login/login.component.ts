import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { login } from 'src/app/Store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  loginForm!: FormGroup;
  passwordType: string = 'password'
  private fb = inject(FormBuilder)
  activeRoute: string = '';
  constructor(
    private store: Store,
    private alertController: AlertController
  ) {



  }


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['admin', [Validators.required]]
    })
  }


  toggleShow() {
    this.showPassword = !this.showPassword
    this.passwordType = this.showPassword ? 'text' : 'password'
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const form = this.loginForm.value;
      const obj = {
        username: form.username,
        password: form.password
      }
      this.store.dispatch(login({ username: obj.username, password: obj.password }));
    }
    else {
      alert('Fill the form')
    }
  }



}
