import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './map.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPage {

    constructor(
        private _router: Router
    ) {

    }

}
