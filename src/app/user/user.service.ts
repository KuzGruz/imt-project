import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../sign-up/sign-up-models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly currentUser$ = new BehaviorSubject<User | null>(null);


    save(user: User): void {
        this.currentUser$.next(user);
    }

    reset(): void {
        this.currentUser$.next(null);
    }

    getUser(): Observable<User | null> {
        return this.currentUser$.asObservable();
    }
}
