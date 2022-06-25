import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuary: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  Login() {
    console.log(this.form);
    const usuary = this.form.value.usuary;
    const password = this.form.value.password;

    console.log(usuary);
    console.log(password);

    if(usuary == 'admin@company.com' && password == 'admin'){
      //Enter to the dashboard
      this.fakeLoading();
    } else {
      //show error
      this.openSnackBar();
      this.form.reset();
    }
  }
    openSnackBar() {
      this._snackBar.open('Incorrect username or password', 'Splash', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    }

    fakeLoading() {
      this.loading = true;
      setTimeout(() => {

        //for dashboard
        this.loading = false;
      },1500);
    }
  }


