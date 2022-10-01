import { UtilsService } from '../../services/utils/utils.service';
import { NgControl } from '@angular/forms';

export abstract class FieldBase {

    abstract filedLabel: string | undefined;
    abstract required: boolean;
    abstract showValidate: boolean | undefined;
    control: NgControl | undefined;
    value: string | undefined;

    protected onChange!: (str: string) => void;
    protected onTouched!: () => void;

    get showValidateInFiled(): boolean {
        if (this.showValidate === undefined) {
            return this.required;
        } else {
            return this.showValidate && this.required;
        }
    }

    protected constructor(protected readonly utils: UtilsService) {
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: (str: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    clear(event: Event): void {
        this.utils.preventEvent(event);
        this.value = '';
        this.control?.control?.reset();
    }

    changeValue(value: string): void {
        this.value = value;
        if (this.onChange) {
            this.onChange(value);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
}
