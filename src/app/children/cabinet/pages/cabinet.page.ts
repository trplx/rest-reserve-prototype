import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'cabinet.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabinetPage {

    constructor(
        private _router: Router
    ) {
        
    }

    // /**
    //  * показывать табы только на уровне главных страниц
    //  * @returns Observable<boolean>
    //  */
    // public init(): Observable<boolean> {
    //     return this._router.events
    //         .pipe(
    //             filter((event: any) => event instanceof NavigationEnd),
    //             map((event: any) => event as NavigationEnd),
    //             map((event: NavigationEnd) => {
    //                 const urlArray: string[] = [
    //                     '/cabinet',
    //                     '/cabinet/main',
    //                     '/cabinet/payment-transfer',
    //                     '/cabinet/payment-transfer/layout',
    //                     '/cabinet/history',
    //                     '/cabinet/chat',
    //                     '/cabinet/showcase'
    //                 ];

    //                 return !urlArray.some((url: string) => url === event.url);
    //             }),
    //             takeUntil(this._destroy$)
    //         );
    // }

}
