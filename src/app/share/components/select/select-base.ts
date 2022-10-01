import { NgControl } from '@angular/forms';

export abstract class SelectBase {
    abstract filedLabel: string | undefined;
    abstract required: boolean;
    abstract showValidate: boolean | undefined;
    control: NgControl | undefined;

    protected onChange!: (str: string) => void;
    protected onTouched!: () => void;

    get showValidateInFiled(): boolean {
        if (this.showValidate === undefined) {
            return this.required;
        } else {
            return this.showValidate && this.required;
        }
    }

    registerOnChange(fn: (code: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
