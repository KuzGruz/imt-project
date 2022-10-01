import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSelectComponent } from './single-select/single-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorMessageModule } from '../../pipes/error-message/error-message.module';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ErrorMessageModule
    ],
    declarations: [SingleSelectComponent],
    exports: [SingleSelectComponent]
})
export class SelectModule {
}
