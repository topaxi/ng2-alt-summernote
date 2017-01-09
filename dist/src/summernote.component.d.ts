/// <reference path="../../summernote.d.ts" />
import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SummernoteComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private element;
    options: SummernoteOptions;
    disabled: boolean;
    private _disabled;
    private _options;
    private onTouched;
    private onChange;
    constructor(element: ElementRef);
    private _value;
    value: string;
    private refreshOptions();
    private addCallbacks();
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(code: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
