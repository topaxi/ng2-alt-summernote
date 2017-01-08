import { bindDirectiveInputs } from '@angular/compiler/src/view_compiler/property_binder';
/// <reference path="../summernote.d.ts" />

import {
    Component,
    OnInit,
    OnDestroy,
    ElementRef,
    Input,
    forwardRef
} from '@angular/core';

import {
    NG_VALUE_ACCESSOR
    , ControlValueAccessor
} from '@angular/forms';

const SUMMERNOTE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SummernoteComponent),
  multi: true
};

@Component({
    selector: 'summernote',
    template: '<div class="summernote"></div>',
    providers:[SUMMERNOTE_VALUE_ACCESSOR]
})
export class SummernoteComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() options: SummernoteOptions;

    @Input()
    set disabled(disabled:boolean){
        this._disabled=disabled;
        $(this.element.nativeElement).find('.summernote').summernote(disabled?'disable':'enable');
    }

    get disabled():boolean{
        return this._disabled;
    }

    private _disabled:boolean=false;

    private onTouched = () => { };
    private onChange: (value: string) => void = () => { };

    constructor(private element: ElementRef) {

    }
    private _value: string;

    set value(value: string) {
        this._value = value;
    }
    get value():string{
        return this._value;
    }

    ngOnInit() {
        if (this.options == null) {
            this.options = {};
        }
        this.options.callbacks={
            onChange:(contents, $editable)=>{
                this.onChange(contents);
            },
            onTouched:()=>{
                this.onTouched();
            }
        };
        $(this.element.nativeElement).find('.summernote').summernote(this.options);
    }

    ngOnDestroy() {
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    }

    writeValue(code: string) {
        this.value = code;

        jQuery(this.element.nativeElement).find('.summernote').summernote('code', code);
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}