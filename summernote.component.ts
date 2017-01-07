/// <reference path="summernote.d.ts" />


import {Component,
    OnInit,
    OnDestroy,
    ElementRef,
    Input
} from '@angular/core';

@Component({
    selector:'summernote',
    template: '<div class="summernote"></div>'
})
export class SummernoteComponent implements OnInit,OnDestroy{
    @Input() options: SummernoteOptions;

    constructor(private element:ElementRef) {

    }

    ngOnInit(){
        if(this.options==null){
            this.options={};
        }
        $(this.element.nativeElement).find('.summernote').summernote(this.options);
    }

    ngOnDestroy(){
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    }
}