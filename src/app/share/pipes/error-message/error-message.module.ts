import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagePipe } from './error-message.pipe';


@NgModule({
    imports: [CommonModule],
    declarations: [ErrorMessagePipe],
    exports: [ErrorMessagePipe]
})
export class ErrorMessageModule {
}
