/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * date-time-inline.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OwlDateTime } from './date-time.class';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
/** @type {?} */
export var OWL_DATETIME_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return OwlDateTimeInlineComponent; })),
    multi: true
};
/**
 * @template T
 */
var OwlDateTimeInlineComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OwlDateTimeInlineComponent, _super);
    function OwlDateTimeInlineComponent(changeDetector, dateTimeAdapter, dateTimeFormats) {
        var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
        _this.changeDetector = changeDetector;
        _this.dateTimeAdapter = dateTimeAdapter;
        _this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the type of the dateTime picker
         *      'both' -- show both calendar and timer
         *      'calendar' -- show only calendar
         *      'timer' -- show only timer
         */
        _this._pickerType = 'both';
        _this._disabled = false;
        _this._selectMode = 'single';
        _this._values = [];
        /**
         * Emits selected year in multi-year view
         * This doesn't imply a change on the selected date.
         *
         */
        _this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view
         * This doesn't imply a change on the selected date.
         *
         */
        _this.monthSelected = new EventEmitter();
        _this._selecteds = [];
        _this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        _this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        return _this;
    }
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pickerType;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this._pickerType) {
                this._pickerType = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selectMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectMode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode !== 'single' &&
                mode !== 'range' &&
                mode !== 'rangeFrom' &&
                mode !== 'rangeTo') {
                throw Error('OwlDateTime Error: invalid selectMode value!');
            }
            this._selectMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "startAt", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._startAt) {
                return this._startAt;
            }
            if (this.selectMode === 'single') {
                return this.value || null;
            }
            else if (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom') {
                return this.values[0] || null;
            }
            else if (this.selectMode === 'rangeTo') {
                return this.values[1] || null;
            }
            else {
                return null;
            }
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "dateTimeFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dateTimeFilter;
        },
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this._dateTimeFilter = filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "minDateTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._min || null;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "maxDateTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._max || null;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.dateTimeAdapter.deserialize(value);
            value = this.getValidDate(value);
            this._value = value;
            this.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "values", {
        get: /**
         * @return {?}
         */
        function () {
            return this._values;
        },
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            var _this = this;
            if (values && values.length > 0) {
                values = values.map((/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    v = _this.dateTimeAdapter.deserialize(v);
                    v = _this.getValidDate(v);
                    return v ? _this.dateTimeAdapter.clone(v) : null;
                }));
                this._values = tslib_1.__spread(values);
                this.selecteds = tslib_1.__spread(values);
            }
            else {
                this._values = [];
                this.selecteds = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = value;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "selecteds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selecteds;
        },
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            this._selecteds = values;
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "pickerMode", {
        get: /**
         * @return {?}
         */
        function () {
            return 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "isInRangeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._selectMode === 'range' ||
                this._selectMode === 'rangeFrom' ||
                this._selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDateTimeInlineComponent.prototype, "owlDTInlineClass", {
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
    OwlDateTimeInlineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.container.picker = this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isInSingleMode) {
            this.value = value;
            this.container.pickerMoment = value;
        }
        else {
            this.values = value;
            this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.select = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.disabled) {
            return;
        }
        if (Array.isArray(date)) {
            this.values = tslib_1.__spread(date);
        }
        else {
            this.value = date;
        }
        this.onModelChange(date);
        this.onModelTouched();
    };
    /**
     * Emits the selected year in multi-year view
     * */
    /**
     * Emits the selected year in multi-year view
     *
     * @param {?} normalizedYear
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.selectYear = /**
     * Emits the selected year in multi-year view
     *
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /**
     * Emits selected month in year view
     * */
    /**
     * Emits selected month in year view
     *
     * @param {?} normalizedMonth
     * @return {?}
     */
    OwlDateTimeInlineComponent.prototype.selectMonth = /**
     * Emits selected month in year view
     *
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    OwlDateTimeInlineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'owl-date-time-inline',
                    template: "<owl-date-time-container></owl-date-time-container>",
                    host: {
                        '[class.owl-dt-inline]': 'owlDTInlineClass'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    providers: [OWL_DATETIME_VALUE_ACCESSOR],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OwlDateTimeInlineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DateTimeAdapter, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_FORMATS,] }] }
    ]; };
    OwlDateTimeInlineComponent.propDecorators = {
        container: [{ type: ViewChild, args: [OwlDateTimeContainerComponent, { static: true },] }],
        pickerType: [{ type: Input }],
        disabled: [{ type: Input }],
        selectMode: [{ type: Input }],
        startAt: [{ type: Input }],
        dateTimeFilter: [{ type: Input, args: ['owlDateTimeFilter',] }],
        minDateTime: [{ type: Input, args: ['min',] }],
        maxDateTime: [{ type: Input, args: ['max',] }],
        value: [{ type: Input }],
        values: [{ type: Input }],
        yearSelected: [{ type: Output }],
        monthSelected: [{ type: Output }]
    };
    return OwlDateTimeInlineComponent;
}(OwlDateTime));
export { OwlDateTimeInlineComponent };
if (false) {
    /** @type {?} */
    OwlDateTimeInlineComponent.prototype.container;
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._pickerType;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._selectMode;
    /**
     * The date to open the calendar to initially.
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._startAt;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._dateTimeFilter;
    /**
     * The minimum valid date.
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._min;
    /**
     * The maximum valid date.
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._max;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._values;
    /**
     * Emits selected year in multi-year view
     * This doesn't imply a change on the selected date.
     *
     * @type {?}
     */
    OwlDateTimeInlineComponent.prototype.yearSelected;
    /**
     * Emits selected month in year view
     * This doesn't imply a change on the selected date.
     *
     * @type {?}
     */
    OwlDateTimeInlineComponent.prototype.monthSelected;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype._selecteds;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeInlineComponent.prototype.onModelTouched;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeInlineComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeInlineComponent.prototype.dateTimeAdapter;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeInlineComponent.prototype.dateTimeFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0gsV0FBVyxFQUlkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFDSCxxQkFBcUIsRUFFeEIsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFdkYsTUFBTSxLQUFPLDJCQUEyQixHQUFRO0lBQzVDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSwwQkFBMEIsRUFBMUIsQ0FBMEIsRUFBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNkOzs7O0FBRUQ7SUFXbUQsc0RBQWM7SUFtTjdELG9DQUNjLGNBQWlDLEVBQ3JCLGVBQW1DLEVBRy9DLGVBQW1DO1FBTGpELFlBT0ksa0JBQU0sZUFBZSxFQUFFLGVBQWUsQ0FBQyxTQUMxQztRQVBhLG9CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNyQixxQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFHL0MscUJBQWUsR0FB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QUs7MkJBWUwsS0FBSzs2QkFVTCxLQUFLOzBCQW9CTCxLQUFLO2lDQTJCTCxLQUFLLFNBQUMsbUJBQW1COzhCQWdCekIsS0FBSyxTQUFDLEtBQUs7OEJBYVgsS0FBSyxTQUFDLEtBQUs7d0JBT1gsS0FBSzt5QkFhTCxLQUFLOytCQXdCTCxNQUFNO2dDQU9OLE1BQU07O0lBbUhYLGlDQUFDO0NBQUEsQUEvUkQsQ0FXbUQsV0FBVyxHQW9SN0Q7U0FwUlksMEJBQTBCOzs7SUFFbkMsK0NBQzRDOzs7Ozs7Ozs7SUFRNUMsaURBQXlDOzs7OztJQVl6QywrQ0FBMEI7Ozs7O0lBVTFCLGlEQUEyQzs7Ozs7O0lBb0IzQyw4Q0FBMkI7Ozs7O0lBMkIzQixxREFBcUQ7Ozs7OztJQVdyRCwwQ0FBdUI7Ozs7OztJQWF2QiwwQ0FBdUI7Ozs7O0lBWXZCLDRDQUF5Qjs7Ozs7SUFhekIsNkNBQTBCOzs7Ozs7O0lBeUIxQixrREFDcUM7Ozs7Ozs7SUFNckMsbURBQ3NDOzs7OztJQUV0QywrQ0FBNEI7Ozs7O0lBVTVCLGdEQUE2Qjs7Ozs7SUFrQzdCLG1EQUEyQzs7Ozs7SUFDM0Msb0RBQTRDOzs7OztJQUd4QyxvREFBMkM7Ozs7O0lBQzNDLHFEQUF5RDs7Ozs7SUFDekQscURBRTZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudFxuICovXG5cbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgICBPd2xEYXRlVGltZSxcbiAgICBQaWNrZXJNb2RlLFxuICAgIFBpY2tlclR5cGUsXG4gICAgU2VsZWN0TW9kZVxufSBmcm9tICcuL2RhdGUtdGltZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xuaW1wb3J0IHtcbiAgICBPV0xfREFURV9USU1FX0ZPUk1BVFMsXG4gICAgT3dsRGF0ZVRpbWVGb3JtYXRzXG59IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcbmltcG9ydCB7IE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgT1dMX0RBVEVUSU1FX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT3dsRGF0ZVRpbWVJbmxpbmVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtaW5saW5lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS10aW1lLWlubGluZS5jb21wb25lbnQuc2NzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtaW5saW5lXSc6ICdvd2xEVElubGluZUNsYXNzJ1xuICAgIH0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgcHJvdmlkZXJzOiBbT1dMX0RBVEVUSU1FX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUlubGluZUNvbXBvbmVudDxUPiBleHRlbmRzIE93bERhdGVUaW1lPFQ+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBAVmlld0NoaWxkKE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRhaW5lcjogT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQ8VD47XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGRhdGVUaW1lIHBpY2tlclxuICAgICAqICAgICAgJ2JvdGgnIC0tIHNob3cgYm90aCBjYWxlbmRhciBhbmQgdGltZXJcbiAgICAgKiAgICAgICdjYWxlbmRhcicgLS0gc2hvdyBvbmx5IGNhbGVuZGFyXG4gICAgICogICAgICAndGltZXInIC0tIHNob3cgb25seSB0aW1lclxuICAgICAqL1xuICAgIHByaXZhdGUgX3BpY2tlclR5cGU6IFBpY2tlclR5cGUgPSAnYm90aCc7XG4gICAgQElucHV0KClcbiAgICBnZXQgcGlja2VyVHlwZSgpOiBQaWNrZXJUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpY2tlclR5cGU7XG4gICAgfVxuXG4gICAgc2V0IHBpY2tlclR5cGUodmFsOiBQaWNrZXJUeXBlKSB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX3BpY2tlclR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BpY2tlclR5cGUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdE1vZGU6IFNlbGVjdE1vZGUgPSAnc2luZ2xlJztcbiAgICBASW5wdXQoKVxuICAgIGdldCBzZWxlY3RNb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TW9kZTtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0TW9kZShtb2RlOiBTZWxlY3RNb2RlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1vZGUgIT09ICdzaW5nbGUnICYmXG4gICAgICAgICAgICBtb2RlICE9PSAncmFuZ2UnICYmXG4gICAgICAgICAgICBtb2RlICE9PSAncmFuZ2VGcm9tJyAmJlxuICAgICAgICAgICAgbW9kZSAhPT0gJ3JhbmdlVG8nXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ093bERhdGVUaW1lIEVycm9yOiBpbnZhbGlkIHNlbGVjdE1vZGUgdmFsdWUhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWxlY3RNb2RlID0gbW9kZTtcbiAgICB9XG5cbiAgICAvKiogVGhlIGRhdGUgdG8gb3BlbiB0aGUgY2FsZW5kYXIgdG8gaW5pdGlhbGx5LiAqL1xuICAgIHByaXZhdGUgX3N0YXJ0QXQ6IFQgfCBudWxsO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHN0YXJ0QXQoKTogVCB8IG51bGwge1xuICAgICAgICBpZiAodGhpcy5fc3RhcnRBdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyB8fFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2VGcm9tJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXSB8fCBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV0gfHwgbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHN0YXJ0QXQoZGF0ZTogVCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuZ2V0VmFsaWREYXRlKFxuICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUoZGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kYXRlVGltZUZpbHRlcjogKGRhdGU6IFQgfCBudWxsKSA9PiBib29sZWFuO1xuICAgIEBJbnB1dCgnb3dsRGF0ZVRpbWVGaWx0ZXInKVxuICAgIGdldCBkYXRlVGltZUZpbHRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVUaW1lRmlsdGVyO1xuICAgIH1cblxuICAgIHNldCBkYXRlVGltZUZpbHRlcihmaWx0ZXI6IChkYXRlOiBUIHwgbnVsbCkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kYXRlVGltZUZpbHRlciA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICAvKiogVGhlIG1pbmltdW0gdmFsaWQgZGF0ZS4gKi9cbiAgICBwcml2YXRlIF9taW46IFQgfCBudWxsO1xuXG4gICAgZ2V0IG1pbkRhdGVUaW1lKCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbiB8fCBudWxsO1xuICAgIH1cblxuICAgIEBJbnB1dCgnbWluJylcbiAgICBzZXQgbWluRGF0ZVRpbWUodmFsdWU6IFQgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuZ2V0VmFsaWREYXRlKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIFRoZSBtYXhpbXVtIHZhbGlkIGRhdGUuICovXG4gICAgcHJpdmF0ZSBfbWF4OiBUIHwgbnVsbDtcblxuICAgIGdldCBtYXhEYXRlVGltZSgpOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXggfHwgbnVsbDtcbiAgICB9XG5cbiAgICBASW5wdXQoJ21heCcpXG4gICAgc2V0IG1heERhdGVUaW1lKHZhbHVlOiBUIHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9tYXggPSB0aGlzLmdldFZhbGlkRGF0ZSh0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ZhbHVlOiBUIHwgbnVsbDtcbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZTogVCB8IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmFsdWVzOiBUW10gPSBbXTtcbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlcyh2YWx1ZXM6IFRbXSkge1xuICAgICAgICBpZiAodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIHYgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2KTtcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXRWYWxpZERhdGUodik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbG9uZSh2KSA6IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFsuLi52YWx1ZXNdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHMgPSBbLi4udmFsdWVzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIHNlbGVjdGVkIHllYXIgaW4gbXVsdGkteWVhciB2aWV3XG4gICAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgeWVhclNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3XG4gICAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgbW9udGhTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBUIHwgbnVsbDtcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsdWU6IFQgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRzOiBUW10gPSBbXTtcbiAgICBnZXQgc2VsZWN0ZWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRzO1xuICAgIH1cblxuICAgIHNldCBzZWxlY3RlZHModmFsdWVzOiBUW10pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldCBwaWNrZXJNb2RlKCk6IFBpY2tlck1vZGUge1xuICAgICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5TaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZSc7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5SYW5nZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RNb2RlID09PSAncmFuZ2UnIHx8XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RNb2RlID09PSAncmFuZ2VGcm9tJyB8fFxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUSW5saW5lQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBwcml2YXRlIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBkYXRlVGltZUFkYXB0ZXI6IERhdGVUaW1lQWRhcHRlcjxUPixcbiAgICAgICAgQE9wdGlvbmFsKClcbiAgICAgICAgQEluamVjdChPV0xfREFURV9USU1FX0ZPUk1BVFMpXG4gICAgICAgIHByb3RlY3RlZCBkYXRlVGltZUZvcm1hdHM6IE93bERhdGVUaW1lRm9ybWF0c1xuICAgICkge1xuICAgICAgICBzdXBlcihkYXRlVGltZUFkYXB0ZXIsIGRhdGVUaW1lRm9ybWF0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5waWNrZXIgPSB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJblNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBpY2tlck1vbWVudCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnBpY2tlck1vbWVudCA9IHRoaXMuX3ZhbHVlc1tcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hY3RpdmVTZWxlY3RlZEluZGV4XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0KGRhdGU6IFRbXSB8IFQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi5kYXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZShkYXRlKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyIGluIG11bHRpLXllYXIgdmlld1xuICAgICAqICovXG4gICAgcHVibGljIHNlbGVjdFllYXIobm9ybWFsaXplZFllYXI6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3XG4gICAgICogKi9cbiAgICBwdWJsaWMgc2VsZWN0TW9udGgobm9ybWFsaXplZE1vbnRoOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XG4gICAgfVxufVxuIl19