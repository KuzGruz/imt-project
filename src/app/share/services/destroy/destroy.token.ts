import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export const DESTROY_SERVICE = new InjectionToken<Subject<void>>('Destroy service');
