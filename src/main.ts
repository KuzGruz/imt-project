import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ImtModule } from './app/imt.module';
import { environment } from './environments/environment';
import { CONFIG } from './app/share/constants/config';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic([{provide: CONFIG, useValue: environment}]).bootstrapModule(ImtModule)
    .catch(err => console.error(err));
