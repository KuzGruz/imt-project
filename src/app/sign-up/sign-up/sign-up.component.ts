import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignUpSteps } from '../sign-up-models';

@Component({
    selector: 'imt-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    providers: [SignUpService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {

    readonly form: FormGroup;
    readonly stepTitle$: Observable<string>;
    readonly step$: Observable<SignUpSteps>;
    readonly loading$: Observable<boolean>;

    get codeControl(): FormControl {
        return this.form.get('code') as FormControl;
    }

    get email(): string {
        return this.form.value.email;
    }

    constructor(private readonly apiService: SignUpService) {
        this.loading$ = this.apiService.loading$.asObservable();
        this.step$ = this.apiService.step$.asObservable();
        this.form = this.apiService.form;
        this.stepTitle$ = this.apiService.step$.pipe(
            map(step => {
                switch (step) {
                    case SignUpSteps.Confirm:
                        return `The code was sent to ${this.email}`;
                    case SignUpSteps.Form:
                        return 'Sign Up';
                    default:
                        return 'Новый шаг';
                }
            })
        );
    }
}
