import { Pipe, PipeTransform } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EnableErrors, errorMessages } from '../../constants/error-messages';

@Pipe({
    name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

    transform(value: unknown, control: NgControl | undefined): string | undefined {
        if (!control?.control) {
            return undefined;
        }
        const errorObject = control.control.errors;
        if (!errorObject) {
            return undefined;
        }
        const firstErrorCode = Object.keys(errorObject)[0] as EnableErrors;
        return errorMessages[firstErrorCode];
    }
}
