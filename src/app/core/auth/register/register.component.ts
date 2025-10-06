import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InputComponent } from "../../../shared/components/input/input.component";
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)
  isLoading: boolean = false;
  msgError: string = "";

  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(2),
  //     Validators.maxLength(20),
  //   ]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  //   rePassword: new FormControl(null),
  //   phone: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^01[0125][0-9]{8}$/),
  //   ]),
  // }, { validators: this.confirmPassword });

  registerForm!: FormGroup

  initForm(): void {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [
        Validators.required,
        Validators.minLength(6), Validators.maxLength(20)
      ]],
      rePassword: [null, [Validators.required]],
      phone: [null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]]
    }, { validators: this.confirmPassword })
  }

  ngOnInit(): void {
    this.initForm()
  }

  newRes: Subscription = new Subscription();

  submitForm(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.newRes?.unsubscribe();
      this.newRes = this.authService.registerForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if (res.message === 'success') {
            this.msgError = "";
            setTimeout(() => {
              this.router.navigate(['/login'])
            }, 1000);
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
          this.msgError = err.error.message;
        }
      })
    }
    else {
      // this.registerForm.setErrors({ misMatch: true })
      // this.registerForm.get('rePassword')?.patchValue('')
      this.registerForm.markAllAsTouched()
    }
  }


  confirmPassword(group: AbstractControl) {
    let password = group.get('password')?.value
    let rePassword = group.get('rePassword')?.value
    if (password === rePassword) {
      return null
    } else {
      group.get('rePassword')?.setErrors({ misMatch: true });
      return { misMatch: true }
    }
  }

}
