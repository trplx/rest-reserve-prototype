import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./styles/login.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {

    constructor(
        private _router: Router
    ) {

    }

    public login(): void {
        this._router.navigate(['cabinet']);
    }

}
