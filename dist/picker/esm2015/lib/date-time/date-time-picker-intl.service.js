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
export class OwlDateTimeIntl {
    constructor() {
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
}
OwlDateTimeIntl.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ OwlDateTimeIntl.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OwlDateTimeIntl_Factory() { return new OwlDateTimeIntl(); }, token: OwlDateTimeIntl, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQU8sZUFBZTtJQUQ1Qjs7Ozs7UUFPYSxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFHdEQsa0JBQWEsR0FBRyxjQUFjLENBQUM7Ozs7UUFHL0Isb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQzs7OztRQUduQyxrQkFBYSxHQUFHLGNBQWMsQ0FBQzs7OztRQUcvQixvQkFBZSxHQUFHLGdCQUFnQixDQUFDOzs7O1FBR25DLGdCQUFXLEdBQUcsWUFBWSxDQUFDOzs7O1FBRzNCLGtCQUFhLEdBQUcsY0FBYyxDQUFDOzs7O1FBRy9CLG1CQUFjLEdBQUcsZ0JBQWdCLENBQUM7Ozs7UUFHbEMsbUJBQWMsR0FBRyxZQUFZLENBQUM7Ozs7UUFHOUIsa0JBQWEsR0FBRyxlQUFlLENBQUM7Ozs7UUFHaEMsa0JBQWEsR0FBRyxXQUFXLENBQUM7Ozs7UUFHNUIsdUJBQWtCLEdBQVcsbUJBQW1CLENBQUM7Ozs7UUFHakQsdUJBQWtCLEdBQVcsZUFBZSxDQUFDOzs7O1FBRzdDLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDOzs7O1FBR2hELCtCQUEwQixHQUFXLHVCQUF1QixDQUFDOzs7O1FBRzdELG1CQUFjLEdBQUcsUUFBUSxDQUFDOzs7O1FBRzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7O1FBR3BCLG1CQUFjLEdBQUcsTUFBTSxDQUFDOzs7O1FBR3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDOzs7O1FBR3BCLGtCQUFhLEdBQUcsSUFBSSxDQUFDOzs7O1FBR3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0tBQ3hCOzs7WUFwRUEsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7Ozs7O0lBTzVCLGtDQUFzRDs7Ozs7SUFHdEQsd0NBQStCOzs7OztJQUcvQiwwQ0FBbUM7Ozs7O0lBR25DLHdDQUErQjs7Ozs7SUFHL0IsMENBQW1DOzs7OztJQUduQyxzQ0FBMkI7Ozs7O0lBRzNCLHdDQUErQjs7Ozs7SUFHL0IseUNBQWtDOzs7OztJQUdsQyx5Q0FBOEI7Ozs7O0lBRzlCLHdDQUFnQzs7Ozs7SUFHaEMsd0NBQTRCOzs7OztJQUc1Qiw2Q0FBaUQ7Ozs7O0lBR2pELDZDQUE2Qzs7Ozs7SUFHN0MsaURBQWdEOzs7OztJQUdoRCxxREFBNkQ7Ozs7O0lBRzdELHlDQUEwQjs7Ozs7SUFHMUIsc0NBQW9COzs7OztJQUdwQix5Q0FBd0I7Ozs7O0lBR3hCLHVDQUFvQjs7Ozs7SUFHcEIsd0NBQXFCOzs7OztJQUdyQix3Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUludGwge1xuXG4gICAgLyoqXG4gICAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGxhYmVscyBoZXJlIGFyZSBjaGFuZ2VkLiBVc2UgdGhpcyB0byBub3RpZnlcbiAgICAgKiBjb21wb25lbnRzIGlmIHRoZSBsYWJlbHMgaGF2ZSBjaGFuZ2VkIGFmdGVyIGluaXRpYWxpemF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBzZWNvbmQgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgdXBTZWNvbmRMYWJlbCA9ICdBZGQgYSBzZWNvbmQnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIHNlY29uZCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICBkb3duU2Vjb25kTGFiZWwgPSAnTWludXMgYSBzZWNvbmQnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBtaW51dGUgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgdXBNaW51dGVMYWJlbCA9ICdBZGQgYSBtaW51dGUnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIG1pbnV0ZSBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICBkb3duTWludXRlTGFiZWwgPSAnTWludXMgYSBtaW51dGUnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBob3VyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xuICAgIHVwSG91ckxhYmVsID0gJ0FkZCBhIGhvdXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIGhvdXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgZG93bkhvdXJMYWJlbCA9ICdNaW51cyBhIGhvdXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyBtb250aCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIHByZXZNb250aExhYmVsID0gJ1ByZXZpb3VzIG1vbnRoJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtb250aCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIG5leHRNb250aExhYmVsID0gJ05leHQgbW9udGgnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyB5ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgcHJldlllYXJMYWJlbCA9ICdQcmV2aW91cyB5ZWFyJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCB5ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgbmV4dFllYXJMYWJlbCA9ICdOZXh0IHllYXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgcHJldk11bHRpWWVhckxhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMgMjEgeWVhcnMnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBuZXh0IG11bHRpLXllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgICBuZXh0TXVsdGlZZWFyTGFiZWw6IHN0cmluZyA9ICdOZXh0IDIxIHllYXJzJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgJ3N3aXRjaCB0byBtb250aCB2aWV3JyBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIHN3aXRjaFRvTW9udGhWaWV3TGFiZWwgPSAnQ2hhbmdlIHRvIG1vbnRoIHZpZXcnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSAnc3dpdGNoIHRvIHllYXIgdmlldycgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgICBzd2l0Y2hUb011bHRpWWVhclZpZXdMYWJlbDogc3RyaW5nID0gJ0Nob29zZSBtb250aCBhbmQgeWVhcic7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbiAgICBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBzZXQgYnV0dG9uICovXG4gICAgc2V0QnRuTGFiZWwgPSAnU2V0JztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcmFuZ2UgJ2Zyb20nIGluIHBpY2tlciBpbmZvICovXG4gICAgcmFuZ2VGcm9tTGFiZWwgPSAnRnJvbSc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHJhbmdlICd0bycgaW4gcGlja2VyIGluZm8gKi9cbiAgICByYW5nZVRvTGFiZWwgPSAnVG8nO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBob3VyMTIgYnV0dG9uIChBTSkgKi9cbiAgICBob3VyMTJBTUxhYmVsID0gJ0FNJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgaG91cjEyIGJ1dHRvbiAoUE0pICovXG4gICAgaG91cjEyUE1MYWJlbCA9ICdQTSc7XG59XG4iXX0=