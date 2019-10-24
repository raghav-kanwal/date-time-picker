/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-picker-container.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Optional, ViewChild } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlCalendarComponent } from './calendar.component';
import { OwlTimerComponent } from './timer.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { Subject } from 'rxjs';
import { owlDateTimePickerAnimations } from './date-time-picker.animations';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
/**
 * @template T
 */
export class OwlDateTimeContainerComponent {
    /**
     * @param {?} cdRef
     * @param {?} elmRef
     * @param {?} pickerIntl
     * @param {?} dateTimeAdapter
     */
    constructor(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
        this.cdRef = cdRef;
        this.elmRef = elmRef;
        this.pickerIntl = pickerIntl;
        this.dateTimeAdapter = dateTimeAdapter;
        this.activeSelectedIndex = 0; // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')
        // The current active SelectedIndex in range select mode (0: 'from', 1: 'to')
        /**
         * Stream emits when try to hide picker
         *
         */
        this.hidePicker$ = new Subject();
        /**
         * Stream emits when try to confirm the selected value
         *
         */
        this.confirmSelected$ = new Subject();
        this.pickerOpened$ = new Subject();
    }
    /**
     * @return {?}
     */
    get hidePickerStream() {
        return this.hidePicker$.asObservable();
    }
    /**
     * @return {?}
     */
    get confirmSelectedStream() {
        return this.confirmSelected$.asObservable();
    }
    /**
     * @return {?}
     */
    get pickerOpenedStream() {
        return this.pickerOpened$.asObservable();
    }
    /**
     * @return {?}
     */
    get pickerMoment() {
        return this._clamPickerMoment;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pickerMoment(value) {
        if (value) {
            this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
        }
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get pickerType() {
        return this.picker.pickerType;
    }
    /**
     * @return {?}
     */
    get cancelLabel() {
        return this.pickerIntl.cancelBtnLabel;
    }
    /**
     * @return {?}
     */
    get setLabel() {
        return this.pickerIntl.setBtnLabel;
    }
    /**
     * The range 'from' label
     *
     * @return {?}
     */
    get fromLabel() {
        return this.pickerIntl.rangeFromLabel;
    }
    /**
     * The range 'to' label
     *
     * @return {?}
     */
    get toLabel() {
        return this.pickerIntl.rangeToLabel;
    }
    /**
     * The range 'from' formatted value
     *
     * @return {?}
     */
    get fromFormattedValue() {
        /** @type {?} */
        const value = this.picker.selecteds[0];
        return value
            ? this.dateTimeAdapter.format(value, this.picker.formatString)
            : '';
    }
    /**
     * The range 'to' formatted value
     *
     * @return {?}
     */
    get toFormattedValue() {
        /** @type {?} */
        const value = this.picker.selecteds[1];
        return value
            ? this.dateTimeAdapter.format(value, this.picker.formatString)
            : '';
    }
    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     *
     * @return {?}
     */
    get showControlButtons() {
        return (this.picker.pickerMode === 'dialog' ||
            (this.picker.pickerType !== 'calendar' &&
                this.picker.pickerMode !== 'inline'));
    }
    /**
     * @return {?}
     */
    get containerElm() {
        return this.elmRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get owlDTContainerClass() {
        return true;
    }
    /**
     * @return {?}
     */
    get owlDTPopupContainerClass() {
        return this.picker.pickerMode === 'popup';
    }
    /**
     * @return {?}
     */
    get owlDTDialogContainerClass() {
        return this.picker.pickerMode === 'dialog';
    }
    /**
     * @return {?}
     */
    get owlDTInlineContainerClass() {
        return this.picker.pickerMode === 'inline';
    }
    /**
     * @return {?}
     */
    get owlDTContainerDisabledClass() {
        return this.picker.disabled;
    }
    /**
     * @return {?}
     */
    get owlDTContainerId() {
        return this.picker.id;
    }
    /**
     * @return {?}
     */
    get owlDTContainerAnimation() {
        return this.picker.pickerMode === 'inline' ? '' : 'enter';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.initPicker();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusPicker();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleContainerAnimationDone(event) {
        /** @type {?} */
        const toState = event.toState;
        if (toState === 'enter') {
            this.pickerOpened$.next();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateSelected(date) {
        /** @type {?} */
        let result;
        if (this.picker.isInSingleMode) {
            result = this.dateSelectedInSingleMode(date);
            if (result) {
                this.pickerMoment = result;
                this.picker.select(result);
            }
            else {
                // we close the picker when result is null and pickerType is calendar.
                if (this.pickerType === 'calendar') {
                    this.hidePicker$.next(null);
                }
            }
            return;
        }
        if (this.picker.isInRangeMode) {
            result = this.dateSelectedInRangeMode(date);
            if (result) {
                this.pickerMoment = result[this.activeSelectedIndex];
                this.picker.select(result);
            }
        }
    }
    /**
     * @param {?} time
     * @return {?}
     */
    timeSelected(time) {
        this.pickerMoment = this.dateTimeAdapter.clone(time);
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            return;
        }
        if (this.picker.isInSingleMode) {
            this.picker.select(this.pickerMoment);
            return;
        }
        if (this.picker.isInRangeMode) {
            /** @type {?} */
            const selecteds = [...this.picker.selecteds];
            // check if the 'from' is after 'to' or 'to'is before 'from'
            // In this case, we set both the 'from' and 'to' the same value
            if ((this.activeSelectedIndex === 0 &&
                selecteds[1] &&
                this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1) ||
                (this.activeSelectedIndex === 1 &&
                    selecteds[0] &&
                    this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1)) {
                selecteds[0] = this.pickerMoment;
                selecteds[1] = this.pickerMoment;
            }
            else {
                selecteds[this.activeSelectedIndex] = this.pickerMoment;
            }
            this.picker.select(selecteds);
        }
    }
    /**
     * Handle click on cancel button
     * @param {?} event
     * @return {?}
     */
    onCancelClicked(event) {
        this.hidePicker$.next(null);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on set button
     * @param {?} event
     * @return {?}
     */
    onSetClicked(event) {
        if (!this.picker.dateTimeChecker(this.pickerMoment)) {
            this.hidePicker$.next(null);
            event.preventDefault();
            return;
        }
        this.confirmSelected$.next(event);
        event.preventDefault();
        return;
    }
    /**
     * Handle click on inform radio group
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    handleClickOnInfoGroup(event, index) {
        this.setActiveSelectedIndex(index);
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Handle click on inform radio group
     * @param {?} event
     * @param {?} next
     * @param {?} index
     * @return {?}
     */
    handleKeydownOnInfoGroup(event, next, index) {
        switch (event.keyCode) {
            case DOWN_ARROW:
            case RIGHT_ARROW:
            case UP_ARROW:
            case LEFT_ARROW:
                next.focus();
                this.setActiveSelectedIndex(index === 0 ? 1 : 0);
                event.preventDefault();
                event.stopPropagation();
                break;
            case SPACE:
                this.setActiveSelectedIndex(index);
                event.preventDefault();
                event.stopPropagation();
                break;
            default:
                return;
        }
    }
    /**
     * Set the value of activeSelectedIndex
     * @private
     * @param {?} index
     * @return {?}
     */
    setActiveSelectedIndex(index) {
        if (this.picker.selectMode === 'range' &&
            this.activeSelectedIndex !== index) {
            this.activeSelectedIndex = index;
            /** @type {?} */
            const selected = this.picker.selecteds[this.activeSelectedIndex];
            if (this.picker.selecteds && selected) {
                this.pickerMoment = this.dateTimeAdapter.clone(selected);
            }
        }
        return;
    }
    /**
     * @private
     * @return {?}
     */
    initPicker() {
        this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
        this.activeSelectedIndex = this.picker.selectMode === 'rangeTo' ? 1 : 0;
    }
    /**
     * Select calendar date in single mode,
     * it returns null when date is not selected.
     * @private
     * @param {?} date
     * @return {?}
     */
    dateSelectedInSingleMode(date) {
        if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
            return null;
        }
        return this.updateAndCheckCalendarDate(date);
    }
    /**
     * Select dates in range Mode
     * @private
     * @param {?} date
     * @return {?}
     */
    dateSelectedInRangeMode(date) {
        /** @type {?} */
        let from = this.picker.selecteds[0];
        /** @type {?} */
        let to = this.picker.selecteds[1];
        /** @type {?} */
        const result = this.updateAndCheckCalendarDate(date);
        if (!result) {
            return null;
        }
        // if the given calendar day is after or equal to 'from',
        // set ths given date as 'to'
        // otherwise, set it as 'from' and set 'to' to null
        if (this.picker.selectMode === 'range') {
            if (this.picker.selecteds &&
                this.picker.selecteds.length &&
                !to &&
                from &&
                this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
                to = result;
                this.activeSelectedIndex = 1;
            }
            else {
                from = result;
                to = null;
                this.activeSelectedIndex = 0;
            }
        }
        else if (this.picker.selectMode === 'rangeFrom') {
            from = result;
            // if the from value is after the to value, set the to value as null
            if (to && this.dateTimeAdapter.compare(from, to) > 0) {
                to = null;
            }
        }
        else if (this.picker.selectMode === 'rangeTo') {
            to = result;
            // if the from value is after the to value, set the from value as null
            if (from && this.dateTimeAdapter.compare(from, to) > 0) {
                from = null;
            }
        }
        return [from, to];
    }
    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return null
     * @private
     * @param {?} date
     * @return {?}
     */
    updateAndCheckCalendarDate(date) {
        /** @type {?} */
        let result;
        // if the picker is 'both', update the calendar date's time value
        if (this.picker.pickerType === 'both') {
            result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
            result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
        }
        else {
            result = this.dateTimeAdapter.clone(date);
        }
        // check the updated dateTime
        return this.picker.dateTimeChecker(result) ? result : null;
    }
    /**
     * Focus to the picker
     *
     * @private
     * @return {?}
     */
    focusPicker() {
        if (this.picker.pickerMode === 'inline') {
            return;
        }
        if (this.calendar) {
            this.calendar.focusActiveCell();
        }
        else if (this.timer) {
            this.timer.focus();
        }
    }
}
OwlDateTimeContainerComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'owlDateTimeContainer',
                selector: 'owl-date-time-container',
                template: "<div [cdkTrapFocus]=\"picker.pickerMode !== 'inline'\"\n     [@fadeInPicker]=\"picker.pickerMode === 'inline'? '' : 'enter'\"\n     class=\"owl-dt-container-inner\">\n\n    <owl-date-time-calendar\n            *ngIf=\"pickerType === 'both' || pickerType === 'calendar'\"\n            class=\"owl-dt-container-row\"\n            [firstDayOfWeek]=\"picker.firstDayOfWeek\"\n            [(pickerMoment)]=\"pickerMoment\"\n            [selected]=\"picker.selected\"\n            [selecteds]=\"picker.selecteds\"\n            [selectMode]=\"picker.selectMode\"\n            [minDate]=\"picker.minDateTime\"\n            [maxDate]=\"picker.maxDateTime\"\n            [dateFilter]=\"picker.dateTimeFilter\"\n            [startView]=\"picker.startView\"\n            [hideOtherMonths]=\"picker.hideOtherMonths\"\n            (yearSelected)=\"picker.selectYear($event)\"\n            (monthSelected)=\"picker.selectMonth($event)\"\n            (selectedChange)=\"dateSelected($event)\"></owl-date-time-calendar>\n\n    <owl-date-time-timer\n            *ngIf=\"pickerType === 'both' || pickerType === 'timer'\"\n            class=\"owl-dt-container-row\"\n            [pickerMoment]=\"pickerMoment\"\n            [minDateTime]=\"picker.minDateTime\"\n            [maxDateTime]=\"picker.maxDateTime\"\n            [showSecondsTimer]=\"picker.showSecondsTimer\"\n            [hour12Timer]=\"picker.hour12Timer\"\n            [stepHour]=\"picker.stepHour\"\n            [stepMinute]=\"picker.stepMinute\"\n            [stepSecond]=\"picker.stepSecond\"\n            (selectedChange)=\"timeSelected($event)\"></owl-date-time-timer>\n\n    <div *ngIf=\"picker.isInRangeMode\"\n         role=\"radiogroup\"\n         class=\"owl-dt-container-info owl-dt-container-row\">\n        <div role=\"radio\" [tabindex]=\"activeSelectedIndex === 0 ? 0 : -1\"\n             [attr.aria-checked]=\"activeSelectedIndex === 0\"\n             class=\"owl-dt-control owl-dt-container-range owl-dt-container-from\"\n             [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 0}\"\n             (click)=\"handleClickOnInfoGroup($event, 0)\"\n             (keydown)=\"handleKeydownOnInfoGroup($event, to, 0)\" #from>\n            <span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\">\n                <span class=\"owl-dt-container-info-label\">{{fromLabel}}:</span>\n                <span class=\"owl-dt-container-info-value\">{{fromFormattedValue}}</span>\n            </span>\n        </div>\n        <div role=\"radio\" [tabindex]=\"activeSelectedIndex === 1 ? 0 : -1\"\n             [attr.aria-checked]=\"activeSelectedIndex === 1\"\n             class=\"owl-dt-control owl-dt-container-range owl-dt-container-to\"\n             [ngClass]=\"{'owl-dt-container-info-active': activeSelectedIndex === 1}\"\n             (click)=\"handleClickOnInfoGroup($event, 1)\"\n             (keydown)=\"handleKeydownOnInfoGroup($event, from, 1)\" #to>\n            <span class=\"owl-dt-control-content owl-dt-container-range-content\" tabindex=\"-1\">\n                <span class=\"owl-dt-container-info-label\">{{toLabel}}:</span>\n                <span class=\"owl-dt-container-info-value\">{{toFormattedValue}}</span>\n            </span>\n        </div>\n    </div>\n\n    <div *ngIf=\"showControlButtons\" class=\"owl-dt-container-buttons owl-dt-container-row\">\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\"\n                type=\"button\" tabindex=\"0\"\n                (click)=\"onCancelClicked($event)\">\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\n                {{cancelLabel}}\n            </span>\n        </button>\n        <button class=\"owl-dt-control owl-dt-control-button owl-dt-container-control-button\"\n                type=\"button\" tabindex=\"0\"\n                (click)=\"onSetClicked($event)\">\n            <span class=\"owl-dt-control-content owl-dt-control-button-content\" tabindex=\"-1\">\n                {{setLabel}}\n            </span>\n        </button>\n    </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [
                    owlDateTimePickerAnimations.transformPicker,
                    owlDateTimePickerAnimations.fadeInPicker
                ],
                host: {
                    '(@transformPicker.done)': 'handleContainerAnimationDone($event)',
                    '[class.owl-dt-container]': 'owlDTContainerClass',
                    '[class.owl-dt-popup-container]': 'owlDTPopupContainerClass',
                    '[class.owl-dt-dialog-container]': 'owlDTDialogContainerClass',
                    '[class.owl-dt-inline-container]': 'owlDTInlineContainerClass',
                    '[class.owl-dt-container-disabled]': 'owlDTContainerDisabledClass',
                    '[attr.id]': 'owlDTContainerId',
                    '[@transformPicker]': 'owlDTContainerAnimation',
                },
                styles: [""]
            }] }
];
/** @nocollapse */
OwlDateTimeContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: OwlDateTimeIntl },
    { type: DateTimeAdapter, decorators: [{ type: Optional }] }
];
OwlDateTimeContainerComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: [OwlCalendarComponent, { static: false },] }],
    timer: [{ type: ViewChild, args: [OwlTimerComponent, { static: false },] }]
};
if (false) {
    /** @type {?} */
    OwlDateTimeContainerComponent.prototype.calendar;
    /** @type {?} */
    OwlDateTimeContainerComponent.prototype.timer;
    /** @type {?} */
    OwlDateTimeContainerComponent.prototype.picker;
    /** @type {?} */
    OwlDateTimeContainerComponent.prototype.activeSelectedIndex;
    /**
     * Stream emits when try to hide picker
     *
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.hidePicker$;
    /**
     * Stream emits when try to confirm the selected value
     *
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.confirmSelected$;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.pickerOpened$;
    /**
     * The current picker moment. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype._clamPickerMoment;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.elmRef;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.pickerIntl;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeContainerComponent.prototype.dateTimeAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBR0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFFBQVEsRUFDUixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFDSCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNYLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUF3Qi9CLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7SUFrSnRDLFlBQXFCLEtBQXdCLEVBQ3ZCLE1BQWtCLEVBQ2xCLFVBQTJCLEVBQ2hCLGVBQW1DO1FBSC9DLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBN0k3RCx3QkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7Ozs7OztRQUtyRyxnQkFBVyxHQUFHLElB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QywwREFBNkI7Ozs7O0lBNEdoQiw4Q0FBZ0M7Ozs7O0lBQy9CLCtDQUEwQjs7Ozs7SUFDMUIsbURBQW1DOzs7OztJQUNwQyx3REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudFxuICovXG5cbmltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XG5pbXBvcnQgeyBPd2xDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE93bFRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcbmltcG9ydCB7IE93bERhdGVUaW1lLCBQaWNrZXJUeXBlIH0gZnJvbSAnLi9kYXRlLXRpbWUuY2xhc3MnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLmFuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgICBET1dOX0FSUk9XLFxuICAgIExFRlRfQVJST1csXG4gICAgUklHSFRfQVJST1csXG4gICAgU1BBQ0UsXG4gICAgVVBfQVJST1dcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgZXhwb3J0QXM6ICdvd2xEYXRlVGltZUNvbnRhaW5lcicsXG4gICAgc2VsZWN0b3I6ICdvd2wtZGF0ZS10aW1lLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUtcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zLnRyYW5zZm9ybVBpY2tlcixcbiAgICAgICAgb3dsRGF0ZVRpbWVQaWNrZXJBbmltYXRpb25zLmZhZGVJblBpY2tlclxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnKEB0cmFuc2Zvcm1QaWNrZXIuZG9uZSknOiAnaGFuZGxlQ29udGFpbmVyQW5pbWF0aW9uRG9uZSgkZXZlbnQpJyxcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtY29udGFpbmVyXSc6ICdvd2xEVENvbnRhaW5lckNsYXNzJyxcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtcG9wdXAtY29udGFpbmVyXSc6ICdvd2xEVFBvcHVwQ29udGFpbmVyQ2xhc3MnLFxuICAgICAgICAnW2NsYXNzLm93bC1kdC1kaWFsb2ctY29udGFpbmVyXSc6ICdvd2xEVERpYWxvZ0NvbnRhaW5lckNsYXNzJyxcbiAgICAgICAgJ1tjbGFzcy5vd2wtZHQtaW5saW5lLWNvbnRhaW5lcl0nOiAnb3dsRFRJbmxpbmVDb250YWluZXJDbGFzcycsXG4gICAgICAgICdbY2xhc3Mub3dsLWR0LWNvbnRhaW5lci1kaXNhYmxlZF0nOiAnb3dsRFRDb250YWluZXJEaXNhYmxlZENsYXNzJyxcbiAgICAgICAgJ1thdHRyLmlkXSc6ICdvd2xEVENvbnRhaW5lcklkJyxcbiAgICAgICAgJ1tAdHJhbnNmb3JtUGlja2VyXSc6ICdvd2xEVENvbnRhaW5lckFuaW1hdGlvbicsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudDxUPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKE93bENhbGVuZGFyQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBjYWxlbmRhcjogT3dsQ2FsZW5kYXJDb21wb25lbnQ8VD47XG4gICAgQFZpZXdDaGlsZChPd2xUaW1lckNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgdGltZXI6IE93bFRpbWVyQ29tcG9uZW50PFQ+O1xuXG4gICAgcHVibGljIHBpY2tlcjogT3dsRGF0ZVRpbWU8VD47XG4gICAgcHVibGljIGFjdGl2ZVNlbGVjdGVkSW5kZXggPSAwOyAvLyBUaGUgY3VycmVudCBhY3RpdmUgU2VsZWN0ZWRJbmRleCBpbiByYW5nZSBzZWxlY3QgbW9kZSAoMDogJ2Zyb20nLCAxOiAndG8nKVxuXG4gICAgLyoqXG4gICAgICogU3RyZWFtIGVtaXRzIHdoZW4gdHJ5IHRvIGhpZGUgcGlja2VyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGhpZGVQaWNrZXIkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgZ2V0IGhpZGVQaWNrZXJTdHJlYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZVBpY2tlciQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RyZWFtIGVtaXRzIHdoZW4gdHJ5IHRvIGNvbmZpcm0gdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNvbmZpcm1TZWxlY3RlZCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBnZXQgY29uZmlybVNlbGVjdGVkU3RyZWFtKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpcm1TZWxlY3RlZCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwaWNrZXJPcGVuZWQkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgZ2V0IHBpY2tlck9wZW5lZFN0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJPcGVuZWQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBpY2tlciBtb21lbnQuIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0aW1lIHBlcmlvZCBpcyBzaG93biBhbmQgd2hpY2ggZGF0ZSBpc1xuICAgICAqIGhpZ2hsaWdodGVkIHdoZW4gdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jbGFtUGlja2VyTW9tZW50OiBUO1xuXG4gICAgZ2V0IHBpY2tlck1vbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYW1QaWNrZXJNb21lbnQ7XG4gICAgfVxuXG4gICAgc2V0IHBpY2tlck1vbWVudCh2YWx1ZTogVCkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYW1QaWNrZXJNb21lbnQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbGFtcERhdGUoXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIubWluRGF0ZVRpbWUsXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIubWF4RGF0ZVRpbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBnZXQgcGlja2VyVHlwZSgpOiBQaWNrZXJUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlclR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGNhbmNlbExhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuY2FuY2VsQnRuTGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0IHNldExhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlckludGwuc2V0QnRuTGFiZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHJhbmdlICdmcm9tJyBsYWJlbFxuICAgICAqICovXG4gICAgZ2V0IGZyb21MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnJhbmdlRnJvbUxhYmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSByYW5nZSAndG8nIGxhYmVsXG4gICAgICogKi9cbiAgICBnZXQgdG9MYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXJJbnRsLnJhbmdlVG9MYWJlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmFuZ2UgJ2Zyb20nIGZvcm1hdHRlZCB2YWx1ZVxuICAgICAqICovXG4gICAgZ2V0IGZyb21Gb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1swXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICA/IHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5waWNrZXIuZm9ybWF0U3RyaW5nKVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmFuZ2UgJ3RvJyBmb3JtYXR0ZWQgdmFsdWVcbiAgICAgKiAqL1xuICAgIGdldCB0b0Zvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5waWNrZXIuc2VsZWN0ZWRzWzFdO1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgID8gdGhpcy5kYXRlVGltZUFkYXB0ZXIuZm9ybWF0KHZhbHVlLCB0aGlzLnBpY2tlci5mb3JtYXRTdHJpbmcpXG4gICAgICAgICAgICA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc2VzIGluIHdoaWNoIHRoZSBjb250cm9sIGJ1dHRvbnMgc2hvdyBpbiB0aGUgcGlja2VyXG4gICAgICogMSkgcGlja2VyIG1vZGUgaXMgJ2RpYWxvZydcbiAgICAgKiAyKSBwaWNrZXIgdHlwZSBpcyBOT1QgJ2NhbGVuZGFyJyBhbmQgdGhlIHBpY2tlciBtb2RlIGlzIE5PVCAnaW5saW5lJ1xuICAgICAqICovXG4gICAgZ2V0IHNob3dDb250cm9sQnV0dG9ucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdkaWFsb2cnIHx8XG4gICAgICAgICAgICAodGhpcy5waWNrZXIucGlja2VyVHlwZSAhPT0gJ2NhbGVuZGFyJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLnBpY2tlck1vZGUgIT09ICdpbmxpbmUnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBjb250YWluZXJFbG0oKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgb3dsRFRDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUUG9wdXBDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdwb3B1cCc7XG4gICAgfVxuXG4gICAgZ2V0IG93bERURGlhbG9nQ29udGFpbmVyQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5waWNrZXJNb2RlID09PSAnZGlhbG9nJztcbiAgICB9XG5cbiAgICBnZXQgb3dsRFRJbmxpbmVDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyLnBpY2tlck1vZGUgPT09ICdpbmxpbmUnO1xuICAgIH1cblxuICAgIGdldCBvd2xEVENvbnRhaW5lckRpc2FibGVkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgb3dsRFRDb250YWluZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIuaWQ7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUQ29udGFpbmVyQW5pbWF0aW9uKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlci5waWNrZXJNb2RlID09PSAnaW5saW5lJyA/ICcnIDogJ2VudGVyJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgcGlja2VySW50bDogT3dsRGF0ZVRpbWVJbnRsLFxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+ICkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRQaWNrZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvY3VzUGlja2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZUNvbnRhaW5lckFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvU3RhdGUgPSBldmVudC50b1N0YXRlO1xuICAgICAgICBpZiAodG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJPcGVuZWQkLm5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkYXRlU2VsZWN0ZWQoZGF0ZTogVCk6IHZvaWQge1xuICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5pc0luU2luZ2xlTW9kZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlU2VsZWN0ZWRJblNpbmdsZU1vZGUoZGF0ZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJNb21lbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIGNsb3NlIHRoZSBwaWNrZXIgd2hlbiByZXN1bHQgaXMgbnVsbCBhbmQgcGlja2VyVHlwZSBpcyBjYWxlbmRhci5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waWNrZXJUeXBlID09PSAnY2FsZW5kYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlciQubmV4dChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlU2VsZWN0ZWRJblJhbmdlTW9kZShkYXRlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlck1vbWVudCA9IHJlc3VsdFt0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRpbWVTZWxlY3RlZCh0aW1lOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUodGltZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlci5kYXRlVGltZUNoZWNrZXIodGhpcy5waWNrZXJNb21lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdCh0aGlzLnBpY2tlck1vbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5waWNrZXIuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRzID0gWy4uLnRoaXMucGlja2VyLnNlbGVjdGVkc107XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSAnZnJvbScgaXMgYWZ0ZXIgJ3RvJyBvciAndG8naXMgYmVmb3JlICdmcm9tJ1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCB3ZSBzZXQgYm90aCB0aGUgJ2Zyb20nIGFuZCAndG8nIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZHNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzFdXG4gICAgICAgICAgICAgICAgICAgICkgPT09IDEpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9PT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZHNbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzBdXG4gICAgICAgICAgICAgICAgICAgICkgPT09IC0xKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzBdID0gdGhpcy5waWNrZXJNb21lbnQ7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRzWzFdID0gdGhpcy5waWNrZXJNb21lbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkc1t0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXhdID0gdGhpcy5waWNrZXJNb21lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNlbGVjdChzZWxlY3RlZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGNhbmNlbCBidXR0b25cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DYW5jZWxDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyJC5uZXh0KG51bGwpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIHNldCBidXR0b25cbiAgICAgKi9cbiAgICBwdWJsaWMgb25TZXRDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBpY2tlci5kYXRlVGltZUNoZWNrZXIodGhpcy5waWNrZXJNb21lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQaWNrZXIkLm5leHQobnVsbCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0ZWQkLm5leHQoZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGluZm9ybSByYWRpbyBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVDbGlja09uSW5mb0dyb3VwKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIG9uIGluZm9ybSByYWRpbyBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVLZXlkb3duT25JbmZvR3JvdXAoXG4gICAgICAgIGV2ZW50OiBhbnksXG4gICAgICAgIG5leHQ6IGFueSxcbiAgICAgICAgaW5kZXg6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICAgICAgICAgIG5leHQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNlbGVjdGVkSW5kZXgoaW5kZXggPT09IDAgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2YWx1ZSBvZiBhY3RpdmVTZWxlY3RlZEluZGV4XG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRBY3RpdmVTZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5waWNrZXIuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyAmJlxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ICE9PSBpbmRleFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1t0aGlzLmFjdGl2ZVNlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyLnNlbGVjdGVkcyAmJiBzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQaWNrZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGlja2VyTW9tZW50ID0gdGhpcy5waWNrZXIuc3RhcnRBdCB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcbiAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3RlZEluZGV4ID0gdGhpcy5waWNrZXIuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlVG8nID8gMSA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGNhbGVuZGFyIGRhdGUgaW4gc2luZ2xlIG1vZGUsXG4gICAgICogaXQgcmV0dXJucyBudWxsIHdoZW4gZGF0ZSBpcyBub3Qgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkYXRlU2VsZWN0ZWRJblNpbmdsZU1vZGUoZGF0ZTogVCk6IFQgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmlzU2FtZURheShkYXRlLCB0aGlzLnBpY2tlci5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQW5kQ2hlY2tDYWxlbmRhckRhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGRhdGVzIGluIHJhbmdlIE1vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGRhdGVTZWxlY3RlZEluUmFuZ2VNb2RlKGRhdGU6IFQpOiBUW10gfCBudWxsIHtcbiAgICAgICAgbGV0IGZyb20gPSB0aGlzLnBpY2tlci5zZWxlY3RlZHNbMF07XG4gICAgICAgIGxldCB0byA9IHRoaXMucGlja2VyLnNlbGVjdGVkc1sxXTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVwZGF0ZUFuZENoZWNrQ2FsZW5kYXJEYXRlKGRhdGUpO1xuXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZSBnaXZlbiBjYWxlbmRhciBkYXkgaXMgYWZ0ZXIgb3IgZXF1YWwgdG8gJ2Zyb20nLFxuICAgICAgICAvLyBzZXQgdGhzIGdpdmVuIGRhdGUgYXMgJ3RvJ1xuICAgICAgICAvLyBvdGhlcndpc2UsIHNldCBpdCBhcyAnZnJvbScgYW5kIHNldCAndG8nIHRvIG51bGxcbiAgICAgICAgaWYgKHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZScpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3RlZHMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5zZWxlY3RlZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIXRvICYmXG4gICAgICAgICAgICAgICAgZnJvbSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhyZXN1bHQsIGZyb20pID49IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRvID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyb20gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdG8gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5waWNrZXIuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbScpIHtcbiAgICAgICAgICAgIGZyb20gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmcm9tIHZhbHVlIGlzIGFmdGVyIHRoZSB0byB2YWx1ZSwgc2V0IHRoZSB0byB2YWx1ZSBhcyBudWxsXG4gICAgICAgICAgICBpZiAodG8gJiYgdGhpcy5kYXRlVGltZUFkYXB0ZXIuY29tcGFyZShmcm9tLCB0bykgPiAwKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGlja2VyLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJykge1xuICAgICAgICAgICAgdG8gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmcm9tIHZhbHVlIGlzIGFmdGVyIHRoZSB0byB2YWx1ZSwgc2V0IHRoZSBmcm9tIHZhbHVlIGFzIG51bGxcbiAgICAgICAgICAgIGlmIChmcm9tICYmIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmNvbXBhcmUoZnJvbSwgdG8pID4gMCkge1xuICAgICAgICAgICAgICAgIGZyb20gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtmcm9tLCB0b107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBnaXZlbiBjYWxlbmRhciBkYXRlJ3MgdGltZSBhbmQgY2hlY2sgaWYgaXQgaXMgdmFsaWRcbiAgICAgKiBCZWNhdXNlIHRoZSBjYWxlbmRhciBkYXRlIGhhcyAwMDowMDowMCBhcyBkZWZhdWx0IHRpbWUsIGlmIHRoZSBwaWNrZXIgdHlwZSBpcyAnYm90aCcsXG4gICAgICogd2UgbmVlZCB0byB1cGRhdGUgdGhlIGdpdmVuIGNhbGVuZGFyIGRhdGUncyB0aW1lIGJlZm9yZSBzZWxlY3RpbmcgaXQuXG4gICAgICogaWYgaXQgaXMgdmFsaWQsIHJldHVybiB0aGUgdXBkYXRlZCBkYXRlVGltZVxuICAgICAqIGlmIGl0IGlzIG5vdCB2YWxpZCwgcmV0dXJuIG51bGxcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUFuZENoZWNrQ2FsZW5kYXJEYXRlKGRhdGU6IFQpOiBUIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAvLyBpZiB0aGUgcGlja2VyIGlzICdib3RoJywgdXBkYXRlIHRoZSBjYWxlbmRhciBkYXRlJ3MgdGltZSB2YWx1ZVxuICAgICAgICBpZiAodGhpcy5waWNrZXIucGlja2VyVHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jcmVhdGVEYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldFllYXIoZGF0ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TW9udGgoZGF0ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRIb3Vycyh0aGlzLnBpY2tlck1vbWVudCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLnBpY2tlck1vbWVudCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0U2Vjb25kcyh0aGlzLnBpY2tlck1vbWVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRhdGVUaW1lQWRhcHRlci5jbGFtcERhdGUoXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLm1pbkRhdGVUaW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyLm1heERhdGVUaW1lXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY2xvbmUoZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayB0aGUgdXBkYXRlZCBkYXRlVGltZVxuICAgICAgICByZXR1cm4gdGhpcy5waWNrZXIuZGF0ZVRpbWVDaGVja2VyKHJlc3VsdCkgPyByZXN1bHQgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvY3VzIHRvIHRoZSBwaWNrZXJcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZm9jdXNQaWNrZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBpY2tlci5waWNrZXJNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuZm9jdXNBY3RpdmVDZWxsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgdGhpcy50aW1lci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19