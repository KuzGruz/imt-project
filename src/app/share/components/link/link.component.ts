import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'imt-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {

    @Input() to: string[] | string | undefined;

}
