import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export type ConfigType = typeof environment;
export const CONFIG = new InjectionToken<ConfigType>('app config');
