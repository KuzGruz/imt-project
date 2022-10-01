import { ChangeDetectionStrategy, Component, forwardRef, Inject, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { SelectItem } from '../select-types';
import { SelectBase } from '../select-base';
import { UtilsService } from '../../../services/utils/utils.service';

@Component({
    selector: 'imt-single-select',
    templateUrl: './single-select.component.html',
    styleUrls: ['./single-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SingleSelectComponent)
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSelectComponent extends SelectBase implements ControlValueAccessor, OnInit {

    @Input() filedLabel: string | undefined;
    @Input() required = false;
    @Input() showValidate: boolean | undefined;
    @Input() items: SelectItem[] = [];

    selected: SelectItem | undefined;
    selectedCode: string | undefined;

    constructor(@Inject(Injector) private readonly  injector: Injector,
                private readonly utils: UtilsService) {
        super();
    }

    ngOnInit(): void {
        this.control = this.injector.get(NgControl);
    }

    writeValue(code: string): void {
        this.selectedCode = code;
        this.selectByCode();
    }

    select(code: string): void {
        this.selectedCode = code;
        this.selectByCode();
        if (this.onChange) {
            this.onChange(code);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }

    clear(event: MouseEvent): void {
        this.utils.preventEvent(event);
        this.selectedCode = undefined;
        this.selected = undefined;
        this.control?.control?.reset();
    }

    private selectByCode(): void {
        if (this.items.length) {
            this.selected = this.items.find(item => item.code === this.selectedCode);
        }
    }
}
