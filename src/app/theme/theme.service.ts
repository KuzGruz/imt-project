import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Themes } from './theme-models';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private readonly themeKey: string = 'theme';
    private readonly theme$ = new BehaviorSubject<Themes>(localStorage.getItem(this.themeKey) as Themes || Themes.Light);
    private renderer: Renderer2;

    get currentTheme$(): Observable<Themes> {
        return this.theme$.asObservable();
    }

    constructor(@Inject(DOCUMENT) private readonly document: Document,
                private readonly rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.theme$.asObservable()
            .subscribe(theme => {
                localStorage.setItem(this.themeKey, theme);
                this.renderer.setAttribute(this.document.body, 'class', theme);
            });
    }

    toggleTheme(theme?: Themes): void {
        if (theme) {
            this.theme$.next(theme);
        } else {
            const currentTheme = this.theme$.getValue();

            this.theme$.next(currentTheme === Themes.Light ? Themes.Dark : Themes.Light);
        }
    }
}
