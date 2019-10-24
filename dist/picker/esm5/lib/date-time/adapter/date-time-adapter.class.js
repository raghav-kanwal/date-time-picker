/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-adapter.class
 */
import { Subject } from 'rxjs';
import { inject, InjectionToken, LOCALE_ID } from '@angular/core';
/**
 * InjectionToken for date time picker that can be used to override default locale code.
 * @type {?}
 */
export var OWL_DATE_TIME_LOCALE = new InjectionToken('OWL_DATE_TIME_LOCALE', {
    providedIn: 'root',
    factory: OWL_DATE_TIME_LOCALE_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
export function OWL_DATE_TIME_LOCALE_FACTORY() {
    return inject(LOCALE_ID);
}
/**
 * Provider for OWL_DATE_TIME_LOCALE injection token.
 * @type {?}
 */
export var OWL_DATE_TIME_LOCALE_PROVIDER = {
    provide: OWL_DATE_TIME_LOCALE,
    useExisting: LOCALE_ID
};
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
DateTimeAdapter = /** @class */ (function () {
    function DateTimeAdapter() {
        /**
         * A stream that emits when the locale changes.
         */
        this._localeChanges = new Subject();
        /**
         * total milliseconds in a day.
         */
        this.millisecondsInDay = 86400000;
        /**
         * total milliseconds in a minute.
         */
        this.milliseondsInMinute = 60000;
    }
    Object.defineProperty(DateTimeAdapter.prototype, "localeChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeChanges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compare two given dates
     * 1 if the first date is after the second,
     * -1 if the first date is before the second
     * 0 if dates are equal.
     * */
    /**
     * Compare two given dates
     * 1 if the first date is after the second,
     * -1 if the first date is before the second
     * 0 if dates are equal.
     *
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DateTimeAdapter.prototype.compare = /**
     * Compare two given dates
     * 1 if the first date is after the second,
     * -1 if the first date is before the second
     * 0 if dates are equal.
     *
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        /** @type {?} */
        var dateFirst = this.clone(first);
        /** @type {?} */
        var dateSecond = this.clone(second);
        /** @type {?} */
        var diff = this.getTime(dateFirst) - this.getTime(dateSecond);
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            // Return 0 if diff is 0; return NaN if diff is NaN
            return diff;
        }
    };
    /**
     * Check if two given dates are in the same year
     * 1 if the first date's year is after the second,
     * -1 if the first date's year is before the second
     * 0 if two given dates are in the same year
     * */
    /**
     * Check if two given dates are in the same year
     * 1 if the first date's year is after the second,
     * -1 if the first date's year is before the second
     * 0 if two given dates are in the same year
     *
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DateTimeAdapter.prototype.compareYear = /**
     * Check if two given dates are in the same year
     * 1 if the first date's year is after the second,
     * -1 if the first date's year is before the second
     * 0 if two given dates are in the same year
     *
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        /** @type {?} */
        var yearLeft = this.getYear(first);
        /** @type {?} */
        var yearRight = this.getYear(second);
        /** @type {?} */
        var diff = yearLeft - yearRight;
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     */
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value
     * @return {?}
     */
    DateTimeAdapter.prototype.deserialize = /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null ||
            (this.isDateInstance(value) && this.isValid(value))) {
            return value;
        }
        return this.invalid();
    };
    /**
     * Sets the locale used for all dates.
     */
    /**
     * Sets the locale used for all dates.
     * @param {?} locale
     * @return {?}
     */
    DateTimeAdapter.prototype.setLocale = /**
     * Sets the locale used for all dates.
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        this.locale = locale;
        this._localeChanges.next();
    };
    /**
     * Clamp the given date between min and max dates.
     */
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    DateTimeAdapter.prototype.clampDate = /**
     * Clamp the given date between min and max dates.
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (date, min, max) {
        if (min && this.compare(date, min) < 0) {
            return min;
        }
        if (max && this.compare(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateTimeAdapter;
}());
/**
 * @abstract
 * @template T
 */
export { DateTimeAdapter };
if (false) {
    /**
     * The locale to use for all dates.
     * @type {?}
     * @protected
     */
    DateTimeAdapter.prototype.locale;
    /**
     * A stream that emits when the locale changes.
     * @type {?}
     * @protected
     */
    DateTimeAdapter.prototype._localeChanges;
    /**
     * total milliseconds in a day.
     * @type {?}
     * @protected
     */
    DateTimeAdapter.prototype.millisecondsInDay;
    /**
     * total milliseconds in a minute.
     * @type {?}
     * @protected
     */
    DateTimeAdapter.prototype.milliseondsInMinute;
    /**
     * Get the year of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getYear = function (date) { };
    /**
     * Get the month of the given date
     * 0 -- January
     * 11 -- December
     *
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getMonth = function (date) { };
    /**
     * Get the day of the week of the given date
     * 0 -- Sunday
     * 6 -- Saturday
     *
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getDay = function (date) { };
    /**
     * Get the day num of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getDate = function (date) { };
    /**
     * Get the hours of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getHours = function (date) { };
    /**
     * Get the minutes of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getMinutes = function (date) { };
    /**
     * Get the seconds of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getSeconds = function (date) { };
    /**
     * Get the milliseconds timestamp of the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getTime = function (date) { };
    /**
     * Gets the number of days in the month of the given date.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getNumDaysInMonth = function (date) { };
    /**
     * Get the number of calendar days between the given dates.
     * If dateLeft is before dateRight, it would return positive value
     * If dateLeft is after dateRight, it would return negative value
     * @abstract
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    DateTimeAdapter.prototype.differenceInCalendarDays = function (dateLeft, dateRight) { };
    /**
     * Gets the name for the year of the given date.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.getYearName = function (date) { };
    /**
     * Get a list of month names
     * @abstract
     * @param {?} style
     * @return {?}
     */
    DateTimeAdapter.prototype.getMonthNames = function (style) { };
    /**
     * Get a list of week names
     * @abstract
     * @param {?} style
     * @return {?}
     */
    DateTimeAdapter.prototype.getDayOfWeekNames = function (style) { };
    /**
     * Gets a list of names for the dates of the month.
     * @abstract
     * @return {?}
     */
    DateTimeAdapter.prototype.getDateNames = function () { };
    /**
     * Return a Date object as a string, using the ISO standard
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.toIso8601 = function (date) { };
    /**
     * Check if the give dates are equal
     * @abstract
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    DateTimeAdapter.prototype.isEqual = function (dateLeft, dateRight) { };
    /**
     * Check if the give dates are the same day
     * @abstract
     * @param {?} dateLeft
     * @param {?} dateRight
     * @return {?}
     */
    DateTimeAdapter.prototype.isSameDay = function (dateLeft, dateRight) { };
    /**
     * Checks whether the given date is valid.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.isValid = function (date) { };
    /**
     * Gets date instance that is not valid.
     * @abstract
     * @return {?}
     */
    DateTimeAdapter.prototype.invalid = function () { };
    /**
     * Checks whether the given object is considered a date instance by this DateTimeAdapter.
     * @abstract
     * @param {?} obj
     * @return {?}
     */
    DateTimeAdapter.prototype.isDateInstance = function (obj) { };
    /**
     * Add the specified number of years to the given date
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.addCalendarYears = function (date, amount) { };
    /**
     * Add the specified number of months to the given date
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.addCalendarMonths = function (date, amount) { };
    /**
     * Add the specified number of days to the given date
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.addCalendarDays = function (date, amount) { };
    /**
     * Set the hours to the given date.
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.setHours = function (date, amount) { };
    /**
     * Set the minutes to the given date.
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.setMinutes = function (date, amount) { };
    /**
     * Set the seconds to the given date.
     * @abstract
     * @param {?} date
     * @param {?} amount
     * @return {?}
     */
    DateTimeAdapter.prototype.setSeconds = function (date, amount) { };
    /**
     * Creates a date with the given year, month, date, hour, minute and second. Does not allow over/under-flow of the
     * month and date.
     * @abstract
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.createDate = function (year, month, date) { };
    /**
     * @abstract
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hours
     * @param {?} minutes
     * @param {?} seconds
     * @return {?}
     */
    DateTimeAdapter.prototype.createDate = function (year, month, date, hours, minutes, seconds) { };
    /**
     * Clone the given date
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateTimeAdapter.prototype.clone = function (date) { };
    /**
     * Get a new moment
     *
     * @abstract
     * @return {?}
     */
    DateTimeAdapter.prototype.now = function () { };
    /**
     * Formats a date as a string according to the given format.
     * @abstract
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    DateTimeAdapter.prototype.format = function (date, displayFormat) { };
    /**
     * Parse a user-provided value to a Date Object
     * @abstract
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    DateTimeAdapter.prototype.parse = function (value, parseFormat) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxLQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUNsRCxzQkFBc0IsRUFDdEI7SUFDSSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNEJBQTRCO0NBQ3hDLENBQ0o7Ozs7O0FBR0QsTUFBTSxVQUFVLDRCQUE0QjtJQUN4QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixDQUFDOzs7OztBQUdELE1BQU0sS0FBTyw2QkFBNkIsR0FBRztJQUN6QyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFdBQVcsRUFBRSxTQUFTO0NBQ3pCOzs7OztBQUVEOzs7OztJQUFBOzs7O1FBS2MsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBTTVCLHNCQUFpQixHQUFHLFFBQVEsQ0FBQzs7OztRQUc3Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7SUFzUW5ELENBQUM7SUE5UUcsc0JBQUksMENBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFrTEQ7Ozs7O1NBS0s7Ozs7Ozs7Ozs7O0lBQ0wsaUNBQU87Ozs7Ozs7Ozs7SUFBUCxVQUFRLEtBQVEsRUFBRSxNQUFTO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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QywyREFBcUM7Ozs7Ozs7SUFLckMsMkRBQXFDOzs7Ozs7O0lBS3JDLHdEQUFrQzs7Ozs7OztJQUtsQyxrRUFBNEM7Ozs7Ozs7Ozs7SUFPNUMsd0ZBQXFFOzs7Ozs7O0lBS3JFLDREQUFzQzs7Ozs7OztJQUt0QywrREFBcUU7Ozs7Ozs7SUFLckUsbUVBQXlFOzs7Ozs7SUFLekUseURBQWtDOzs7Ozs7O0lBS2xDLDBEQUFvQzs7Ozs7Ozs7SUFLcEMsdUVBQXFEOzs7Ozs7OztJQUtyRCx5RUFBdUQ7Ozs7Ozs7SUFLdkQsd0RBQW1DOzs7Ozs7SUFLbkMsb0RBQXNCOzs7Ozs7O0lBS3RCLDhEQUEyQzs7Ozs7Ozs7SUFLM0MseUVBQXNEOzs7Ozs7OztJQUt0RCwwRUFBdUQ7Ozs7Ozs7O0lBS3ZELHdFQUFxRDs7Ozs7Ozs7SUFLckQsaUVBQThDOzs7Ozs7OztJQUs5QyxtRUFBZ0Q7Ozs7Ozs7O0lBS2hELG1FQUFnRDs7Ozs7Ozs7OztJQU1oRCx3RUFBa0U7Ozs7Ozs7Ozs7O0lBQ2xFLGlHQU9LOzs7Ozs7O0lBS0wsc0RBQTJCOzs7Ozs7O0lBSzNCLGdEQUFrQjs7Ozs7Ozs7SUFLbEIsc0VBQXFEOzs7Ozs7OztJQUtyRCxvRUFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdGUtdGltZS1hZGFwdGVyLmNsYXNzXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGluamVjdCwgSW5qZWN0aW9uVG9rZW4sIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogSW5qZWN0aW9uVG9rZW4gZm9yIGRhdGUgdGltZSBwaWNrZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSBkZWZhdWx0IGxvY2FsZSBjb2RlLiAqL1xuZXhwb3J0IGNvbnN0IE9XTF9EQVRFX1RJTUVfTE9DQUxFID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oXG4gICAgJ09XTF9EQVRFX1RJTUVfTE9DQUxFJyxcbiAgICB7XG4gICAgICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICAgICAgZmFjdG9yeTogT1dMX0RBVEVfVElNRV9MT0NBTEVfRkFDVE9SWVxuICAgIH1cbik7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gT1dMX0RBVEVfVElNRV9MT0NBTEVfRkFDVE9SWSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBpbmplY3QoTE9DQUxFX0lEKTtcbn1cblxuLyoqIFByb3ZpZGVyIGZvciBPV0xfREFURV9USU1FX0xPQ0FMRSBpbmplY3Rpb24gdG9rZW4uICovXG5leHBvcnQgY29uc3QgT1dMX0RBVEVfVElNRV9MT0NBTEVfUFJPVklERVIgPSB7XG4gICAgcHJvdmlkZTogT1dMX0RBVEVfVElNRV9MT0NBTEUsXG4gICAgdXNlRXhpc3Rpbmc6IExPQ0FMRV9JRFxufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGVUaW1lQWRhcHRlcjxUPiB7XG4gICAgLyoqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciBhbGwgZGF0ZXMuICovXG4gICAgcHJvdGVjdGVkIGxvY2FsZTogYW55O1xuXG4gICAgLyoqIEEgc3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgbG9jYWxlIGNoYW5nZXMuICovXG4gICAgcHJvdGVjdGVkIF9sb2NhbGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBnZXQgbG9jYWxlQ2hhbmdlcygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZUNoYW5nZXM7XG4gICAgfVxuXG4gICAgLyoqIHRvdGFsIG1pbGxpc2Vjb25kcyBpbiBhIGRheS4gKi9cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuICAgIC8qKiB0b3RhbCBtaWxsaXNlY29uZHMgaW4gYSBtaW51dGUuICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1pbGxpc2VvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFllYXIoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGVcbiAgICAgKiAwIC0tIEphbnVhcnlcbiAgICAgKiAxMSAtLSBEZWNlbWJlclxuICAgICAqICovXG4gICAgYWJzdHJhY3QgZ2V0TW9udGgoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICogMCAtLSBTdW5kYXlcbiAgICAgKiA2IC0tIFNhdHVyZGF5XG4gICAgICogKi9cbiAgICBhYnN0cmFjdCBnZXREYXkoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGF5IG51bSBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldERhdGUoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91cnMgb2YgdGhlIGdpdmVuIGRhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRIb3VycyhkYXRlOiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGVzIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0TWludXRlcyhkYXRlOiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWNvbmRzIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0U2Vjb25kcyhkYXRlOiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMgdGltZXN0YW1wIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0VGltZShkYXRlOiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE51bURheXNJbk1vbnRoKGRhdGU6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICAgICAqIElmIGRhdGVMZWZ0IGlzIGJlZm9yZSBkYXRlUmlnaHQsIGl0IHdvdWxkIHJldHVybiBwb3NpdGl2ZSB2YWx1ZVxuICAgICAqIElmIGRhdGVMZWZ0IGlzIGFmdGVyIGRhdGVSaWdodCwgaXQgd291bGQgcmV0dXJuIG5lZ2F0aXZlIHZhbHVlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0OiBULCBkYXRlUmlnaHQ6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYW1lIGZvciB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRZZWFyTmFtZShkYXRlOiBUKTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiBtb250aCBuYW1lc1xuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE1vbnRoTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiB3ZWVrIG5hbWVzXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGxpc3Qgb2YgbmFtZXMgZm9yIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0RGF0ZU5hbWVzKCk6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgRGF0ZSBvYmplY3QgYXMgYSBzdHJpbmcsIHVzaW5nIHRoZSBJU08gc3RhbmRhcmRcbiAgICAgKi9cbiAgICBhYnN0cmFjdCB0b0lzbzg2MDEoZGF0ZTogVCk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBnaXZlIGRhdGVzIGFyZSBlcXVhbFxuICAgICAqL1xuICAgIGFic3RyYWN0IGlzRXF1YWwoZGF0ZUxlZnQ6IFQsIGRhdGVSaWdodDogVCk6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZSBkYXRlcyBhcmUgdGhlIHNhbWUgZGF5XG4gICAgICovXG4gICAgYWJzdHJhY3QgaXNTYW1lRGF5KGRhdGVMZWZ0OiBULCBkYXRlUmlnaHQ6IFQpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGUgaXMgdmFsaWQuXG4gICAgICovXG4gICAgYWJzdHJhY3QgaXNWYWxpZChkYXRlOiBUKTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgZGF0ZSBpbnN0YW5jZSB0aGF0IGlzIG5vdCB2YWxpZC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBpbnZhbGlkKCk6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGNvbnNpZGVyZWQgYSBkYXRlIGluc3RhbmNlIGJ5IHRoaXMgRGF0ZVRpbWVBZGFwdGVyLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyB0byB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogVCwgYW1vdW50OiBudW1iZXIpOiBUO1xuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgaG91cnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3Qgc2V0SG91cnMoZGF0ZTogVCwgYW1vdW50OiBudW1iZXIpOiBUO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBtaW51dGVzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHNldE1pbnV0ZXMoZGF0ZTogVCwgYW1vdW50OiBudW1iZXIpOiBUO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHNldFNlY29uZHMoZGF0ZTogVCwgYW1vdW50OiBudW1iZXIpOiBUO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGRhdGUgd2l0aCB0aGUgZ2l2ZW4geWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZSBhbmQgc2Vjb25kLiBEb2VzIG5vdCBhbGxvdyBvdmVyL3VuZGVyLWZsb3cgb2YgdGhlXG4gICAgICogbW9udGggYW5kIGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgY3JlYXRlRGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcik6IFQ7XG4gICAgYWJzdHJhY3QgY3JlYXRlRGF0ZShcbiAgICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgICBtb250aDogbnVtYmVyLFxuICAgICAgICBkYXRlOiBudW1iZXIsXG4gICAgICAgIGhvdXJzOiBudW1iZXIsXG4gICAgICAgIG1pbnV0ZXM6IG51bWJlcixcbiAgICAgICAgc2Vjb25kczogbnVtYmVyXG4gICAgKTogVDtcblxuICAgIC8qKlxuICAgICAqIENsb25lIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgY2xvbmUoZGF0ZTogVCk6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBuZXcgbW9tZW50XG4gICAgICogKi9cbiAgICBhYnN0cmFjdCBub3coKTogVDtcblxuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgYSBkYXRlIGFzIGEgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gZm9ybWF0LlxuICAgICAqL1xuICAgIGFic3RyYWN0IGZvcm1hdChkYXRlOiBULCBkaXNwbGF5Rm9ybWF0OiBhbnkpOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhIHVzZXItcHJvdmlkZWQgdmFsdWUgdG8gYSBEYXRlIE9iamVjdFxuICAgICAqL1xuICAgIGFic3RyYWN0IHBhcnNlKHZhbHVlOiBhbnksIHBhcnNlRm9ybWF0OiBhbnkpOiBUIHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbXBhcmUgdHdvIGdpdmVuIGRhdGVzXG4gICAgICogMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICAgICAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kXG4gICAgICogMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gICAgICogKi9cbiAgICBjb21wYXJlKGZpcnN0OiBULCBzZWNvbmQ6IFQpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChmaXJzdCkgfHwgIXRoaXMuaXNWYWxpZChzZWNvbmQpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSlNOYXRpdmVEYXRlOiBDYW5ub3QgY29tcGFyZSBpbnZhbGlkIGRhdGVzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0ZUZpcnN0ID0gdGhpcy5jbG9uZShmaXJzdCk7XG4gICAgICAgIGNvbnN0IGRhdGVTZWNvbmQgPSB0aGlzLmNsb25lKHNlY29uZCk7XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuZ2V0VGltZShkYXRlRmlyc3QpIC0gdGhpcy5nZXRUaW1lKGRhdGVTZWNvbmQpO1xuXG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0d28gZ2l2ZW4gZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHllYXJcbiAgICAgKiAxIGlmIHRoZSBmaXJzdCBkYXRlJ3MgeWVhciBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICAgICAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlJ3MgeWVhciBpcyBiZWZvcmUgdGhlIHNlY29uZFxuICAgICAqIDAgaWYgdHdvIGdpdmVuIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB5ZWFyXG4gICAgICogKi9cbiAgICBjb21wYXJlWWVhcihmaXJzdDogVCwgc2Vjb25kOiBUKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoZmlyc3QpIHx8ICF0aGlzLmlzVmFsaWQoc2Vjb25kKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0pTTmF0aXZlRGF0ZTogQ2Fubm90IGNvbXBhcmUgaW52YWxpZCBkYXRlcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHllYXJMZWZ0ID0gdGhpcy5nZXRZZWFyKGZpcnN0KTtcbiAgICAgICAgY29uc3QgeWVhclJpZ2h0ID0gdGhpcy5nZXRZZWFyKHNlY29uZCk7XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IHllYXJMZWZ0IC0geWVhclJpZ2h0O1xuXG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gZGVzZXJpYWxpemUgYSB2YWx1ZSB0byBhIHZhbGlkIGRhdGUgb2JqZWN0LiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIHBhcnNpbmcgaW4gdGhhdFxuICAgICAqIGRlc2VyaWFsaXplIHNob3VsZCBvbmx5IGFjY2VwdCBub24tYW1iaWd1b3VzLCBsb2NhbGUtaW5kZXBlbmRlbnQgZm9ybWF0cyAoZS5nLiBhIElTTyA4NjAxXG4gICAgICogc3RyaW5nKS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgYWxsb3cgYW55IGRlc2VyaWFsaXphdGlvbiwgaXQgc2ltcGx5IGNoZWNrcyB0aGF0XG4gICAgICogdGhlIGdpdmVuIHZhbHVlIGlzIGFscmVhZHkgYSB2YWxpZCBkYXRlIG9iamVjdCBvciBudWxsLiBUaGUgYDxtYXQtZGF0ZXBpY2tlcj5gIHdpbGwgY2FsbCB0aGlzXG4gICAgICogbWV0aG9kIG9uIGFsbCBvZiBpdCdzIGBASW5wdXQoKWAgcHJvcGVydGllcyB0aGF0IGFjY2VwdCBkYXRlcy4gSXQgaXMgdGhlcmVmb3JlIHBvc3NpYmxlIHRvXG4gICAgICogc3VwcG9ydCBwYXNzaW5nIHZhbHVlcyBmcm9tIHlvdXIgYmFja2VuZCBkaXJlY3RseSB0byB0aGVzZSBwcm9wZXJ0aWVzIGJ5IG92ZXJyaWRpbmcgdGhpcyBtZXRob2RcbiAgICAgKiB0byBhbHNvIGRlc2VyaWFsaXplIHRoZSBmb3JtYXQgdXNlZCBieSB5b3VyIGJhY2tlbmQuXG4gICAgICovXG4gICAgZGVzZXJpYWxpemUodmFsdWU6IGFueSk6IFQgfCBudWxsIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCB8fFxuICAgICAgICAgICAgKHRoaXMuaXNEYXRlSW5zdGFuY2UodmFsdWUpICYmIHRoaXMuaXNWYWxpZCh2YWx1ZSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludmFsaWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2NhbGUgdXNlZCBmb3IgYWxsIGRhdGVzLlxuICAgICAqL1xuICAgIHNldExvY2FsZShsb2NhbGU6IGFueSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgdGhpcy5fbG9jYWxlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xhbXAgdGhlIGdpdmVuIGRhdGUgYmV0d2VlbiBtaW4gYW5kIG1heCBkYXRlcy5cbiAgICAgKi9cbiAgICBjbGFtcERhdGUoZGF0ZTogVCwgbWluPzogVCB8IG51bGwsIG1heD86IFQgfCBudWxsKTogVCB7XG4gICAgICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlKGRhdGUsIG1pbikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXggJiYgdGhpcy5jb21wYXJlKGRhdGUsIG1heCkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbn1cbiJdfQ==