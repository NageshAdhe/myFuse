import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
//import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SkeletonConfigService } from '@skeleton/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fuseConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _configService: SkeletonConfigService,
    private _platform: Platform
  ){

    // Add is-mobile class to the body if the platform is mobile
    if ( this._platform.ANDROID || this._platform.IOS )
    {
        this.document.body.classList.add('is-mobile');
    }
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     ngOnInit(): void
     {
         // Subscribe to config changes
         this._configService.config
             .pipe(takeUntil(this._unsubscribeAll))
             .subscribe((config) => {
                 this.fuseConfig = config;
 
                 if ( this.fuseConfig.layout.width === 'boxed' )
                 {
                     this.document.body.classList.add('boxed');
                 }
                 else
                 {
                     this.document.body.classList.remove('boxed');
                 }
             });
     }
}
