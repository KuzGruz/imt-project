import { ChangeDetectionStrategy, Component, forwardRef, Inject, Injector, Input, OnInit } from '@angular/core';
import { FieldBase } from '../field-base';
import { UtilsService } from '../../../services/utils/utils.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
    selector: 'imt-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => TextareaComponent)
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends FieldBase implements ControlValueAccessor, OnInit {

    @Input() filedLabel: string | undefined;
    @Input() required = false;
    @Input() showValidate: boolean | undefined;

    constructor(@Inject(Injector) private readonly  injector: Injector,
                utils: UtilsService) {
        super(utils);
    }

    ngOnInit(): void {
        this.control = this.injector.get(NgControl);
    }
}
