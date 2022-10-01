import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ErrorMessageModule } from '../../pipes/error-message/error-message.module';
import { LetModule } from '../../directives/let/let.module';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ErrorMessageModule,
        LetModule
    ],
    declarations: [InputComponent, TextareaComponent],
    exports: [InputComponent, TextareaComponent]
})
export class FieldModule {
}
