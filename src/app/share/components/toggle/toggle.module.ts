import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        MatSlideToggleModule,
        FormsModule
    ],
    declarations: [ToggleComponent],
    exports: [ToggleComponent],
})
export class ToggleModule {
}
