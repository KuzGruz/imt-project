import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ToggleModule } from '../share/components/toggle/toggle.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ToggleModule,
        FormsModule
    ],
    exports: [
        ThemeToggleComponent
    ],
    declarations: [ThemeToggleComponent]
})
export class ThemeModule {
}
