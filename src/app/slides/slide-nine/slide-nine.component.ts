import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rto-slide-nine',
    styleUrls: ['./slide-nine.component.scss'],
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {}
