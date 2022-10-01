import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'imt-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['../sign-up-common.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {

    readonly form: FormGroup;
    readonly submitted$ = new BehaviorSubject<boolean>(false);

    constructor(private readonly apiService: SignUpService) {
        this.form = this.apiService.form;
    }

    signUp(): void {
        this.submitted$.next(true);
        if (this.form.valid) {
            this.apiService.nextStep();
        }
    }
}
