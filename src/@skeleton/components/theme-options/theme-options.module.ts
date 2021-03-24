import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{ MatModuleModule } from '@skeleton/mat-modules.module';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
//import { MatModuleModule} from '@skeleton/mat-modules.module';
// import { FuseDirectivesModule } from '@fuse/directives/directives';
// import { FuseSidebarModule } from '@fuse/components/sidebar/sidebar.module';
// import { FuseMaterialColorPickerModule } from '@fuse/components/material-color-picker/material-color-picker.module';

import { ThemeOptionsComponent } from '@skeleton/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        ThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatModuleModule,
       
        // FlexLayoutModule,
      
        // MatButtonModule,
        // MatDividerModule,
        // MatFormFieldModule,
        // MatIconModule,
        // MatOptionModule,
        // MatRadioModule,
        // MatSelectModule,
        // MatSlideToggleModule,

        // FuseDirectivesModule,
        // FuseMaterialColorPickerModule,
        // FuseSidebarModule
    ],
    exports     : [
        ThemeOptionsComponent
    ]
})
export class ThemeOptionsModule
{
}
