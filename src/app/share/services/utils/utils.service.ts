import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() {
    }

    preventEvent(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }
}
