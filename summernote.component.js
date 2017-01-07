"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SummernoteComponent = (function () {
    function SummernoteComponent(element) {
        this.element = element;
    }
    SummernoteComponent.prototype.ngOnInit = function () {
        $(this.element.nativeElement).find('.summernote').summernote();
    };
    SummernoteComponent.prototype.ngOnDestroy = function () {
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    };
    return SummernoteComponent;
}());
SummernoteComponent = __decorate([
    core_1.Component({
        selector: 'summernote',
        template: '<div class="summernote"></div>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SummernoteComponent);
exports.SummernoteComponent = SummernoteComponent;
//# sourceMappingURL=summernote.component.js.map