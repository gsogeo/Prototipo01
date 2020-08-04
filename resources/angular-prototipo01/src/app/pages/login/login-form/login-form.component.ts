import { Router } from "@angular/router";
import { AuthenticationService, TokenPayload } from 'src/app/authentication.service';
import { Component } from '@angular/core';
import set = Reflect.set;
import { extractErrorMessagesFromErrorResponse } from 'src/app/core/components/helper-functions/extract-error-messages-from-error-response';
import { HttpErrorResponse } from '@angular/common/http';
import { FormStatus } from 'src/app/core/components/helper-functions/form-status';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {

  credentials: TokenPayload = {
    id: 0,
    nome: '',
    email: '',
    password: '',
    foto: ''
  }

  formStatus = new FormStatus();
  loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      (response) => {
        console.log(response)
        this.router.navigateByUrl('/')
      },
      (errorResponse: HttpErrorResponse) => {
        let messages = extractErrorMessagesFromErrorResponse(errorResponse);
        if(errorResponse.status == 401) {
          messages.push ("Email ou senha incorretos.")
        }
        this.formStatus.onFormSubmitResponse({success: false, messages: messages});
      },
    );

    return new Promise(resolve =>{
      setTimeout(() => resolve() , 1800);
    });
  }

  async loginAssync() {
    await this.login();
  }

}