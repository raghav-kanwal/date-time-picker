/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * timer-box.component
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
var OwlTimerBoxComponent = /** @class */ (function () {
    function OwlTimerBoxComponent() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    Object.defineProperty(OwlTimerBoxComponent.prototype, "displayValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.boxValue || this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlTimerBoxComponent.prototype, "owlDTTimerBoxClass", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                /** @type {?} */
                var inputValue = coerceNumberProperty(val, 0);
                _this.updateValueViaInput(inputValue);
            }
        }));
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.inputStreamSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.upBtnClicked = /**
     * @return {?}
     */
    function () {
        this.updateValue(this.value + this.step);
    };
    /**
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.downBtnClicked = /**
     * @return {?}
     */
    function () {
        this.updateValue(this.value - this.step);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.handleInputChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.inputStream.next(val);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.updateValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.valueChange.emit(value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    OwlTimerBoxComponent.prototype.updateValueViaInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    };
    OwlTimerBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'owlDateTimeTimerBox',
                    selector: 'owl-date-time-timer-box',
                    template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div>\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\n        type=\"button\" tabindex=\"-1\"\n        [disabled]=\"upBtnDisabled\"\n        [attr.aria-label]=\"upBtnAriaLabel\"\n        (click)=\"upBtnClicked()\">\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\n        <!-- <editor-fold desc=\"SVG Arrow Up\"> -->\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\n                 width=\"100%\" height=\"100%\">\n                    <path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n<label class=\"owl-dt-timer-content\">\n    <input class=\"owl-dt-timer-input\" maxlength=\"2\"\n           [value]=\"displayValue | numberFixedLen : 2\"\n           (input)=\"handleInputChange(valueInput.value)\" #valueInput>\n    <span class=\"owl-hidden-accessible\">{{inputLabel}}</span>\n</label>\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\n        type=\"button\" tabindex=\"-1\"\n        [disabled]=\"downBtnDisabled\"\n        [attr.aria-label]=\"downBtnAriaLabel\"\n        (click)=\"downBtnClicked()\">\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\n        <!-- <editor-fold desc=\"SVG Arrow Down\"> -->\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\n                 width=\"100%\" height=\"100%\">\n                    <path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.owl-dt-timer-box]': 'owlDTTimerBoxClass'
                    },
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OwlTimerBoxComponent.ctorParameters = function () { return []; };
    OwlTimerBoxComponent.propDecorators = {
        showDivider: [{ type: Input }],
        upBtnAriaLabel: [{ type: Input }],
        upBtnDisabled: [{ type: Input }],
        downBtnAriaLabel: [{ type: Input }],
        downBtnDisabled: [{ type: Input }],
        boxValue: [{ type: Input }],
        value: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        inputLabel: [{ type: Input }],
        valueChange: [{ type: Output }],
        inputChange: [{ type: Output }]
    };
    return OwlTimerBoxComponent;
}());
export { OwlTimerBoxComponent };
if (false) {
    /** @type {?} */
    OwlTimerBoxComponent.prototype.showDivider;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.upBtnAriaLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.upBtnDisabled;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.downBtnAriaLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.downBtnDisabled;
    /**
     * Value would be displayed in the box
     * If it is null, the box would display [value]
     *
     * @type {?}
     */
    OwlTimerBoxComponent.prototype.boxValue;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.value;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.min;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.max;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.step;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.inputLabel;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.valueChange;
    /** @type {?} */
    OwlTimerBoxComponent.prototype.inputChange;
    /**
     * @type {?}
     * @private
     */
    OwlTimerBoxComponent.prototype.inputStream;
    /**
     * @type {?}
     * @private
     */
    OwlTimerBoxComponent.prototype.inputStreamSub;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQXdESTtRQTFDUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXNCcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUlSLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFM0MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXBDLG1CQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVc1QyxDQUFDO0lBVEQsc0JBQUksOENBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFrQjs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBOzs7O0lBS00sdUNBQVE7OztJQUFmO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN2QyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLG9CQUFvQixFQUFFLENBQ3pCLENBQUMsU0FBUzs7OztRQUFDLFVBQUUsR0FBVztZQUNyQixJQUFJLEdBQUcsRUFBRTs7b0JBQ0MsVUFBVSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVNLDBDQUFXOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFTSwyQ0FBWTs7O0lBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRU0sNkNBQWM7OztJQUFyQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTSxnREFBaUI7Ozs7SUFBeEIsVUFBMEIsR0FBVztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTywwQ0FBVzs7Ozs7SUFBbkIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFTyxrREFBbUI7Ozs7O0lBQTNCLFVBQTZCLEtBQWE7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZwRkFBeUM7b0JBRXpDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0YsMEJBQTBCLEVBQUUsb0JBQW9CO3FCQUNuRDs7aUJBQ0o7Ozs7OzhCQUlJLEtBQUs7aUNBRUwsS0FBSztnQ0FFTCxLQUFLO21DQUVMLEtBQUs7a0NBRUwsS0FBSzsyQkFNTCxLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7NkJBRUwsS0FBSzs4QkFFTCxNQUFNOzhCQUVOLE1BQU07O0lBdURYLDJCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FyRlksb0JBQW9COzs7SUFFN0IsMkNBQTZCOztJQUU3Qiw4Q0FBZ0M7O0lBRWhDLDZDQUFnQzs7SUFFaEMsZ0RBQWtDOztJQUVsQywrQ0FBa0M7Ozs7Ozs7SUFNbEMsd0NBQTBCOztJQUUxQixxQ0FBdUI7O0lBRXZCLG1DQUFxQjs7SUFFckIsbUNBQXFCOztJQUVyQixvQ0FBa0I7O0lBRWxCLDBDQUE0Qjs7SUFFNUIsMkNBQW1EOztJQUVuRCwyQ0FBbUQ7Ozs7O0lBRW5ELDJDQUE0Qzs7Ozs7SUFFNUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB0aW1lci1ib3guY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBleHBvcnRBczogJ293bERhdGVUaW1lVGltZXJCb3gnLFxuICAgIHNlbGVjdG9yOiAnb3dsLWRhdGUtdGltZS10aW1lci1ib3gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lci1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RpbWVyLWJveC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtdGltZXItYm94XSc6ICdvd2xEVFRpbWVyQm94Q2xhc3MnXG4gICAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE93bFRpbWVyQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc2hvd0RpdmlkZXIgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHVwQnRuQXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB1cEJ0bkRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZG93bkJ0bkFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZG93bkJ0bkRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVmFsdWUgd291bGQgYmUgZGlzcGxheWVkIGluIHRoZSBib3hcbiAgICAgKiBJZiBpdCBpcyBudWxsLCB0aGUgYm94IHdvdWxkIGRpc3BsYXkgW3ZhbHVlXVxuICAgICAqICovXG4gICAgQElucHV0KCkgYm94VmFsdWU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtaW46IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgc3RlcCA9IDE7XG5cbiAgICBASW5wdXQoKSBpbnB1dExhYmVsOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgcHJpdmF0ZSBpbnB1dFN0cmVhbSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW1TdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgICBnZXQgZGlzcGxheVZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJveFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUVGltZXJCb3hDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlucHV0U3RyZWFtU3ViID0gdGhpcy5pbnB1dFN0cmVhbS5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICkuc3Vic2NyaWJlKCggdmFsOiBzdHJpbmcgKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVZpYUlucHV0KGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cEJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvd25CdG5DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVJbnB1dENoYW5nZSggdmFsOiBzdHJpbmcgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW0ubmV4dCh2YWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZVZpYUlucHV0KCB2YWx1ZTogbnVtYmVyICk6IHZvaWQge1xuICAgICAgICBpZiAodmFsdWUgPiB0aGlzLm1heCB8fCB2YWx1ZSA8IHRoaXMubWluKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG59XG4iXX0=