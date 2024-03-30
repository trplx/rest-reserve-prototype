import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './main.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage {

    constructor(
        private _router: Router
    ) {

    }

}
