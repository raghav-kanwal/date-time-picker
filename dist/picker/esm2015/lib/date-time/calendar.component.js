/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * calendar.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
/**
 * @template T
 */
export class OwlCalendarComponent {
    /**
     * @param {?} elmRef
     * @param {?} pickerIntl
     * @param {?} ngZone
     * @param {?} cdRef
     * @param {?} dateTimeAdapter
     * @param {?} dateTimeFormats
     */
    constructor(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.ngZone = ngZone;
        this.cdRef = cdRef;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        /**
         * Set the first day of week
         */
        this.firstDayOfWeek = 0;
        this._selecteds = [];
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        /**
         * Emits when the currently picker moment changes.
         */
        this.pickerMomentChange = new EventEmitter();
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this.userSelection = new EventEmitter();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         *
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         *
         */
        this.monthSelected = new EventEmitter();
        /**
         * Date filter for the month and year view
         */
        this.dateFilterForViews = (/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            return (!!date &&
                (!this.dateFilter || this.dateFilter(date)) &&
                (!this.minDate ||
                    this.dateTimeAdapter.compare(date, this.minDate) >= 0) &&
                (!this.maxDate ||
                    this.dateTimeAdapter.compare(date, this.maxDate) <= 0));
        });
        this.intlChangesSub = Subscription.EMPTY;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this.moveFocusOnNextTick = false;
        this.intlChangesSub = this.pickerIntl.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.cdRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    get minDate() {
        return this._minDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._minDate = value
            ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
            : null;
    }
    /**
     * @return {?}
     */
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        value = this.dateTimeAdapter.deserialize(value);
        value = this.getValidDate(value);
        this._maxDate = value
            ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value))
            : null;
    }
    /**
     * @return {?}
     */
    get pickerMoment() {
        return this._pickerMoment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pickerMoment(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._pickerMoment =
            this.getValidDate(value) || this.dateTimeAdapter.now();
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        value = this.dateTimeAdapter.deserialize(value);
        this._selected = this.getValidDate(value);
    }
    /**
     * @return {?}
     */
    get selecteds() {
        return this._selecteds;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set selecteds(values) {
        this._selecteds = values.map((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            v = this.dateTimeAdapter.deserialize(v);
            return this.getValidDate(v);
        }));
    }
    /**
     * @return {?}
     */
    get periodButtonText() {
        return this.isMonthView
            ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel)
            : this.dateTimeAdapter.getYearName(this.pickerMoment);
    }
    /**
     * @return {?}
     */
    get periodButtonLabel() {
        return this.isMonthView
            ? this.pickerIntl.switchToMultiYearViewLabel
            : this.pickerIntl.switchToMonthViewLabel;
    }
    /**
     * @return {?}
     */
    get prevButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.prevMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.prevYearLabel;
        }
        else {
            return null;
        }
    }
    /**
     * @return {?}
     */
    get nextButtonLabel() {
        if (this._currentView === 'month') {
            return this.pickerIntl.nextMonthLabel;
        }
        else if (this._currentView === 'year') {
            return this.pickerIntl.nextYearLabel;
        }
        else {
            return null;
        }
    }
    /**
     * @return {?}
     */
    get currentView() {
        return this._currentView;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    set currentView(view) {
        this._currentView = view;
        this.moveFocusOnNextTick = true;
    }
    /**
     * @return {?}
     */
    get isInSingleMode() {
        return this.selectMode === 'single';
    }
    /**
     * @return {?}
     */
    get isInRangeMode() {
        return (this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom' ||
            this.selectMode === 'rangeTo');
    }
    /**
     * @return {?}
     */
    get showControlArrows() {
        return this._currentView !== 'multi-years';
    }
    /**
     * @return {?}
     */
    get isMonthView() {
        return this._currentView === 'month';
    }
    /**
     * Bind class 'owl-dt-calendar' to host
     *
     * @return {?}
     */
    get owlDTCalendarClass() {
        return true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._currentView = this.startView;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.intlChangesSub.unsubscribe();
    }
    /**
     * Toggle between month view and year view
     * @return {?}
     */
    toggleViews() {
        this.currentView =
            this._currentView == 'month' ? 'multi-years' : 'month';
    }
    /**
     * Handles user clicks on the previous button.
     *
     * @return {?}
     */
    previousClicked() {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    /**
     * Handles user clicks on the next button.
     *
     * @return {?}
     */
    nextClicked() {
        this.pickerMoment = this.isMonthView
            ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1)
            : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
        this.pickerMomentChange.emit(this.pickerMoment);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateSelected(date) {
        if (!this.dateFilterForViews(date)) {
            return;
        }
        this.selectedChange.emit(date);
        /*if ((this.isInSingleMode && !this.dateTimeAdapter.isSameDay(date, this.selected)) ||
            this.isInRangeMode) {
            this.selectedChange.emit(date);
        }*/
    }
    /**
     * Change the pickerMoment value and switch to a specific view
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    goToDateInView(date, view) {
        this.handlePickerMomentChange(date);
        this.currentView = view;
        return;
    }
    /**
     * Change the pickerMoment value
     * @param {?} date
     * @return {?}
     */
    handlePickerMomentChange(date) {
        this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
        this.pickerMomentChange.emit(this.pickerMoment);
        return;
    }
    /**
     * @return {?}
     */
    userSelected() {
        this.userSelection.emit();
    }
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    prevButtonEnabled() {
        return (!this.minDate || !this.isSameView(this.pickerMoment, this.minDate));
    }
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    nextButtonEnabled() {
        return (!this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate));
    }
    /**
     * Focus to the host element
     *
     * @return {?}
     */
    focusActiveCell() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.elmRef.nativeElement
                    .querySelector('.owl-dt-calendar-cell-active')
                    .focus();
            }));
        }));
    }
    /**
     * @param {?} normalizedYear
     * @return {?}
     */
    selectYearInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * @param {?} normalizedMonth
     * @return {?}
     */
    selectMonthInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @private
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    isSameView(date1, date2) {
        if (this._currentView === 'month') {
            return !!(date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                    this.dateTimeAdapter.getYear(date2) &&
                this.dateTimeAdapter.getMonth(date1) ===
                    this.dateTimeAdapter.getMonth(date2));
        }
        else if (this._currentView === 'year') {
            return !!(date1 &&
                date2 &&
                this.dateTimeAdapter.getYear(date1) ===
                    this.dateTimeAdapter.getYear(date2));
        }
        else {
            return false;
        }
    }
    /**
     * Get a valid date object
     * @private
     * @param {?} obj
     * @return {?}
     */
    getValidDate(obj) {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : null;
    }
}
OwlCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'owl-date-time-calendar',
                exportAs: 'owlDateTimeCalendar',
                template: "<div class=\"owl-dt-calendar-control\">\n    <!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) -->\n    <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\"\n            type=\"button\" tabindex=\"0\"\n            [style.visibility]=\"showControlArrows? 'visible': 'hidden'\"\n            [disabled]=\"!prevButtonEnabled()\"\n            [attr.aria-label]=\"prevButtonLabel\"\n            (click)=\"previousClicked()\">\n        <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\n            <!-- <editor-fold desc=\"SVG Arrow Left\"> -->\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.738 250.738\"\n                 style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\"\n                 width=\"100%\" height=\"100%\">\n                <path style=\"fill-rule: evenodd; clip-rule: evenodd;\" d=\"M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z\"/>\n            </svg>\n            <!-- </editor-fold> -->\n        </span>\n    </button>\n    <div class=\"owl-dt-calendar-control-content\">\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-period-button\"\n                type=\"button\" tabindex=\"0\"\n                [attr.aria-label]=\"periodButtonLabel\"\n                (click)=\"toggleViews()\">\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\n                {{periodButtonText}}\n\n                <span class=\"owl-dt-control-button-arrow\"\n                      [style.transform]=\"'rotate(' + (isMonthView? 0 : 180) +'deg)'\">\n                    <!-- <editor-fold desc=\"SVG Arrow\"> -->\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                         width=\"50%\" height=\"50%\" viewBox=\"0 0 292.362 292.362\" style=\"enable-background:new 0 0 292.362 292.362;\"\n                         xml:space=\"preserve\">\n                        <g>\n                            <path d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\"/>\n                        </g>\n                    </svg>\n                    <!-- </editor-fold> -->\n                </span>\n            </span>\n        </button>\n    </div>\n    <button class=\"owl-dt-control owl-dt-control-button owl-dt-control-arrow-button\"\n            type=\"button\" tabindex=\"0\"\n            [style.visibility]=\"showControlArrows? 'visible': 'hidden'\"\n            [disabled]=\"!nextButtonEnabled()\"\n            [attr.aria-label]=\"nextButtonLabel\"\n            (click)=\"nextClicked()\">\n        <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\n            <!-- <editor-fold desc=\"SVG Arrow Right\"> -->\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                 viewBox=\"0 0 250.738 250.738\" style=\"enable-background:new 0 0 250.738 250.738;\" xml:space=\"preserve\">\n                <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z\"/>\n            </svg>\n            <!-- </editor-fold> -->\n        </span>\n    </button>\n</div>\n<div class=\"owl-dt-calendar-main\" cdkMonitorSubtreeFocus [ngSwitch]=\"currentView\" tabindex=\"-1\">\n    <owl-date-time-month-view\n            *ngSwitchCase=\"'month'\"\n            [pickerMoment]=\"pickerMoment\"\n            [firstDayOfWeek]=\"firstDayOfWeek\"\n            [selected]=\"selected\"\n            [selecteds]=\"selecteds\"\n            [selectMode]=\"selectMode\"\n            [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"\n            [dateFilter]=\"dateFilter\"\n            [hideOtherMonths]=\"hideOtherMonths\"\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\n            (selectedChange)=\"dateSelected($event)\"\n            (userSelection)=\"userSelected()\"></owl-date-time-month-view>\n\n    <owl-date-time-year-view\n            *ngSwitchCase=\"'year'\"\n            [pickerMoment]=\"pickerMoment\"\n            [selected]=\"selected\"\n            [selecteds]=\"selecteds\"\n            [selectMode]=\"selectMode\"\n            [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"\n            [dateFilter]=\"dateFilter\"\n            (keyboardEnter)=\"focusActiveCell()\"\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\n            (monthSelected)=\"selectMonthInYearView($event)\"\n            (change)=\"goToDateInView($event, 'month')\"></owl-date-time-year-view>\n\n    <owl-date-time-multi-year-view\n            *ngSwitchCase=\"'multi-years'\"\n            [pickerMoment]=\"pickerMoment\"\n            [selected]=\"selected\"\n            [selecteds]=\"selecteds\"\n            [selectMode]=\"selectMode\"\n            [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"\n            [dateFilter]=\"dateFilter\"\n            (keyboardEnter)=\"focusActiveCell()\"\n            (pickerMomentChange)=\"handlePickerMomentChange($event)\"\n            (yearSelected)=\"selectYearInMultiYearView($event)\"\n            (change)=\"goToDateInView($event, 'year')\"></owl-date-time-multi-year-view>\n</div>\n",
                host: {
                    '[class.owl-dt-calendar]': 'owlDTCalendarClass'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
OwlCalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: OwlDateTimeIntl },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: DateTimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_FORMATS,] }] }
];
OwlCalendarComponent.propDecorators = {
    dateFilter: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    pickerMoment: [{ type: Input }],
    selectMode: [{ type: Input }],
    selected: [{ type: Input }],
    selecteds: [{ type: Input }],
    startView: [{ type: Input }],
    hideOtherMonths: [{ type: Input }],
    pickerMomentChange: [{ type: Output }],
    selectedChange: [{ type: Output }],
    userSelection: [{ type: Output }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }]
};
if (false) {
    /**
     * Date filter for the month and year view
     *
     * @type {?}
     */
    OwlCalendarComponent.prototype.dateFilter;
    /**
     * Set the first day of week
     * @type {?}
     */
    OwlCalendarComponent.prototype.firstDayOfWeek;
    /**
     * The minimum selectable date.
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._minDate;
    /**
     * The maximum selectable date.
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._maxDate;
    /**
     * The current picker moment
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._pickerMoment;
    /** @type {?} */
    OwlCalendarComponent.prototype.selectMode;
    /**
     * The currently selected moment.
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._selecteds;
    /**
     * The view that the calendar should start in.
     * @type {?}
     */
    OwlCalendarComponent.prototype.startView;
    /**
     * Whether to hide dates in other months at the start or end of the current month.
     *
     * @type {?}
     */
    OwlCalendarComponent.prototype.hideOtherMonths;
    /**
     * Emits when the currently picker moment changes.
     * @type {?}
     */
    OwlCalendarComponent.prototype.pickerMomentChange;
    /**
     * Emits when the currently selected date changes.
     * @type {?}
     */
    OwlCalendarComponent.prototype.selectedChange;
    /**
     * Emits when any date is selected.
     * @type {?}
     */
    OwlCalendarComponent.prototype.userSelection;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     *
     * @type {?}
     */
    OwlCalendarComponent.prototype.yearSelected;
    /**
     * Emits the selected month. This doesn't imply a change on the selected date
     *
     * @type {?}
     */
    OwlCalendarComponent.prototype.monthSelected;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype._currentView;
    /**
     * Date filter for the month and year view
     * @type {?}
     */
    OwlCalendarComponent.prototype.dateFilterForViews;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.intlChangesSub;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.moveFocusOnNextTick;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.elmRef;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.pickerIntl;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.dateTimeAdapter;
    /**
     * @type {?}
     * @private
     */
    OwlCalendarComponent.prototype.dateTimeFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBR0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUNILHFCQUFxQixFQUV4QixNQUFNLGtDQUFrQyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBYXBDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7OztJQWtPN0IsWUFDWSxNQUFrQixFQUNsQixVQUEyQixFQUMzQixNQUFjLEVBQ2QsS0FBd0IsRUFDWixlQUFtQyxFQUcvQyxlQUFtQztRQVBuQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNaLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUcvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7Ozs7UUE5Ti9DLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBc0VYLGVBQVUsR0FBUSxFQUFFLENBQUM7Ozs7UUFpQjdCLGNBQVMsR0FBcUMsT0FBTyxDQUFDOzs7O1FBVXRELHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7Ozs7UUFJM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDOzs7O1FBSXZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDOzs7OztRQU1yQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7Ozs7UUFzRXhDLHVCQUFrQjs7OztRQUFHLENBQUMsSUFBTyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxDQUNILENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztvQkFDVixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdELENBQUM7UUFDTixDQUFDLEVBQUM7UUFTTSxtQkFBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Ozs7OztRQU9wQyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFZaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUEvTkQsSUFDSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBZTtRQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDdEM7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUlELElBQ0ksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQWU7UUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQ3RDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7Ozs7SUFJRCxJQUNJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFRO1FBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBT0QsSUFDSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBZTtRQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFHRCxJQUNJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFXO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQXNDRCxJQUFJLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQ3RDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEI7WUFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztTQUN6QzthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7U0FDekM7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7O0lBR0QsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBSSxXQUFXLENBQUMsSUFBc0M7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2IsT0FBTyxDQUNILElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTztZQUMzQixJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVc7WUFDL0IsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQ2hDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLGFBQWEsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFtQkQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQTBCTSxRQUFRLEtBQUksQ0FBQzs7OztJQUViLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUNyQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUtNLFdBQVc7UUFDZCxJQUFJLENBQUMsV0FBVztZQUNaLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFLTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBS00sV0FBVztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxJQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0I7OztXQUdHO0lBQ1AsQ0FBQzs7Ozs7OztJQUtNLGNBQWMsQ0FDakIsSUFBTyxFQUNQLElBQXNDO1FBRXRDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPO0lBQ1gsQ0FBQzs7Ozs7O0lBS00sd0JBQXdCLENBQUMsSUFBTztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUM5QyxJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxPQUFPO0lBQ1gsQ0FBQzs7OztJQUVNLFlBQVk7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBS00saUJBQWlCO1FBQ3BCLE9BQU8sQ0FDSCxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFLTSxpQkFBaUI7UUFDcEIsT0FBTyxDQUNILENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ3JFLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFLTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2lCQUNmLFlBQVksRUFBRTtpQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7cUJBQ3BCLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztxQkFDN0MsS0FBSyxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU0seUJBQXlCLENBQUMsY0FBaUI7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxlQUFrQjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7OztJQUtPLFVBQVUsQ0FBQyxLQUFRLEVBQUUsS0FBUTtRQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUMzQyxDQUFDO1NBQ0w7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLENBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQzFDLENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7Ozs7O0lBS08sWUFBWSxDQUFDLEdBQVE7UUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxHQUFHO1lBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7OztZQWhhSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOHRNQUF3QztnQkFFeEMsSUFBSSxFQUFFO29CQUNGLHlCQUF5QixFQUFFLG9CQUFvQjtpQkFDbEQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2xEOzs7O1lBOUJHLFVBQVU7WUFVTCxlQUFlO1lBTnBCLE1BQU07WUFOTixpQkFBaUI7WUFhWixlQUFlLHVCQTJQZixRQUFROzRDQUNSLFFBQVEsWUFDUixNQUFNLFNBQUMscUJBQXFCOzs7eUJBcE9oQyxLQUFLOzZCQU1MLEtBQUs7c0JBS0wsS0FBSztzQkFvQkwsS0FBSzsyQkFvQkwsS0FBSzt5QkFXTCxLQUFLO3VCQUtMLEtBQUs7d0JBV0wsS0FBSzt3QkFlTCxLQUFLOzhCQU1MLEtBQUs7aUNBSUwsTUFBTTs2QkFJTixNQUFNOzRCQUlOLE1BQU07MkJBTU4sTUFBTTs0QkFNTixNQUFNOzs7Ozs7OztJQTNIUCwwQ0FDcUI7Ozs7O0lBS3JCLDhDQUNtQjs7Ozs7O0lBR25CLHdDQUEyQjs7Ozs7O0lBb0IzQix3Q0FBMkI7Ozs7OztJQW9CM0IsNkNBQXlCOztJQVl6QiwwQ0FDdUI7Ozs7OztJQUd2Qix5Q0FBNEI7Ozs7O0lBVzVCLDBDQUE2Qjs7Ozs7SUFnQjdCLHlDQUNzRDs7Ozs7O0lBS3RELCtDQUN5Qjs7Ozs7SUFHekIsa0RBQzJDOzs7OztJQUczQyw4Q0FDdUM7Ozs7O0lBR3ZDLDZDQUN5Qzs7Ozs7O0lBS3pDLDRDQUM4Qzs7Ozs7O0lBSzlDLDZDQUMrQzs7Ozs7SUFxQy9DLDRDQUF1RDs7Ozs7SUFpQ3ZELGtEQVNFOzs7OztJQVNGLDhDQUE0Qzs7Ozs7Ozs7SUFPNUMsbURBQW9DOzs7OztJQUdoQyxzQ0FBMEI7Ozs7O0lBQzFCLDBDQUFtQzs7Ozs7SUFDbkMsc0NBQXNCOzs7OztJQUN0QixxQ0FBZ0M7Ozs7O0lBQ2hDLCtDQUF1RDs7Ozs7SUFDdkQsK0NBRTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBjYWxlbmRhci5jb21wb25lbnRcbiAqL1xuXG5pbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nWm9uZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE93bERhdGVUaW1lSW50bCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcbmltcG9ydCB7XG4gICAgT1dMX0RBVEVfVElNRV9GT1JNQVRTLFxuICAgIE93bERhdGVUaW1lRm9ybWF0c1xufSBmcm9tICcuL2FkYXB0ZXIvZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XG5pbXBvcnQgeyBTZWxlY3RNb2RlIH0gZnJvbSAnLi9kYXRlLXRpbWUuY2xhc3MnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtY2FsZW5kYXInLFxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWVDYWxlbmRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtY2FsZW5kYXJdJzogJ293bERUQ2FsZW5kYXJDbGFzcydcbiAgICB9LFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE93bENhbGVuZGFyQ29tcG9uZW50PFQ+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCBhbmQgeWVhciB2aWV3XG4gICAgICogKi9cbiAgICBASW5wdXQoKVxuICAgIGRhdGVGaWx0ZXI6IEZ1bmN0aW9uO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZmlyc3REYXlPZldlZWsgPSAwO1xuXG4gICAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cbiAgICBwcml2YXRlIF9taW5EYXRlOiBUIHwgbnVsbDtcbiAgICBASW5wdXQoKVxuICAgIGdldCBtaW5EYXRlKCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XG4gICAgfVxuXG4gICAgc2V0IG1pbkRhdGUodmFsdWU6IFQgfCBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLl9taW5EYXRlID0gdmFsdWVcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gICAgcHJpdmF0ZSBfbWF4RGF0ZTogVCB8IG51bGw7XG4gICAgQElucHV0KClcbiAgICBnZXQgbWF4RGF0ZSgpOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xuICAgIH1cblxuICAgIHNldCBtYXhEYXRlKHZhbHVlOiBUIHwgbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldFZhbGlkRGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5fbWF4RGF0ZSA9IHZhbHVlXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNyZWF0ZURhdGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldERhdGUodmFsdWUpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKiogVGhlIGN1cnJlbnQgcGlja2VyIG1vbWVudCAqL1xuICAgIHByaXZhdGUgX3BpY2tlck1vbWVudDogVDtcbiAgICBASW5wdXQoKVxuICAgIGdldCBwaWNrZXJNb21lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waWNrZXJNb21lbnQ7XG4gICAgfVxuXG4gICAgc2V0IHBpY2tlck1vbWVudCh2YWx1ZTogVCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fcGlja2VyTW9tZW50ID1cbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWREYXRlKHZhbHVlKSB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNlbGVjdE1vZGU6IFNlbGVjdE1vZGU7XG5cbiAgICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtb21lbnQuICovXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFQgfCBudWxsO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHNlbGVjdGVkKCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cblxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogVCB8IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5nZXRWYWxpZERhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdGVkczogVFtdID0gW107XG4gICAgQElucHV0KClcbiAgICBnZXQgc2VsZWN0ZWRzKCk6IFRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZHM7XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGVkcyh2YWx1ZXM6IFRbXSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZHMgPSB2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgICAgICAgdiA9IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRlc2VyaWFsaXplKHYpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWREYXRlKHYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzdGFydFZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcnMnID0gJ21vbnRoJztcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gaGlkZSBkYXRlcyBpbiBvdGhlciBtb250aHMgYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKiAqL1xuICAgIEBJbnB1dCgpXG4gICAgaGlkZU90aGVyTW9udGhzOiBib29sZWFuO1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBwaWNrZXIgbW9tZW50IGNoYW5nZXMuICovXG4gICAgQE91dHB1dCgpXG4gICAgcGlja2VyTW9tZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXG4gICAgQE91dHB1dCgpXG4gICAgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAvKiogRW1pdHMgd2hlbiBhbnkgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cbiAgICBAT3V0cHV0KClcbiAgICB1c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIHNlbGVjdGVkIHllYXIuIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZVxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgeWVhclNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIHNlbGVjdGVkIG1vbnRoLiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGVcbiAgICAgKiAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHJlYWRvbmx5IG1vbnRoU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICBnZXQgcGVyaW9kQnV0dG9uVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pc01vbnRoVmlld1xuICAgICAgICAgICAgPyB0aGlzLmRhdGVUaW1lQWRhcHRlci5mb3JtYXQoXG4gICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXRzLm1vbnRoWWVhckxhYmVsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5waWNrZXJNb21lbnQpO1xuICAgIH1cblxuICAgIGdldCBwZXJpb2RCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pc01vbnRoVmlld1xuICAgICAgICAgICAgPyB0aGlzLnBpY2tlckludGwuc3dpdGNoVG9NdWx0aVllYXJWaWV3TGFiZWxcbiAgICAgICAgICAgIDogdGhpcy5waWNrZXJJbnRsLnN3aXRjaFRvTW9udGhWaWV3TGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0IHByZXZCdXR0b25MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICdtb250aCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwucHJldk1vbnRoTGFiZWw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5wcmV2WWVhckxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbmV4dEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGlja2VySW50bC5uZXh0TW9udGhMYWJlbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLm5leHRZZWFyTGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2N1cnJlbnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXJzJztcbiAgICBnZXQgY3VycmVudFZpZXcoKTogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycycge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXc7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRWaWV3KHZpZXc6ICdtb250aCcgfCAneWVhcicgfCAnbXVsdGkteWVhcnMnKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5tb3ZlRm9jdXNPbk5leHRUaWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNJblNpbmdsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdE1vZGUgPT09ICdzaW5nbGUnO1xuICAgIH1cblxuICAgIGdldCBpc0luUmFuZ2VNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2UnIHx8XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nIHx8XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBzaG93Q29udHJvbEFycm93cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ICE9PSAnbXVsdGkteWVhcnMnO1xuICAgIH1cblxuICAgIGdldCBpc01vbnRoVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSAnbW9udGgnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggYW5kIHllYXIgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBkYXRlRmlsdGVyRm9yVmlld3MgPSAoZGF0ZTogVCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISFkYXRlICYmXG4gICAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpICYmXG4gICAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxuICAgICAgICAgICAgKCF0aGlzLm1heERhdGUgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQmluZCBjbGFzcyAnb3dsLWR0LWNhbGVuZGFyJyB0byBob3N0XG4gICAgICogKi9cbiAgICBnZXQgb3dsRFRDYWxlbmRhckNsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGludGxDaGFuZ2VzU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Igc2NoZWR1bGluZyB0aGF0IGZvY3VzIHNob3VsZCBiZSBtb3ZlZCB0byB0aGUgYWN0aXZlIGNlbGwgb24gdGhlIG5leHQgdGljay5cbiAgICAgKiBXZSBuZWVkIHRvIHNjaGVkdWxlIGl0LCByYXRoZXIgdGhhbiBkbyBpdCBpbW1lZGlhdGVseSwgYmVjYXVzZSB3ZSBoYXZlIHRvIHdhaXRcbiAgICAgKiBmb3IgQW5ndWxhciB0byByZS1ldmFsdWF0ZSB0aGUgdmlldyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIG1vdmVGb2N1c09uTmV4dFRpY2sgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBwaWNrZXJJbnRsOiBPd2xEYXRlVGltZUludGwsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+LFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KE9XTF9EQVRFX1RJTUVfRk9STUFUUylcbiAgICAgICAgcHJpdmF0ZSBkYXRlVGltZUZvcm1hdHM6IE93bERhdGVUaW1lRm9ybWF0c1xuICAgICkge1xuICAgICAgICB0aGlzLmludGxDaGFuZ2VzU3ViID0gdGhpcy5waWNrZXJJbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHRoaXMuc3RhcnRWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVGb2N1c09uTmV4dFRpY2spIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzT25OZXh0VGljayA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0FjdGl2ZUNlbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRsQ2hhbmdlc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIG1vbnRoIHZpZXcgYW5kIHllYXIgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVWaWV3cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VmlldyA9PSAnbW9udGgnID8gJ211bHRpLXllYXJzJyA6ICdtb250aCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB1c2VyIGNsaWNrcyBvbiB0aGUgcHJldmlvdXMgYnV0dG9uLlxuICAgICAqICovXG4gICAgcHVibGljIHByZXZpb3VzQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSB0aGlzLmlzTW9udGhWaWV3XG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMucGlja2VyTW9tZW50LCAtMSlcbiAgICAgICAgICAgIDogdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLnBpY2tlck1vbWVudCwgLTEpO1xuXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQodGhpcy5waWNrZXJNb21lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLlxuICAgICAqICovXG4gICAgcHVibGljIG5leHRDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHRoaXMuaXNNb250aFZpZXdcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5waWNrZXJNb21lbnQsIDEpXG4gICAgICAgICAgICA6IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5waWNrZXJNb21lbnQsIDEpO1xuXG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQodGhpcy5waWNrZXJNb21lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkYXRlU2VsZWN0ZWQoZGF0ZTogVCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGF0ZUZpbHRlckZvclZpZXdzKGRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XG5cbiAgICAgICAgLyppZiAoKHRoaXMuaXNJblNpbmdsZU1vZGUgJiYgIXRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzU2FtZURheShkYXRlLCB0aGlzLnNlbGVjdGVkKSkgfHxcbiAgICAgICAgICAgIHRoaXMuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGRhdGUpO1xuICAgICAgICB9Ki9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHBpY2tlck1vbWVudCB2YWx1ZSBhbmQgc3dpdGNoIHRvIGEgc3BlY2lmaWMgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBnb1RvRGF0ZUluVmlldyhcbiAgICAgICAgZGF0ZTogVCxcbiAgICAgICAgdmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFycydcbiAgICApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYW5kbGVQaWNrZXJNb21lbnRDaGFuZ2UoZGF0ZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB2aWV3O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBwaWNrZXJNb21lbnQgdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlUGlja2VyTW9tZW50Q2hhbmdlKGRhdGU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbGFtcERhdGUoXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgdGhpcy5taW5EYXRlLFxuICAgICAgICAgICAgdGhpcy5tYXhEYXRlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50Q2hhbmdlLmVtaXQodGhpcy5waWNrZXJNb21lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXJTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyU2VsZWN0aW9uLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBwcmV2aW91cyBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHByZXZCdXR0b25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMubWluRGF0ZSB8fCAhdGhpcy5pc1NhbWVWaWV3KHRoaXMucGlja2VyTW9tZW50LCB0aGlzLm1pbkRhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIG5leHRCdXR0b25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMubWF4RGF0ZSB8fCAhdGhpcy5pc1NhbWVWaWV3KHRoaXMucGlja2VyTW9tZW50LCB0aGlzLm1heERhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgdG8gdGhlIGhvc3QgZWxlbWVudFxuICAgICAqICovXG4gICAgcHVibGljIGZvY3VzQWN0aXZlQ2VsbCgpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcbiAgICAgICAgICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm93bC1kdC1jYWxlbmRhci1jZWxsLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFllYXJJbk11bHRpWWVhclZpZXcobm9ybWFsaXplZFllYXI6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdE1vbnRoSW5ZZWFyVmlldyhub3JtYWxpemVkTW9udGg6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb250aFNlbGVjdGVkLmVtaXQobm9ybWFsaXplZE1vbnRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgcmVwcmVzZW50IHRoZSBzYW1lIHZpZXcgaW4gdGhlIGN1cnJlbnQgdmlldyBtb2RlIChtb250aCBvciB5ZWFyKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzU2FtZVZpZXcoZGF0ZTE6IFQsIGRhdGUyOiBUKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAgIGRhdGUxICYmXG4gICAgICAgICAgICAgICAgZGF0ZTIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0WWVhcihkYXRlMikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRNb250aChkYXRlMSkgPT09XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKGRhdGUyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICAgZGF0ZTEgJiZcbiAgICAgICAgICAgICAgICBkYXRlMiAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZTEpID09PVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKGRhdGUyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHZhbGlkIGRhdGUgb2JqZWN0XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRWYWxpZERhdGUob2JqOiBhbnkpOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc0RhdGVJbnN0YW5jZShvYmopICYmXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5pc1ZhbGlkKG9iailcbiAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxufVxuIl19