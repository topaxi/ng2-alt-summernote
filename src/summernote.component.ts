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
    providers: [SUMMERNOTE_VALUE_ACCESSOR]
})
export class SummernoteComponent implements OnInit, OnDestroy, ControlValueAccessor {
    @Input()
    set options(options: SummernoteOptions) {
        this._options = options;
        this.addCallbacks();
        this.refreshOptions();
    }

    get options(): SummernoteOptions {
        return this._options;
    }

    @Input()
    set disabled(disabled: boolean) {
        if (disabled != null) {
            this._disabled = disabled;
            $(this.element.nativeElement).find('.summernote').summernote(disabled ? 'disable' : 'enable');
            this.refreshOptions();
        }
    }

    get disabled(): boolean {
        return this._disabled;
    }

    private _disabled: boolean = false;
    
    private _options: SummernoteOptions;

    private onTouched = () => { };
    private onChange: (value: string) => void = () => { };

    constructor(private element: ElementRef) {

    }
    private _value: string;

    set value(value: string) {
        this._value = value;
    }
    get value(): string {
        return this._value;
    }

    private refreshOptions() {
        $(this.element.nativeElement).find('.summernote').summernote(this.options);
    }

    private addCallbacks(){
        this.options.callbacks = {
            onChange: (contents, $editable) => {
                this.onChange(contents);
            },
            onTouched: () => {
                this.onTouched();
            }
        };
    }

    ngOnInit() {
        if (this.options == null) {
            this.options = {};
        }
        else{
            this.addCallbacks();
        }
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