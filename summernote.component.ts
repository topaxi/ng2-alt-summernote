import {Component,OnInit,OnDestroy,ElementRef} from '@angular/core';

@Component({
    selector:'summernote',
    template: '<div class="summernote"></div>'
})
export class SummernoteComponent implements OnInit,OnDestroy{
    constructor(private element:ElementRef) {

    }

    ngOnInit(){
        $(this.element.nativeElement).find('.summernote').summernote();
    }

    ngOnDestroy(){
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    }
}