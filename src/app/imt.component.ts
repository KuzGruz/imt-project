import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { User } from './sign-up/sign-up-models';

@Component({
    selector: 'imt-root',
    templateUrl: './imt.component.html',
    styleUrls: ['./imt.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImtComponent {

    readonly user$: Observable<User | null>;

    constructor(private readonly userService: UserService) {
        this.user$ = this.userService.getUser();
    }

    logout(): void {
        this.userService.reset();
    }
}
