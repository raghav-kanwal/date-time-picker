/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-picker-trigger.directive
 */
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { OwlDateTimeComponent } from './date-time-picker.component';
import { merge, of as observableOf, Subscription } from 'rxjs';
/**
 * @template T
 */
var OwlDateTimeTriggerDirective = /** @class */ (function () {
    function OwlDateTimeTriggerDirective(changeDetector) {
        this.changeDetector = changeDetector;
        this.stateChanges = Subscription.EMPTY;
    }
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled === undefined ? this.dtPicker.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeTriggerDirective.prototype, "owlDTTriggerDisabledClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.datepicker) {
            this.watchStateChanges();
        }
    };
    /**
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.watchStateChanges();
    };
    /**
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.handleClickOnHost = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dtPicker) {
            this.dtPicker.open();
            event.stopPropagation();
        }
    };
    /**
     * @private
     * @return {?}
     */
    OwlDateTimeTriggerDirective.prototype.watchStateChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.stateChanges.unsubscribe();
        /** @type {?} */
        var inputDisabled = this.dtPicker && this.dtPicker.dtInput ?
            this.dtPicker.dtInput.disabledChange : observableOf();
        /** @type {?} */
        var pickerDisabled = this.dtPicker ?
            this.dtPicker.disabledChange : observableOf();
        this.stateChanges = merge(pickerDisabled, inputDisabled)
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.changeDetector.markForCheck();
        }));
    };
    OwlDateTimeTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[owlDateTimeTrigger]',
                    host: {
                        '(click)': 'handleClickOnHost($event)',
                        '[class.owl-dt-trigger-disabled]': 'owlDTTriggerDisabledClass'
                    }
                },] }
    ];
    /** @nocollapse */
    OwlDateTimeTriggerDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    OwlDateTimeTriggerDirective.propDecorators = {
        dtPicker: [{ type: Input, args: ['owlDateTimeTrigger',] }],
        disabled: [{ type: Input }]
    };
    return OwlDateTimeTriggerDirective;
}());
export { OwlDateTimeTriggerDirective };
if (false) {
    /** @type {?} */
    OwlDateTimeTriggerDirective.prototype.dtPicker;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeTriggerDirective.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeTriggerDirective.prototype.stateChanges;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeTriggerDirective.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2RhdGUtdGltZS1waWNrZXItdHJpZ2dlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE9BQU8sRUFFSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFLUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9EO0lBMkJJLHFDQUF1QixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFGaEQsaUJBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBRzFDLENBQUM7SUFoQkQsc0JBQ0ksaURBQVE7Ozs7UUFEWjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwRixDQUFDOzs7OztRQUVELFVBQWMsS0FBYztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtFQUF5Qjs7OztRQUE3QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7OztJQU9NLDhDQUFROzs7SUFBZjtJQUNBLENBQUM7Ozs7O0lBRU0saURBQVc7Ozs7SUFBbEIsVUFBb0IsT0FBc0I7UUFDdEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7OztJQUVNLHdEQUFrQjs7O0lBQXpCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLGlEQUFXOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sdURBQWlCOzs7O0lBQXhCLFVBQTBCLEtBQVk7UUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDOzs7OztJQUVPLHVEQUFpQjs7OztJQUF6QjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTs7WUFFbkQsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1FBRWpELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7YUFDbkQsU0FBUzs7O1FBQUM7WUFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBbkVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxJQUFJLEVBQUU7d0JBQ0YsU0FBUyxFQUFFLDJCQUEyQjt3QkFDdEMsaUNBQWlDLEVBQUUsMkJBQTJCO3FCQUNqRTtpQkFDSjs7OztnQkFqQkcsaUJBQWlCOzs7MkJBb0JoQixLQUFLLFNBQUMsb0JBQW9COzJCQUcxQixLQUFLOztJQXdEVixrQ0FBQztDQUFBLEFBcEVELElBb0VDO1NBN0RZLDJCQUEyQjs7O0lBRXBDLCtDQUErRDs7Ozs7SUFFL0QsZ0RBQTJCOzs7OztJQWMzQixtREFBMEM7Ozs7O0lBRTdCLHFEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGF0ZS10aW1lLXBpY2tlci10cmlnZ2VyLmRpcmVjdGl2ZVxuICovXG5cblxuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tvd2xEYXRlVGltZVRyaWdnZXJdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoY2xpY2spJzogJ2hhbmRsZUNsaWNrT25Ib3N0KCRldmVudCknLFxuICAgICAgICAnW2NsYXNzLm93bC1kdC10cmlnZ2VyLWRpc2FibGVkXSc6ICdvd2xEVFRyaWdnZXJEaXNhYmxlZENsYXNzJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgT3dsRGF0ZVRpbWVUcmlnZ2VyRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoJ293bERhdGVUaW1lVHJpZ2dlcicpIGR0UGlja2VyOiBPd2xEYXRlVGltZUNvbXBvbmVudDxUPjtcblxuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZHRQaWNrZXIuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZCggdmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUVHJpZ2dlckRpc2FibGVkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGVDaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0ZXBpY2tlcikge1xuICAgICAgICAgICAgdGhpcy53YXRjaFN0YXRlQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy53YXRjaFN0YXRlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlQ2xpY2tPbkhvc3QoIGV2ZW50OiBFdmVudCApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHRQaWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZHRQaWNrZXIub3BlbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHdhdGNoU3RhdGVDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmR0UGlja2VyICYmIHRoaXMuZHRQaWNrZXIuZHRJbnB1dCA/XG4gICAgICAgICAgICB0aGlzLmR0UGlja2VyLmR0SW5wdXQuZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcblxuICAgICAgICBjb25zdCBwaWNrZXJEaXNhYmxlZCA9IHRoaXMuZHRQaWNrZXIgP1xuICAgICAgICAgICAgdGhpcy5kdFBpY2tlci5kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzID0gbWVyZ2UocGlja2VyRGlzYWJsZWQsIGlucHV0RGlzYWJsZWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19