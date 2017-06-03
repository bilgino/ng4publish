import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './src/dummy.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ]
})
export class ng4PublishModule {


}
