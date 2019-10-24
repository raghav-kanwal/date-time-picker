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
export const OWL_DATE_TIME_LOCALE = new InjectionToken('OWL_DATE_TIME_LOCALE', {
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
export const OWL_DATE_TIME_LOCALE_PROVIDER = {
    provide: OWL_DATE_TIME_LOCALE,
    useExisting: LOCALE_ID
};
/**
 * @abstract
 * @template T
 */
export class DateTimeAdapter {
    constructor() {
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
    /**
     * @return {?}
     */
    get localeChanges() {
        return this._localeChanges;
    }
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
    compare(first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        /** @type {?} */
        const dateFirst = this.clone(first);
        /** @type {?} */
        const dateSecond = this.clone(second);
        /** @type {?} */
        const diff = this.getTime(dateFirst) - this.getTime(dateSecond);
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
    }
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
    compareYear(first, second) {
        if (!this.isValid(first) || !this.isValid(second)) {
            throw Error('JSNativeDate: Cannot compare invalid dates.');
        }
        /** @type {?} */
        const yearLeft = this.getYear(first);
        /** @type {?} */
        const yearRight = this.getYear(second);
        /** @type {?} */
        const diff = yearLeft - yearRight;
        if (diff < 0) {
            return -1;
        }
        else if (diff > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
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
    deserialize(value) {
        if (value == null ||
            (this.isDateInstance(value) && this.isValid(value))) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    clampDate(date, min, max) {
        if (min && this.compare(date, min) < 0) {
            return min;
        }
        if (max && this.compare(date, max) > 0) {
            return max;
        }
        return date;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHbEUsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUNsRCxzQkFBc0IsRUFDdEI7SUFDSSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNEJBQTRCO0NBQ3hDLENBQ0o7Ozs7O0FBR0QsTUFBTSxVQUFVLDRCQUE0QjtJQUN4QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixDQUFDOzs7OztBQUdELE1BQU0sT0FBTyw2QkFBNkIsR0FBRztJQUN6QyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFdBQVcsRUFBRSxTQUFTO0NBQ3pCOzs7OztBQUVELE1BQU0sT0FBZ0IsZUFBZTtJQUFyQzs7OztRQUtjLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQU01QixzQkFBaUIsR0FBRyxRQUFRLENBQUM7Ozs7UUFHN0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBc1FuRCxDQUFDOzs7O0lBOVFHLElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7OztJQXdMRCxPQUFPLENBQUMsS0FBUSxFQUFFLE1BQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9DLE1BQU0sS0FB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QUtsQywwREFBb0M7Ozs7Ozs7O0lBS3BDLHVFQUFxRDs7Ozs7Ozs7SUFLckQseUVBQXVEOzs7Ozs7O0lBS3ZELHdEQUFtQzs7Ozs7O0lBS25DLG9EQUFzQjs7Ozs7OztJQUt0Qiw4REFBMkM7Ozs7Ozs7O0lBSzNDLHlFQUFzRDs7Ozs7Ozs7SUFLdEQsMEVBQXVEOzs7Ozs7OztJQUt2RCx3RUFBcUQ7Ozs7Ozs7O0lBS3JELGlFQUE4Qzs7Ozs7Ozs7SUFLOUMsbUVBQWdEOzs7Ozs7OztJQUtoRCxtRUFBZ0Q7Ozs7Ozs7Ozs7SUFNaEQsd0VBQWtFOzs7Ozs7Ozs7OztJQUNsRSxpR0FPSzs7Ozs7OztJQUtMLHNEQUEyQjs7Ozs7OztJQUszQixnREFBa0I7Ozs7Ozs7O0lBS2xCLHNFQUFxRDs7Ozs7Ozs7SUFLckQsb0VBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLXRpbWUtYWRhcHRlci5jbGFzc1xuICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpbmplY3QsIEluamVjdGlvblRva2VuLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEluamVjdGlvblRva2VuIGZvciBkYXRlIHRpbWUgcGlja2VyIHRoYXQgY2FuIGJlIHVzZWQgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsb2NhbGUgY29kZS4gKi9cbmV4cG9ydCBjb25zdCBPV0xfREFURV9USU1FX0xPQ0FMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KFxuICAgICdPV0xfREFURV9USU1FX0xPQ0FMRScsXG4gICAge1xuICAgICAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgICAgIGZhY3Rvcnk6IE9XTF9EQVRFX1RJTUVfTE9DQUxFX0ZBQ1RPUllcbiAgICB9XG4pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9XTF9EQVRFX1RJTUVfTE9DQUxFX0ZBQ1RPUlkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaW5qZWN0KExPQ0FMRV9JRCk7XG59XG5cbi8qKiBQcm92aWRlciBmb3IgT1dMX0RBVEVfVElNRV9MT0NBTEUgaW5qZWN0aW9uIHRva2VuLiAqL1xuZXhwb3J0IGNvbnN0IE9XTF9EQVRFX1RJTUVfTE9DQUxFX1BST1ZJREVSID0ge1xuICAgIHByb3ZpZGU6IE9XTF9EQVRFX1RJTUVfTE9DQUxFLFxuICAgIHVzZUV4aXN0aW5nOiBMT0NBTEVfSURcbn07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRlVGltZUFkYXB0ZXI8VD4ge1xuICAgIC8qKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgYWxsIGRhdGVzLiAqL1xuICAgIHByb3RlY3RlZCBsb2NhbGU6IGFueTtcblxuICAgIC8qKiBBIHN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIGxvY2FsZSBjaGFuZ2VzLiAqL1xuICAgIHByb3RlY3RlZCBfbG9jYWxlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgZ2V0IGxvY2FsZUNoYW5nZXMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGVDaGFuZ2VzO1xuICAgIH1cblxuICAgIC8qKiB0b3RhbCBtaWxsaXNlY29uZHMgaW4gYSBkYXkuICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbiAgICAvKiogdG90YWwgbWlsbGlzZWNvbmRzIGluIGEgbWludXRlLiAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSBtaWxsaXNlb25kc0luTWludXRlID0gNjAwMDA7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRZZWFyKGRhdGU6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICogMCAtLSBKYW51YXJ5XG4gICAgICogMTEgLS0gRGVjZW1iZXJcbiAgICAgKiAqL1xuICAgIGFic3RyYWN0IGdldE1vbnRoKGRhdGU6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqIDAgLS0gU3VuZGF5XG4gICAgICogNiAtLSBTYXR1cmRheVxuICAgICAqICovXG4gICAgYWJzdHJhY3QgZ2V0RGF5KGRhdGU6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBudW0gb2YgdGhlIGdpdmVuIGRhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXREYXRlKGRhdGU6IFQpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhvdXJzIG9mIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0SG91cnMoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWludXRlcyBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE1pbnV0ZXMoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2Vjb25kcyBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFNlY29uZHMoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFRpbWUoZGF0ZTogVCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAgICAgKiBJZiBkYXRlTGVmdCBpcyBiZWZvcmUgZGF0ZVJpZ2h0LCBpdCB3b3VsZCByZXR1cm4gcG9zaXRpdmUgdmFsdWVcbiAgICAgKiBJZiBkYXRlTGVmdCBpcyBhZnRlciBkYXRlUmlnaHQsIGl0IHdvdWxkIHJldHVybiBuZWdhdGl2ZSB2YWx1ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdDogVCwgZGF0ZVJpZ2h0OiBUKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0WWVhck5hbWUoZGF0ZTogVCk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Qgb2YgbW9udGggbmFtZXNcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRNb250aE5hbWVzKHN0eWxlOiAnbG9uZycgfCAnc2hvcnQnIHwgJ25hcnJvdycpOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Qgb2Ygd2VlayBuYW1lc1xuICAgICAqL1xuICAgIGFic3RyYWN0IGdldERheU9mV2Vla05hbWVzKHN0eWxlOiAnbG9uZycgfCAnc2hvcnQnIHwgJ25hcnJvdycpOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBsaXN0IG9mIG5hbWVzIGZvciB0aGUgZGF0ZXMgb2YgdGhlIG1vbnRoLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldERhdGVOYW1lcygpOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIERhdGUgb2JqZWN0IGFzIGEgc3RyaW5nLCB1c2luZyB0aGUgSVNPIHN0YW5kYXJkXG4gICAgICovXG4gICAgYWJzdHJhY3QgdG9Jc284NjAxKGRhdGU6IFQpOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZSBkYXRlcyBhcmUgZXF1YWxcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBpc0VxdWFsKGRhdGVMZWZ0OiBULCBkYXRlUmlnaHQ6IFQpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmUgZGF0ZXMgYXJlIHRoZSBzYW1lIGRheVxuICAgICAqL1xuICAgIGFic3RyYWN0IGlzU2FtZURheShkYXRlTGVmdDogVCwgZGF0ZVJpZ2h0OiBUKTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRlIGlzIHZhbGlkLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGlzVmFsaWQoZGF0ZTogVCk6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGRhdGUgaW5zdGFuY2UgdGhhdCBpcyBub3QgdmFsaWQuXG4gICAgICovXG4gICAgYWJzdHJhY3QgaW52YWxpZCgpOiBUO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBjb25zaWRlcmVkIGEgZGF0ZSBpbnN0YW5jZSBieSB0aGlzIERhdGVUaW1lQWRhcHRlci5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBhZGRDYWxlbmRhclllYXJzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGVcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBULCBhbW91bnQ6IG51bWJlcik6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyRGF5cyhkYXRlOiBULCBhbW91bnQ6IG51bWJlcik6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGhvdXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHNldEhvdXJzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBzZXRNaW51dGVzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBzZXRTZWNvbmRzKGRhdGU6IFQsIGFtb3VudDogbnVtYmVyKTogVDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBkYXRlIHdpdGggdGhlIGdpdmVuIHllYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUgYW5kIHNlY29uZC4gRG9lcyBub3QgYWxsb3cgb3Zlci91bmRlci1mbG93IG9mIHRoZVxuICAgICAqIG1vbnRoIGFuZCBkYXRlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBUO1xuICAgIGFic3RyYWN0IGNyZWF0ZURhdGUoXG4gICAgICAgIHllYXI6IG51bWJlcixcbiAgICAgICAgbW9udGg6IG51bWJlcixcbiAgICAgICAgZGF0ZTogbnVtYmVyLFxuICAgICAgICBob3VyczogbnVtYmVyLFxuICAgICAgICBtaW51dGVzOiBudW1iZXIsXG4gICAgICAgIHNlY29uZHM6IG51bWJlclxuICAgICk6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqL1xuICAgIGFic3RyYWN0IGNsb25lKGRhdGU6IFQpOiBUO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbmV3IG1vbWVudFxuICAgICAqICovXG4gICAgYWJzdHJhY3Qgbm93KCk6IFQ7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGEgZGF0ZSBhcyBhIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGZvcm1hdC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogVCwgZGlzcGxheUZvcm1hdDogYW55KTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYSB1c2VyLXByb3ZpZGVkIHZhbHVlIHRvIGEgRGF0ZSBPYmplY3RcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogVCB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlIHR3byBnaXZlbiBkYXRlc1xuICAgICAqIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAgICAgKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZFxuICAgICAqIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICAgICAqICovXG4gICAgY29tcGFyZShmaXJzdDogVCwgc2Vjb25kOiBUKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoZmlyc3QpIHx8ICF0aGlzLmlzVmFsaWQoc2Vjb25kKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0pTTmF0aXZlRGF0ZTogQ2Fubm90IGNvbXBhcmUgaW52YWxpZCBkYXRlcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGVGaXJzdCA9IHRoaXMuY2xvbmUoZmlyc3QpO1xuICAgICAgICBjb25zdCBkYXRlU2Vjb25kID0gdGhpcy5jbG9uZShzZWNvbmQpO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLmdldFRpbWUoZGF0ZUZpcnN0KSAtIHRoaXMuZ2V0VGltZShkYXRlU2Vjb25kKTtcblxuICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgICAgICAgICAgIHJldHVybiBkaWZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdHdvIGdpdmVuIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB5ZWFyXG4gICAgICogMSBpZiB0aGUgZmlyc3QgZGF0ZSdzIHllYXIgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAgICAgKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSdzIHllYXIgaXMgYmVmb3JlIHRoZSBzZWNvbmRcbiAgICAgKiAwIGlmIHR3byBnaXZlbiBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgeWVhclxuICAgICAqICovXG4gICAgY29tcGFyZVllYXIoZmlyc3Q6IFQsIHNlY29uZDogVCk6IG51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKGZpcnN0KSB8fCAhdGhpcy5pc1ZhbGlkKHNlY29uZCkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdKU05hdGl2ZURhdGU6IENhbm5vdCBjb21wYXJlIGludmFsaWQgZGF0ZXMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ZWFyTGVmdCA9IHRoaXMuZ2V0WWVhcihmaXJzdCk7XG4gICAgICAgIGNvbnN0IHllYXJSaWdodCA9IHRoaXMuZ2V0WWVhcihzZWNvbmQpO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSB5ZWFyTGVmdCAtIHllYXJSaWdodDtcblxuICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIGRlc2VyaWFsaXplIGEgdmFsdWUgdG8gYSB2YWxpZCBkYXRlIG9iamVjdC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBwYXJzaW5nIGluIHRoYXRcbiAgICAgKiBkZXNlcmlhbGl6ZSBzaG91bGQgb25seSBhY2NlcHQgbm9uLWFtYmlndW91cywgbG9jYWxlLWluZGVwZW5kZW50IGZvcm1hdHMgKGUuZy4gYSBJU08gODYwMVxuICAgICAqIHN0cmluZykuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGRvZXMgbm90IGFsbG93IGFueSBkZXNlcmlhbGl6YXRpb24sIGl0IHNpbXBseSBjaGVja3MgdGhhdFxuICAgICAqIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbHJlYWR5IGEgdmFsaWQgZGF0ZSBvYmplY3Qgb3IgbnVsbC4gVGhlIGA8bWF0LWRhdGVwaWNrZXI+YCB3aWxsIGNhbGwgdGhpc1xuICAgICAqIG1ldGhvZCBvbiBhbGwgb2YgaXQncyBgQElucHV0KClgIHByb3BlcnRpZXMgdGhhdCBhY2NlcHQgZGF0ZXMuIEl0IGlzIHRoZXJlZm9yZSBwb3NzaWJsZSB0b1xuICAgICAqIHN1cHBvcnQgcGFzc2luZyB2YWx1ZXMgZnJvbSB5b3VyIGJhY2tlbmQgZGlyZWN0bHkgdG8gdGhlc2UgcHJvcGVydGllcyBieSBvdmVycmlkaW5nIHRoaXMgbWV0aG9kXG4gICAgICogdG8gYWxzbyBkZXNlcmlhbGl6ZSB0aGUgZm9ybWF0IHVzZWQgYnkgeW91ciBiYWNrZW5kLlxuICAgICAqL1xuICAgIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBUIHwgbnVsbCB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHZhbHVlID09IG51bGwgfHxcbiAgICAgICAgICAgICh0aGlzLmlzRGF0ZUluc3RhbmNlKHZhbHVlKSAmJiB0aGlzLmlzVmFsaWQodmFsdWUpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9jYWxlIHVzZWQgZm9yIGFsbCBkYXRlcy5cbiAgICAgKi9cbiAgICBzZXRMb2NhbGUobG9jYWxlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgIHRoaXMuX2xvY2FsZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsYW1wIHRoZSBnaXZlbiBkYXRlIGJldHdlZW4gbWluIGFuZCBtYXggZGF0ZXMuXG4gICAgICovXG4gICAgY2xhbXBEYXRlKGRhdGU6IFQsIG1pbj86IFQgfCBudWxsLCBtYXg/OiBUIHwgbnVsbCk6IFQge1xuICAgICAgICBpZiAobWluICYmIHRoaXMuY29tcGFyZShkYXRlLCBtaW4pIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICYmIHRoaXMuY29tcGFyZShkYXRlLCBtYXgpID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG59XG4iXX0=