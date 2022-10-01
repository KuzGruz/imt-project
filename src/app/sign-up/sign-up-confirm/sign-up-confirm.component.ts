import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DestroyService } from '../../share/services/destroy/destroy.service';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'imt-sign-up-confirm',
    templateUrl: './sign-up-confirm.component.html',
    styleUrls: ['../sign-up-common.scss'],
    providers: [DestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpConfirmComponent implements OnInit, OnDestroy {

    readonly form: FormGroup;
    readonly submitted$ = new BehaviorSubject<boolean>(false);

    get codeControl(): FormControl {
        return this.form.get('code') as FormControl;
    }

    constructor(@Inject(DestroyService) private readonly destroy$: Observable<void>,
                private readonly apiService: SignUpService,
                private readonly userService: UserService,
                private readonly router: Router) {
        this.form = this.apiService.form;
    }

    ngOnInit(): void {
        this.codeControl.setValidators(Validators.required);
    }

    signUp(): void {
        this.submitted$.next(true);
        if (this.form.valid) {
            this.apiService.signUp().pipe(take(1)).subscribe(user => {
                this.userService.save(user.results[0]);
                this.router.navigate(['/']).then();
            });
        }
    }

    ngOnDestroy(): void {
        this.codeControl.clearValidators();
    }
}
