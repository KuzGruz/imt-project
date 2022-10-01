import { FormControl, FormGroup } from '@angular/forms';

export class AuthValidator {
    static readonly passwordMaxLength = 20;
    static readonly digitRegex = /[0-9]/;
    static readonly lowerCaseRegex = /[a-z]/;
    static readonly upperCaseRegex = /[A-Z]/;
    static readonly emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    static strongPassword(control: FormControl): { strong: boolean } | null {
        const value = control.value;
        if (value && (value.length > AuthValidator.passwordMaxLength || !value.match(AuthValidator.digitRegex) ||
            !value.match(AuthValidator.lowerCaseRegex) || !value.match(AuthValidator.upperCaseRegex))) {
            return {strong: true};
        }
        return null;
    }

    static compareFields(mainFieldName: string, extraFieldName: string): any {
        return (group: FormGroup): { passwordMismatch: boolean } | null => {
            const main = (group.get(mainFieldName) as FormControl).value;
            const extra = (group.get(extraFieldName) as FormControl).value;
            if (main && extra && main !== extra) {
                return {passwordMismatch: true};
            } else {
                return null;
            }
        };
    }
}
