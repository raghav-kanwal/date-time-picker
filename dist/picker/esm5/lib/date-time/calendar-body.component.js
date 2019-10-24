/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * calendar-body.component
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { take } from 'rxjs/operators';
var CalendarCell = /** @class */ (function () {
    function CalendarCell(value, displayValue, ariaLabel, enabled, out, cellClass) {
        if (out === void 0) { out = false; }
        if (cellClass === void 0) { cellClass = ''; }
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.out = out;
        this.cellClass = cellClass;
    }
    return CalendarCell;
}());
export { CalendarCell };
if (false) {
    /** @type {?} */
    CalendarCell.prototype.value;
    /** @type {?} */
    CalendarCell.prototype.displayValue;
    /** @type {?} */
    CalendarCell.prototype.ariaLabel;
    /** @type {?} */
    CalendarCell.prototype.enabled;
    /** @type {?} */
    CalendarCell.prototype.out;
    /** @type {?} */
    CalendarCell.prototype.cellClass;
}
var OwlCalendarBodyComponent = /** @class */ (function () {
    function OwlCalendarBodyComponent(elmRef, ngZone) {
        this.elmRef = elmRef;
        this.ngZone = ngZone;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The number of columns in the table.
         *
         */
        this.numCols = 7;
        /**
         * The ratio (width / height) to use for the cells in the table.
         */
        this.cellRatio = 1;
        /**
         * Emit when a calendar cell is selected
         *
         */
        this.select = new EventEmitter();
    }
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "owlDTCalendarBodyClass", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectMode === 'single';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlCalendarBodyComponent.prototype, "isInRangeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.selectMode === 'range' ||
                this.selectMode === 'rangeFrom' ||
                this.selectMode === 'rangeTo');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} cell
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.selectCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        this.select.emit(cell);
    };
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.isActiveCell = /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        /** @type {?} */
        var cellNumber = rowIndex * this.numCols + colIndex;
        return cellNumber === this.activeCell;
    };
    /**
     * Check if the cell is selected
     */
    /**
     * Check if the cell is selected
     * @param {?} value
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.isSelected = /**
     * Check if the cell is selected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.selectedValues || this.selectedValues.length === 0) {
            return false;
        }
        if (this.isInSingleMode) {
            return value === this.selectedValues[0];
        }
        if (this.isInRangeMode) {
            /** @type {?} */
            var fromValue = this.selectedValues[0];
            /** @type {?} */
            var toValue = this.selectedValues[1];
            return value === fromValue || value === toValue;
        }
    };
    /**
     * Check if the cell in the range
     * */
    /**
     * Check if the cell in the range
     *
     * @param {?} value
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.isInRange = /**
     * Check if the cell in the range
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isInRangeMode) {
            /** @type {?} */
            var fromValue = this.selectedValues[0];
            /** @type {?} */
            var toValue = this.selectedValues[1];
            if (fromValue !== null && toValue !== null) {
                return value >= fromValue && value <= toValue;
            }
            else {
                return value === fromValue || value === toValue;
            }
        }
    };
    /**
     * Check if the cell is the range from
     * */
    /**
     * Check if the cell is the range from
     *
     * @param {?} value
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.isRangeFrom = /**
     * Check if the cell is the range from
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isInRangeMode) {
            /** @type {?} */
            var fromValue = this.selectedValues[0];
            return fromValue !== null && value === fromValue;
        }
    };
    /**
     * Check if the cell is the range to
     * */
    /**
     * Check if the cell is the range to
     *
     * @param {?} value
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.isRangeTo = /**
     * Check if the cell is the range to
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isInRangeMode) {
            /** @type {?} */
            var toValue = this.selectedValues[1];
            return toValue !== null && value === toValue;
        }
    };
    /**
     * Focus to a active cell
     * */
    /**
     * Focus to a active cell
     *
     * @return {?}
     */
    OwlCalendarBodyComponent.prototype.focusActiveCell = /**
     * Focus to a active cell
     *
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.elmRef.nativeElement
                    .querySelector('.owl-dt-calendar-cell-active')
                    .focus();
            }));
        }));
    };
    OwlCalendarBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[owl-date-time-calendar-body]',
                    exportAs: 'owlDateTimeCalendarBody',
                    template: "<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n    <td *ngFor=\"let item of row; let colIndex = index\"\n        class=\"owl-dt-calendar-cell {{item.cellClass}}\"\n        [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n        [class.owl-dt-calendar-cell-active]=\"isActiveCell(rowIndex, colIndex)\"\n        [class.owl-dt-calendar-cell-disabled]=\"!item.enabled\"\n        [class.owl-dt-calendar-cell-in-range]=\"isInRange(item.value)\"\n        [class.owl-dt-calendar-cell-range-from]=\"isRangeFrom(item.value)\"\n        [class.owl-dt-calendar-cell-range-to]=\"isRangeTo(item.value)\"\n        [attr.aria-label]=\"item.ariaLabel\"\n        [attr.aria-disabled]=\"!item.enabled || null\"\n        [style.width.%]=\"100 / numCols\"\n        [style.paddingTop.%]=\"50 * cellRatio / numCols\"\n        [style.paddingBottom.%]=\"50 * cellRatio / numCols\"\n        (click)=\"selectCell(item)\">\n        <span class=\"owl-dt-calendar-cell-content\"\n              [ngClass]=\"{\n                'owl-dt-calendar-cell-out': item.out,\n                'owl-dt-calendar-cell-today': item.value === todayValue,\n                'owl-dt-calendar-cell-selected': isSelected(item.value)\n              }\">\n            {{item.displayValue}}\n        </span>\n    </td>\n</tr>\n",
                    host: {
                        '[class.owl-dt-calendar-body]': 'owlDTCalendarBodyClass'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OwlCalendarBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    OwlCalendarBodyComponent.propDecorators = {
        activeCell: [{ type: Input }],
        rows: [{ type: Input }],
        numCols: [{ type: Input }],
        cellRatio: [{ type: Input }],
        todayValue: [{ type: Input }],
        selectedValues: [{ type: Input }],
        selectMode: [{ type: Input }],
        select: [{ type: Output }]
    };
    return OwlCalendarBodyComponent;
}());
export { OwlCalendarBodyComponent };
if (false) {
    /**
     * The cell number of the active cell in the table.
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.activeCell;
    /**
     * The cells to display in the table.
     *
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.rows;
    /**
     * The number of columns in the table.
     *
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.numCols;
    /**
     * The ratio (width / height) to use for the cells in the table.
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.cellRatio;
    /**
     * The value in the table that corresponds to today.
     *
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.todayValue;
    /**
     * The value in the table that is currently selected.
     *
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.selectedValues;
    /**
     * Current picker select mode
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.selectMode;
    /**
     * Emit when a calendar cell is selected
     *
     * @type {?}
     */
    OwlCalendarBodyComponent.prototype.select;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarBodyComponent.prototype.elmRef;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarBodyComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9jYWxlbmRhci1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFDSSxzQkFDVyxLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsT0FBZ0IsRUFDaEIsR0FBb0IsRUFDcEIsU0FBc0I7UUFEdEIsb0JBQUEsRUFBQSxXQUFvQjtRQUNwQiwwQkFBQSxFQUFBLGNBQXNCO1FBTHRCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtJQUM5QixDQUFDO0lBQ1IsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVBPLDZCQUFvQjs7SUFDcEIsb0NBQTJCOztJQUMzQixpQ0FBd0I7O0lBQ3hCLCtCQUF1Qjs7SUFDdkIsMkJBQTJCOztJQUMzQixpQ0FBNkI7O0FBSXJDO0lBNEVJLGtDQUFvQixNQUFrQixFQUFVLE1BQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7UUE1RDlELGVBQVUsR0FBRyxDQUFDLENBQUM7Ozs7O1FBWWYsWUFBTyxHQUFHLENBQUMsQ0FBQzs7OztRQU1aLGNBQVMsR0FBRyxDQUFDLENB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dCI6WyIvKipcbiAqIGNhbGVuZGFyLWJvZHkuY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RNb2RlIH0gZnJvbSAnLi9kYXRlLXRpbWUuY2xhc3MnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBvdXQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgcHVibGljIGNlbGxDbGFzczogc3RyaW5nID0gJydcbiAgICApIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW293bC1kYXRlLXRpbWUtY2FsZW5kYXItYm9keV0nLFxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVDYWxlbmRhckJvZHknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1ib2R5LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgaG9zdDp7XG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNhbGVuZGFyLWJvZHldJzogJ293bERUQ2FsZW5kYXJCb2R5Q2xhc3MnXG4gICAgfSxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPd2xDYWxlbmRhckJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjZWxsIG51bWJlciBvZiB0aGUgYWN0aXZlIGNlbGwgaW4gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgYWN0aXZlQ2VsbCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2VsbHMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGUuXG4gICAgICogKi9cbiAgICBASW5wdXQoKVxuICAgIHJvd3M6IENhbGVuZGFyQ2VsbFtdW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLlxuICAgICAqICovXG4gICAgQElucHV0KClcbiAgICBudW1Db2xzID0gNztcblxuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbyAod2lkdGggLyBoZWlnaHQpIHRvIHVzZSBmb3IgdGhlIGNlbGxzIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGNlbGxSYXRpbyA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgY29ycmVzcG9uZHMgdG8gdG9kYXkuXG4gICAgICogKi9cbiAgICBASW5wdXQoKVxuICAgIHRvZGF5VmFsdWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICogKi9cbiAgICBASW5wdXQoKVxuICAgIHNlbGVjdGVkVmFsdWVzOiBudW1iZXJbXTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcGlja2VyIHNlbGVjdCBtb2RlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZWxlY3RNb2RlOiBTZWxlY3RNb2RlO1xuXG4gICAgLyoqXG4gICAgICogRW1pdCB3aGVuIGEgY2FsZW5kYXIgY2VsbCBpcyBzZWxlY3RlZFxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDZWxsPigpO1xuXG4gICAgZ2V0IG93bERUQ2FsZW5kYXJCb2R5Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldCBpc0luU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3NpbmdsZSc7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5SYW5nZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZScgfHxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbScgfHxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG1SZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxuXG4gICAgcHVibGljIHNlbGVjdENlbGwoY2VsbDogQ2FsZW5kYXJDZWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoY2VsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xuICAgICAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjZWxsIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgcHVibGljIGlzU2VsZWN0ZWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRWYWx1ZXMgfHwgdGhpcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSW5TaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0luUmFuZ2VNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbMV07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZnJvbVZhbHVlIHx8IHZhbHVlID09PSB0b1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGNlbGwgaW4gdGhlIHJhbmdlXG4gICAgICogKi9cbiAgICBwdWJsaWMgaXNJblJhbmdlKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlc1swXTtcbiAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzWzFdO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBudWxsICYmIHRvVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPj0gZnJvbVZhbHVlICYmIHZhbHVlIDw9IHRvVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZnJvbVZhbHVlIHx8IHZhbHVlID09PSB0b1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGNlbGwgaXMgdGhlIHJhbmdlIGZyb21cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBpc1JhbmdlRnJvbSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5SYW5nZU1vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbMF07XG4gICAgICAgICAgICByZXR1cm4gZnJvbVZhbHVlICE9PSBudWxsICYmIHZhbHVlID09PSBmcm9tVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY2VsbCBpcyB0aGUgcmFuZ2UgdG9cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBpc1JhbmdlVG8odmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0luUmFuZ2VNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlc1sxXTtcbiAgICAgICAgICAgIHJldHVybiB0b1ZhbHVlICE9PSBudWxsICYmIHZhbHVlID09PSB0b1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgdG8gYSBhY3RpdmUgY2VsbFxuICAgICAqICovXG4gICAgcHVibGljIGZvY3VzQWN0aXZlQ2VsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcbiAgICAgICAgICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm93bC1kdC1jYWxlbmRhci1jZWxsLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19