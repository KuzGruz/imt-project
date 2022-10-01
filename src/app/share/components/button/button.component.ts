import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'imt-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

    @Output() onclick = new EventEmitter<Event>();

    @Input() buttonStyle: undefined | 'primary' | 'accent' | 'warn' = 'primary';
    @Input() type: 'submit' | 'button' | 'reset' | undefined;

    click(event: Event): void {
        this.onclick.emit(event);
    }
}
