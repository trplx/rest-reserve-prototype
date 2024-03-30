import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage {

    constructor(
        private _router: Router
    ) {

    }

}
