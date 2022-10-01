import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Inject, Injector, Input, OnInit } from '@angular/core';
import { FieldBase } from '../field-base';
import { UtilsService } from '../../../services/utils/utils.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { FieldTypes } from '../field-types';

@Component({
    selector: 'imt-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => InputComponent)
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends FieldBase implements ControlValueAccessor, OnInit {

    @Input() filedLabel: string | undefined;
    @Input() required = false;
    @Input() showValidate: boolean | undefined | any;
    @Input() type: FieldTypes | string = FieldTypes.Text;

    hide = true;

    @HostBinding('class.filled') get filled(): boolean {
        return !!this.value;
    }

    get isPassword(): boolean {
        return this.type === 'password';
    }

    get computedType(): FieldTypes {
        if (this.isPassword) {
            return this.hide ? FieldTypes.Password : FieldTypes.Text;
        }

        return FieldTypes.Text;
    }

    constructor(@Inject(Injector) private readonly  injector: Injector,
                utils: UtilsService) {
        super(utils);
    }

    ngOnInit(): void {
        this.control = this.injector.get(NgControl);
    }
}
