import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';
import { Themes } from '../theme-models';
import { map } from 'rxjs/operators';

@Component({
    selector: 'imt-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
    readonly isDarkTheme$: Observable<boolean>;

    constructor(private readonly themeService: ThemeService) {
        this.isDarkTheme$ = this.themeService.currentTheme$.pipe(
            map(theme => theme === Themes.Dark)
        );
    }

    toggle(): void {
        this.themeService.toggleTheme();
    }
}
