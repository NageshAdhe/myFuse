import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SKELETON_CONFIG } from '@skeleton/services/config.service';

@NgModule()
export class SkeletonModule
{
    constructor(@Optional() @SkipSelf() parentModule: SkeletonModule)
    {
        if ( parentModule )
        {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<any>
    {
        return {
            ngModule : SkeletonModule,
            providers: [
                {
                    provide : SKELETON_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}

