/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-picker-intl.service
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var OwlDateTimeIntl = /** @class */ (function () {
    function OwlDateTimeIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /**
         * A label for the up second button (used by screen readers).
         */
        this.upSecondLabel = 'Add a second';
        /**
         * A label for the down second button (used by screen readers).
         */
        this.downSecondLabel = 'Minus a second';
        /**
         * A label for the up minute button (used by screen readers).
         */
        this.upMinuteLabel = 'Add a minute';
        /**
         * A label for the down minute button (used by screen readers).
         */
        this.downMinuteLabel = 'Minus a minute';
        /**
         * A label for the up hour button (used by screen readers).
         */
        this.upHourLabel = 'Add a hour';
        /**
         * A label for the down hour button (used by screen readers).
         */
        this.downHourLabel = 'Minus a hour';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */
        this.prevMultiYearLabel = 'Previous 21 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */
        this.nextMultiYearLabel = 'Next 21 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Change to month view';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToMultiYearViewLabel = 'Choose month and year';
        /**
         * A label for the cancel button
         */
        this.cancelBtnLabel = 'Cancel';
        /**
         * A label for the set button
         */
        this.setBtnLabel = 'Set';
        /**
         * A label for the range 'from' in picker info
         */
        this.rangeFromLabel = 'From';
        /**
         * A label for the range 'to' in picker info
         */
        this.rangeToLabel = 'To';
        /**
         * A label for the hour12 button (AM)
         */
        this.hour12AMLabel = 'AM';
        /**
         * A label for the hour12 button (PM)
         */
        this.hour12PMLabel = 'PM';
    }
    OwlDateTimeIntl.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ OwlDateTimeIntl.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OwlDateTimeIntl_Factory() { return new OwlDateTimeIntl(); }, token: OwlDateTimeIntl, providedIn: "root" });
    return OwlDateTimeIntl;
}());
export { OwlDateTimeIntl };
if (false) {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     * @type {?}
     */
    OwlDateTimeIntl.prototype.changes;
    /**
     * A label for the up second button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.upSecondLabel;
    /**
     * A label for the down second button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.downSecondLabel;
    /**
     * A label for the up minute button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.upMinuteLabel;
    /**
     * A label for the down minute button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.downMinuteLabel;
    /**
     * A label for the up hour button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.upHourLabel;
    /**
     * A label for the down hour button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.downHourLabel;
    /**
     * A label for the previous month button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.prevMonthLabel;
    /**
     * A label for the next month button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.nextMonthLabel;
    /**
     * A label for the previous year button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.prevYearLabel;
    /**
     * A label for the next year button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.nextYearLabel;
    /**
     * A label for the previous multi-year button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.prevMultiYearLabel;
    /**
     * A label for the next multi-year button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.nextMultiYearLabel;
    /**
     * A label for the 'switch to month view' button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.switchToMonthViewLabel;
    /**
     * A label for the 'switch to year view' button (used by screen readers).
     * @type {?}
     */
    OwlDateTimeIntl.prototype.switchToMultiYearViewLabel;
    /**
     * A label for the cancel button
     * @type {?}
     */
    OwlDateTimeIntl.prototype.cancelBtnLabel;
    /**
     * A label for the set button
     * @type {?}
     */
    OwlDateTimeIntl.prototype.setBtnLabel;
    /**
     * A label for the range 'from' in picker info
     * @type {?}
     */
    OwlDateTimeIntl.prototype.rangeFromLabel;
    /**
     * A label for the range 'to' in picker info
     * @type {?}
     */
    OwlDateTimeIntl.prototype.rangeToLabel;
    /**
     * A label for the hour12 button (AM)
     * @type {?}
     */
    OwlDateTimeIntl.prototype.hour12AMLabel;
    /**
     * A label for the hour12 button (PM)
     * @type {?}
     */
    OwlDateTimeIntl.prototype.hour12PMLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUvQjtJQUFBOzs7OztRQU9hLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQUd0RCxrQkFBYSxHQUFHLGNBQWMsQ0FBQzs7OztRQUcvQixvQkFBZSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBR25DLGtCQUFhLEdBQUcsY0FBYyxDQUFDOzs7O1FBRy9CLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFHbkMsZ0JBQVcsR0FBRyxZQUFZLENBQUM7Ozs7UUFHM0Isa0JBQWEsR0FBRyxjQUFjLENBQUM7Ozs7UUFHL0IsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQUdsQyxtQkFBYyxHQUFHLFlBQVksQ0FBQzs7OztRQUc5QixrQkFBYSxHQUFHLGVBQWUsQ0FBQzs7OztRQUdoQyxrQkFBYSxHQUFHLFdBQVcsQ0FBQzs7OztRQUc1Qix1QkFBa0IsR0FBVyxtQkFBbUIsQ0FBQzs7OztRQUdqRCx1QkFBa0IsR0FBVyxlQUFlLENBQUM7Ozs7UUFHN0MsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7Ozs7UUFHaEQsK0JBQTBCLEdBQVcsdUJBQXVCLENBQUM7Ozs7UUFHN0QsbUJBQWMsR0FBRyxRQUFRLENBQUM7Ozs7UUFHMUIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7UUFHcEIsbUJBQWMsR0FBRyxNQUFNLENBQUM7Ozs7UUFHeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7Ozs7UUFHcEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7Ozs7UUFHckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7S0FDeEI7O2dCQXBFQSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7MEJBUGhDO0NBMkVDLEFBcEVELElBb0VDO1NBbkVZLGVBQWU7Ozs7Ozs7SUFNeEIsa0NBQXNEOzs7OztJQUd0RCx3Q0FBK0I7Ozs7O0lBRy9CLDBDQUFtQzs7Ozs7SUFHbkMsd0NBQStCOzs7OztJQUcvQiwwQ0FBbUM7Ozs7O0lBR25DLHNDQUEyQjs7Ozs7SUFHM0Isd0NBQStCOzs7OztJQUcvQix5Q0FBa0M7Ozs7O0lBR2xDLHlDQUE4Qjs7Ozs7SUFHOUIsd0NBQWdDOzs7OztJQUdoQyx3Q0FBNEI7Ozs7O0lBRzVCLDZDQUFpRDs7Ozs7SUFHakQsNkNBQTZDOzs7OztJQUc3QyxpREFBZ0Q7Ozs7O0lBR2hELHFEQUE2RDs7Ozs7SUFHN0QseUNBQTBCOzs7OztJQUcxQixzQ0FBb0I7Ozs7O0lBR3BCLHlDQUF3Qjs7Ozs7SUFHeEIsdUNBQW9COzs7OztJQUdwQix3Q0FBcUI7Ozs7O0lBR3JCLHdDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE93bERhdGVUaW1lSW50bCB7XG5cbiAgICAvKipcbiAgICAgKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgbGFiZWxzIGhlcmUgYXJlIGNoYW5nZWQuIFVzZSB0aGlzIHRvIG5vdGlmeVxuICAgICAqIGNvbXBvbmVudHMgaWYgdGhlIGxhYmVscyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHVwIHNlY29uZCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICB1cFNlY29uZExhYmVsID0gJ0FkZCBhIHNlY29uZCc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGRvd24gc2Vjb25kIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xuICAgIGRvd25TZWNvbmRMYWJlbCA9ICdNaW51cyBhIHNlY29uZCc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHVwIG1pbnV0ZSBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICB1cE1pbnV0ZUxhYmVsID0gJ0FkZCBhIG1pbnV0ZSc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGRvd24gbWludXRlIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xuICAgIGRvd25NaW51dGVMYWJlbCA9ICdNaW51cyBhIG1pbnV0ZSc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHVwIGhvdXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgdXBIb3VyTGFiZWwgPSAnQWRkIGEgaG91cic7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGRvd24gaG91ciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICBkb3duSG91ckxhYmVsID0gJ01pbnVzIGEgaG91cic7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIG1vbnRoIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgcHJldk1vbnRoTGFiZWwgPSAnUHJldmlvdXMgbW9udGgnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBuZXh0IG1vbnRoIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgbmV4dE1vbnRoTGFiZWwgPSAnTmV4dCBtb250aCc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIHllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgICBwcmV2WWVhckxhYmVsID0gJ1ByZXZpb3VzIHllYXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBuZXh0IHllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgICBuZXh0WWVhckxhYmVsID0gJ05leHQgeWVhcic7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIG11bHRpLXllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgICBwcmV2TXVsdGlZZWFyTGFiZWw6IHN0cmluZyA9ICdQcmV2aW91cyAyMSB5ZWFycyc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIG5leHQgbXVsdGkteWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIG5leHRNdWx0aVllYXJMYWJlbDogc3RyaW5nID0gJ05leHQgMjEgeWVhcnMnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSAnc3dpdGNoIHRvIG1vbnRoIHZpZXcnIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgc3dpdGNoVG9Nb250aFZpZXdMYWJlbCA9ICdDaGFuZ2UgdG8gbW9udGggdmlldyc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlICdzd2l0Y2ggdG8geWVhciB2aWV3JyBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIHN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsOiBzdHJpbmcgPSAnQ2hvb3NlIG1vbnRoIGFuZCB5ZWFyJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuICAgIGNhbmNlbEJ0bkxhYmVsID0gJ0NhbmNlbCc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHNldCBidXR0b24gKi9cbiAgICBzZXRCdG5MYWJlbCA9ICdTZXQnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSByYW5nZSAnZnJvbScgaW4gcGlja2VyIGluZm8gKi9cbiAgICByYW5nZUZyb21MYWJlbCA9ICdGcm9tJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcmFuZ2UgJ3RvJyBpbiBwaWNrZXIgaW5mbyAqL1xuICAgIHJhbmdlVG9MYWJlbCA9ICdUbyc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGhvdXIxMiBidXR0b24gKEFNKSAqL1xuICAgIGhvdXIxMkFNTGFiZWwgPSAnQU0nO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBob3VyMTIgYnV0dG9uIChQTSkgKi9cbiAgICBob3VyMTJQTUxhYmVsID0gJ1BNJztcbn1cbiJdfQ==