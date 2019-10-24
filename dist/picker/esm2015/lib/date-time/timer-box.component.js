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
export class OwlTimerBoxComponent {
    constructor() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
    }
    /**
     * @return {?}
     */
    get displayValue() {
        return this.boxValue || this.value;
    }
    /**
     * @return {?}
     */
    get owlDTTimerBoxClass() {
        return true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (val) {
                /** @type {?} */
                const inputValue = coerceNumberProperty(val, 0);
                this.updateValueViaInput(inputValue);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.inputStreamSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    upBtnClicked() {
        this.updateValue(this.value + this.step);
    }
    /**
     * @return {?}
     */
    downBtnClicked() {
        this.updateValue(this.value - this.step);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    handleInputChange(val) {
        this.inputStream.next(val);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        this.valueChange.emit(value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    updateValueViaInput(value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    }
}
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
OwlTimerBoxComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWNwRSxNQUFNLE9BQU8sb0JBQW9CO0lBNEM3QjtRQTFDUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXNCcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUlSLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFM0MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXBDLG1CQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQVc1QyxDQUFDOzs7O0lBVEQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFLTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdkMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUN6QixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFFLEdBQVcsRUFBRyxFQUFFO1lBQzFCLElBQUksR0FBRyxFQUFFOztzQkFDQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBRSxLQUFhO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFFLEtBQWE7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFoR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDZwRkFBeUM7Z0JBRXpDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0YsMEJBQTBCLEVBQUUsb0JBQW9CO2lCQUNuRDs7YUFDSjs7Ozs7MEJBSUksS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7K0JBRUwsS0FBSzs4QkFFTCxLQUFLO3VCQU1MLEtBQUs7b0JBRUwsS0FBSztrQkFFTCxLQUFLO2tCQUVMLEtBQUs7bUJBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLE1BQU07MEJBRU4sTUFBTTs7OztJQTVCUCwyQ0FBNkI7O0lBRTdCLDhDQUFnQzs7SUFFaEMsNkNBQWdDOztJQUVoQyxnREFBa0M7O0lBRWxDLCtDQUFrQzs7Ozs7OztJQU1sQyx3Q0FBMEI7O0lBRTFCLHFDQUF1Qjs7SUFFdkIsbUNBQXFCOztJQUVyQixtQ0FBcUI7O0lBRXJCLG9DQUFrQjs7SUFFbEIsMENBQTRCOztJQUU1QiwyQ0FBbUQ7O0lBRW5ELDJDQUFtRDs7Ozs7SUFFbkQsMkNBQTRDOzs7OztJQUU1Qyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHRpbWVyLWJveC5jb21wb25lbnRcbiAqL1xuXG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVUaW1lckJveCcsXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLXRpbWVyLWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RpbWVyLWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGltZXItYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLm93bC1kdC10aW1lci1ib3hdJzogJ293bERUVGltZXJCb3hDbGFzcydcbiAgICB9XG59KVxuXG5leHBvcnQgY2xhc3MgT3dsVGltZXJCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBzaG93RGl2aWRlciA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgdXBCdG5BcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHVwQnRuRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBkb3duQnRuQXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkb3duQnRuRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSB3b3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJveFxuICAgICAqIElmIGl0IGlzIG51bGwsIHRoZSBib3ggd291bGQgZGlzcGxheSBbdmFsdWVdXG4gICAgICogKi9cbiAgICBASW5wdXQoKSBib3hWYWx1ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBzdGVwID0gMTtcblxuICAgIEBJbnB1dCgpIGlucHV0TGFiZWw6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgQE91dHB1dCgpIGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBwcml2YXRlIGlucHV0U3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgcHJpdmF0ZSBpbnB1dFN0cmVhbVN1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAgIGdldCBkaXNwbGF5VmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb3dsRFRUaW1lckJveENsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTdHJlYW1TdWIgPSB0aGlzLmlucHV0U3RyZWFtLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKS5zdWJzY3JpYmUoKCB2YWw6IHN0cmluZyApID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlVmlhSW5wdXQoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0U3RyZWFtU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwQnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZG93bkJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZUlucHV0Q2hhbmdlKCB2YWw6IHN0cmluZyApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbS5uZXh0KHZhbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSggdmFsdWU6IG51bWJlciApOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlVmlhSW5wdXQoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4IHx8IHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==