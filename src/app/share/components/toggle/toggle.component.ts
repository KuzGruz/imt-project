import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'imt-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => ToggleComponent)
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements ControlValueAccessor {
    on = false;
    protected onChange!: (value: boolean) => void;
    protected onTouched!: () => void;

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(value: any): void {
        this.on = value;
    }

    toggle(event: boolean): void {
        this.on = event;
        if (this.onChange) {
            this.onChange(event);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
}
