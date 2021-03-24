import { Component, OnInit, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SkeletonConfigService} from  '@skeleton/services/config.service'
@Component({
  selector: 'app-vertical-layout-1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss']
})
export class Layout1Component implements OnInit {
  layMatConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {SkeletonConfigService} _skeletonConfigService
   */
  constructor(
      private _layMatConfigService: SkeletonConfigService
  )
  {
      // Set the defaults
     // this.navigation = navigation;

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
      this._layMatConfigService.config
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((config) => {
              this.layMatConfig = config;
          });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

}
