import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpResponse, SignUpSteps } from './sign-up-models';
import { HttpClient } from '@angular/common/http';
import { CONFIG, ConfigType } from '../share/constants/config';
import { tap } from 'rxjs/operators';
import { AuthValidator } from '../share/validators/auth.validator';

@Injectable()
export class SignUpService {
    readonly step$ = new BehaviorSubject<SignUpSteps>(SignUpSteps.Form);
    readonly loading$ = new BehaviorSubject<boolean>(false);

    readonly form: FormGroup = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, AuthValidator.strongPassword]],
        confirmPassword: [null, [Validators.required, AuthValidator.strongPassword]],
        code: []
    }, {validator: AuthValidator.compareFields('password', 'confirmPassword')});

    constructor(@Inject(CONFIG) private readonly config: ConfigType,
                private readonly fb: FormBuilder,
                private readonly http: HttpClient) {
    }

    nextStep(): void {
        this.step$.next(this.step$.getValue() + 1);
    }

    signUp(): Observable<SignUpResponse> {
        this.loading$.next(true);
        return this.http.get<SignUpResponse>(this.config.baseUrl).pipe(
            tap(() => this.loading$.next(false))
        );
    }
}
