import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SummernoteComponent} from './summernote.component';

@NgModule({
    declarations:[
        SummernoteComponent
    ],
    exports:[
        SummernoteComponent
    ]
})
export class SummernoteModule{

}