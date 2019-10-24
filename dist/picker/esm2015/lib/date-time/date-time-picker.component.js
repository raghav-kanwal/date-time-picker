/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-picker.component
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, InjectionToken, Input, NgZone, Optional, Output, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { coerceArray, coerceBooleanProperty } from '@angular/cdk/coercion';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './adapter/date-time-format.class';
import { OwlDateTime } from './date-time.class';
import { OwlDialogService } from '../dialog/dialog.service';
import { merge, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
/**
 * Injection token that determines the scroll handling while the dtPicker is open.
 * @type {?}
 */
export const OWL_DTPICKER_SCROLL_STRATEGY = new InjectionToken('owl-dtpicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
    return fn;
}
/**
 * \@docs-private
 * @type {?}
 */
export const OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: OWL_DTPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * @template T
 */
export class OwlDateTimeComponent extends OwlDateTime {
    /**
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} dialogService
     * @param {?} ngZone
     * @param {?} changeDetector
     * @param {?} dateTimeAdapter
     * @param {?} defaultScrollStrategy
     * @param {?} dateTimeFormats
     * @param {?} document
     */
    constructor(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, defaultScrollStrategy, dateTimeFormats, document) {
        super(dateTimeAdapter, dateTimeFormats);
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        this.dateTimeAdapter = dateTimeAdapter;
        this.dateTimeFormats = dateTimeFormats;
        this.document = document;
        /**
         * Custom class for the picker backdrop.
         */
        this.backdropClass = [];
        /**
         * Custom class for the picker overlay pane.
         */
        this.panelClass = [];
        /**
         * Set the type of the dateTime picker
         *      'both' -- show both calendar and timer
         *      'calendar' -- show only calendar
         *      'timer' -- show only timer
         */
        this._pickerType = 'both';
        /**
         * Whether the picker open as a dialog
         */
        this._pickerMode = 'popup';
        /**
         * Whether the calendar is open.
         */
        this._opened = false;
        /**
         * Callback when the picker is closed
         *
         */
        this.afterPickerClosed = new EventEmitter();
        /**
         * Callback when the picker is open
         *
         */
        this.afterPickerOpen = new EventEmitter();
        /**
         * Emits selected year in multi-year view
         * This doesn't imply a change on the selected date.
         *
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view
         * This doesn't imply a change on the selected date.
         *
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emit when the selected value has been confirmed
         *
         */
        this.confirmSelectedChange = new EventEmitter();
        /**
         * Emits when the date time picker is disabled.
         *
         */
        this.disabledChange = new EventEmitter();
        this.dtInputSub = Subscription.EMPTY;
        this.hidePickerStreamSub = Subscription.EMPTY;
        this.confirmSelectedStreamSub = Subscription.EMPTY;
        this.pickerOpenedStreamSub = Subscription.EMPTY;
        /**
         * The element that was focused before the date time picker was opened.
         */
        this.focusedElementBeforeOpen = null;
        this._selecteds = [];
        this.defaultScrollStrategy = defaultScrollStrategy;
    }
    /**
     * @return {?}
     */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        if (this._startAt) {
            return this._startAt;
        }
        if (this._dtInput) {
            if (this._dtInput.selectMode === 'single') {
                return this._dtInput.value || null;
            }
            else if (this._dtInput.selectMode === 'range' ||
                this._dtInput.selectMode === 'rangeFrom') {
                return this._dtInput.values[0] || null;
            }
            else if (this._dtInput.selectMode === 'rangeTo') {
                return this._dtInput.values[1] || null;
            }
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    set startAt(date) {
        this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
    }
    /**
     * @return {?}
     */
    get pickerType() {
        return this._pickerType;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set pickerType(val) {
        if (val !== this._pickerType) {
            this._pickerType = val;
            if (this._dtInput) {
                this._dtInput.formatNativeInputValue();
            }
        }
    }
    /**
     * @return {?}
     */
    get pickerMode() {
        return this._pickerMode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set pickerMode(mode) {
        if (mode === 'popup') {
            this._pickerMode = mode;
        }
        else {
            this._pickerMode = 'dialog';
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined && this._dtInput
            ? this._dtInput.disabled
            : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        value = coerceBooleanProperty(value);
        if (value !== this._disabled) {
            this._disabled = value;
            this.disabledChange.next(value);
        }
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set opened(val) {
        val ? this.open() : this.close();
    }
    /**
     * @return {?}
     */
    get dtInput() {
        return this._dtInput;
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
        this._selected = value;
        this.changeDetector.markForCheck();
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
        this._selecteds = values;
        this.changeDetector.markForCheck();
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDateTime() {
        return this._dtInput && this._dtInput.min;
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDateTime() {
        return this._dtInput && this._dtInput.max;
    }
    /**
     * @return {?}
     */
    get dateTimeFilter() {
        return this._dtInput && this._dtInput.dateTimeFilter;
    }
    /**
     * @return {?}
     */
    get selectMode() {
        return this._dtInput.selectMode;
    }
    /**
     * @return {?}
     */
    get isInSingleMode() {
        return this._dtInput.isInSingleMode;
    }
    /**
     * @return {?}
     */
    get isInRangeMode() {
        return this._dtInput.isInRangeMode;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        this.dtInputSub.unsubscribe();
        this.disabledChange.complete();
        if (this.popupRef) {
            this.popupRef.dispose();
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    registerInput(input) {
        if (this._dtInput) {
            throw Error('A Owl DateTimePicker can only be associated with a single input.');
        }
        this._dtInput = input;
        this.dtInputSub = this._dtInput.valueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (Array.isArray(value)) {
                this.selecteds = value;
            }
            else {
                this.selected = value;
            }
        }));
    }
    /**
     * @return {?}
     */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._dtInput) {
            throw Error('Attempted to open an DateTimePicker with no associated input.');
        }
        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement;
        }
        // reset the picker selected value
        if (this.isInSingleMode) {
            this.selected = this._dtInput.value;
        }
        else if (this.isInRangeMode) {
            this.selecteds = this._dtInput.values;
        }
        // when the picker is open , we make sure the picker's current selected time value
        // is the same as the _startAt time value.
        if (this.selected && this.pickerType !== 'calendar' && this._startAt) {
            this.selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.selected), this.dateTimeAdapter.getMonth(this.selected), this.dateTimeAdapter.getDate(this.selected), this.dateTimeAdapter.getHours(this._startAt), this.dateTimeAdapter.getMinutes(this._startAt), this.dateTimeAdapter.getSeconds(this._startAt));
        }
        this.pickerMode === 'dialog' ? this.openAsDialog() : this.openAsPopup();
        this.pickerContainer.picker = this;
        // Listen to picker container's hidePickerStream
        this.hidePickerStreamSub = this.pickerContainer.hidePickerStream.subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
        // Listen to picker container's confirmSelectedStream
        this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.confirmSelect(event);
        }));
    }
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    select(date) {
        if (Array.isArray(date)) {
            this.selecteds = [...date];
        }
        else {
            this.selected = date;
        }
        /**
         * Cases in which automatically confirm the select when date or dates are selected:
         * 1) picker mode is NOT 'dialog'
         * 2) picker type is 'calendar' and selectMode is 'single'.
         * 3) picker type is 'calendar' and selectMode is 'range' and
         *    the 'selecteds' has 'from'(selecteds[0]) and 'to'(selecteds[1]) values.
         * 4) selectMode is 'rangeFrom' and selecteds[0] has value.
         * 5) selectMode is 'rangeTo' and selecteds[1] has value.
         * */
        if (this.pickerMode !== 'dialog' &&
            this.pickerType === 'calendar' &&
            ((this.selectMode === 'single' && this.selected) ||
                (this.selectMode === 'rangeFrom' && this.selecteds[0]) ||
                (this.selectMode === 'rangeTo' && this.selecteds[1]) ||
                (this.selectMode === 'range' &&
                    this.selecteds[0] &&
                    this.selecteds[1]))) {
            this.confirmSelect();
        }
    }
    /**
     * Emits the selected year in multi-year view
     *
     * @param {?} normalizedYear
     * @return {?}
     */
    selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     *
     * @param {?} normalizedMonth
     * @return {?}
     */
    selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Hide the picker
     * @return {?}
     */
    close() {
        if (!this._opened) {
            return;
        }
        if (this.popupRef && this.popupRef.hasAttached()) {
            this.popupRef.detach();
        }
        if (this.pickerContainerPortal &&
            this.pickerContainerPortal.isAttached) {
            this.pickerContainerPortal.detach();
        }
        if (this.hidePickerStreamSub) {
            this.hidePickerStreamSub.unsubscribe();
            this.hidePickerStreamSub = null;
        }
        if (this.confirmSelectedStreamSub) {
            this.confirmSelectedStreamSub.unsubscribe();
            this.confirmSelectedStreamSub = null;
        }
        if (this.pickerOpenedStreamSub) {
            this.pickerOpenedStreamSub.unsubscribe();
            this.pickerOpenedStreamSub = null;
        }
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
        /** @type {?} */
        const completeClose = (/**
         * @return {?}
         */
        () => {
            if (this._opened) {
                this._opened = false;
                this.afterPickerClosed.emit(null);
                this.focusedElementBeforeOpen = null;
            }
        });
        if (this.focusedElementBeforeOpen &&
            typeof this.focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this.focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /**
     * Confirm the selected value
     * @param {?=} event
     * @return {?}
     */
    confirmSelect(event) {
        if (this.isInSingleMode) {
            /** @type {?} */
            const selected = this.selected || this.startAt || this.dateTimeAdapter.now();
            this.confirmSelectedChange.emit(selected);
        }
        else if (this.isInRangeMode) {
            this.confirmSelectedChange.emit(this.selecteds);
        }
        this.close();
        return;
    }
    /**
     * Open the picker as a dialog
     * @private
     * @return {?}
     */
    openAsDialog() {
        this.dialogRef = this.dialogService.open(OwlDateTimeContainerComponent, {
            autoFocus: false,
            backdropClass: [
                'cdk-overlay-dark-backdrop',
                ...coerceArray(this.backdropClass)
            ],
            paneClass: ['owl-dt-dialog', ...coerceArray(this.panelClass)],
            viewContainerRef: this.viewContainerRef,
            scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy()
        });
        this.pickerContainer = this.dialogRef.componentInstance;
        this.dialogRef.afterOpen().subscribe((/**
         * @return {?}
         */
        () => {
            this.afterPickerOpen.emit(null);
            this._opened = true;
        }));
        this.dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this.close()));
    }
    /**
     * Open the picker as popup
     * @private
     * @return {?}
     */
    openAsPopup() {
        if (!this.pickerContainerPortal) {
            this.pickerContainerPortal = new ComponentPortal(OwlDateTimeContainerComponent, this.viewContainerRef);
        }
        if (!this.popupRef) {
            this.createPopup();
        }
        if (!this.popupRef.hasAttached()) {
            /** @type {?} */
            const componentRef = this.popupRef.attach(this.pickerContainerPortal);
            this.pickerContainer = componentRef.instance;
            // Update the position once the calendar has rendered.
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.popupRef.updatePosition();
            }));
            // emit open stream
            this.pickerOpenedStreamSub = this.pickerContainer.pickerOpenedStream
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.afterPickerOpen.emit(null);
                this._opened = true;
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    createPopup() {
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: [
                'cdk-overlay-transparent-backdrop',
                ...coerceArray(this.backdropClass)
            ],
            scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
            panelClass: ['owl-dt-popup', ...coerceArray(this.panelClass)]
        });
        this.popupRef = this.overlay.create(overlayConfig);
        merge(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef
            .keydownEvents()
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.keyCode === ESCAPE ||
            (this._dtInput &&
                event.altKey &&
                event.keyCode === UP_ARROW))))).subscribe((/**
         * @return {?}
         */
        () => this.close()));
    }
    /**
     * Create the popup PositionStrategy.
     *
     * @private
     * @return {?}
     */
    createPopupPositionStrategy() {
        return this.overlay
            .position()
            .flexibleConnectedTo(this._dtInput.elementRef)
            .withTransformOriginOn('.owl-dt-container')
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: -176
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: -352
            }
        ]);
    }
}
OwlDateTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'owl-date-time',
                exportAs: 'owlDateTime',
                template: "",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [""]
            }] }
];
/** @nocollapse */
OwlDateTimeComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ViewContainerRef },
    { type: OwlDialogService },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: DateTimeAdapter, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [OWL_DTPICKER_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [OWL_DATE_TIME_FORMATS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
OwlDateTimeComponent.propDecorators = {
    backdropClass: [{ type: Input }],
    panelClass: [{ type: Input }],
    startAt: [{ type: Input }],
    pickerType: [{ type: Input }],
    pickerMode: [{ type: Input }],
    disabled: [{ type: Input }],
    opened: [{ type: Input }],
    scrollStrategy: [{ type: Input }],
    afterPickerClosed: [{ type: Output }],
    afterPickerOpen: [{ type: Output }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }]
};
if (false) {
    /**
     * Custom class for the picker backdrop.
     * @type {?}
     */
    OwlDateTimeComponent.prototype.backdropClass;
    /**
     * Custom class for the picker overlay pane.
     * @type {?}
     */
    OwlDateTimeComponent.prototype.panelClass;
    /**
     * The date to open the calendar to initially.
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._startAt;
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._pickerType;
    /**
     * Whether the picker open as a dialog
     * @type {?}
     */
    OwlDateTimeComponent.prototype._pickerMode;
    /**
     * Whether the date time picker should be disabled.
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._disabled;
    /**
     * Whether the calendar is open.
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._opened;
    /**
     * The scroll strategy when the picker is open
     * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.scrollStrategy;
    /**
     * Callback when the picker is closed
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.afterPickerClosed;
    /**
     * Callback when the picker is open
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.afterPickerOpen;
    /**
     * Emits selected year in multi-year view
     * This doesn't imply a change on the selected date.
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.yearSelected;
    /**
     * Emits selected month in year view
     * This doesn't imply a change on the selected date.
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.monthSelected;
    /**
     * Emit when the selected value has been confirmed
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.confirmSelectedChange;
    /**
     * Emits when the date time picker is disabled.
     *
     * @type {?}
     */
    OwlDateTimeComponent.prototype.disabledChange;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.pickerContainerPortal;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.pickerContainer;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.popupRef;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.dtInputSub;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.hidePickerStreamSub;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.confirmSelectedStreamSub;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.pickerOpenedStreamSub;
    /**
     * The element that was focused before the date time picker was opened.
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.focusedElementBeforeOpen;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._dtInput;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype._selecteds;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.defaultScrollStrategy;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.dialogService;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeComponent.prototype.dateTimeAdapter;
    /**
     * @type {?}
     * @protected
     */
    OwlDateTimeComponent.prototype.dateTimeFormats;
    /**
     * @type {?}
     * @private
     */
    OwlDateTimeComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixnQkFBZ0IsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBRUgsT0FBTyxFQUNQLGFBQWEsRUFJaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUNILHFCQUFxQixFQUV4QixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFDSCxXQUFXLEVBSWQsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFD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Ozs7SUFvQzdCLHFEQUFvRDs7Ozs7SUFHaEQsdUNBQXdCOzs7OztJQUN4QixnREFBMEM7Ozs7O0lBQzFDLDZDQUF1Qzs7Ozs7SUFDdkMsc0NBQXNCOzs7OztJQUN0Qiw4Q0FBMkM7Ozs7O0lBQzNDLCtDQUF5RDs7Ozs7SUFFekQsK0NBRTZDOzs7OztJQUM3Qyx3Q0FFcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgSW5qZWN0aW9uVG9rZW4sXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3B0aW9uYWwsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gICAgQmxvY2tTY3JvbGxTdHJhdGVneSxcbiAgICBPdmVybGF5LFxuICAgIE92ZXJsYXlDb25maWcsXG4gICAgT3ZlcmxheVJlZixcbiAgICBQb3NpdGlvblN0cmF0ZWd5LFxuICAgIFNjcm9sbFN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEVTQ0FQRSwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgY29lcmNlQXJyYXksIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlci9kYXRlLXRpbWUtYWRhcHRlci5jbGFzcyc7XG5pbXBvcnQge1xuICAgIE9XTF9EQVRFX1RJTUVfRk9STUFUUyxcbiAgICBPd2xEYXRlVGltZUZvcm1hdHNcbn0gZnJvbSAnLi9hZGFwdGVyL2RhdGUtdGltZS1mb3JtYXQuY2xhc3MnO1xuaW1wb3J0IHtcbiAgICBPd2xEYXRlVGltZSxcbiAgICBQaWNrZXJNb2RlLFxuICAgIFBpY2tlclR5cGUsXG4gICAgU2VsZWN0TW9kZVxufSBmcm9tICcuL2RhdGUtdGltZS5jbGFzcyc7XG5pbXBvcnQgeyBPd2xEaWFsb2dSZWYgfSBmcm9tICcuLi9kaWFsb2cvZGlhbG9nLXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBPd2xEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGRldGVybWluZXMgdGhlIHNjcm9sbCBoYW5kbGluZyB3aGlsZSB0aGUgZHRQaWNrZXIgaXMgb3Blbi4gKi9cbmV4cG9ydCBjb25zdCBPV0xfRFRQSUNLRVJfU0NST0xMX1NUUkFURUdZID0gbmV3IEluamVjdGlvblRva2VuPFxuICAgICgpID0+IFNjcm9sbFN0cmF0ZWd5XG4+KCdvd2wtZHRwaWNrZXItc2Nyb2xsLXN0cmF0ZWd5Jyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIG92ZXJsYXk6IE92ZXJsYXlcbik6ICgpID0+IEJsb2NrU2Nyb2xsU3RyYXRlZ3kge1xuICAgIGNvbnN0IGZuID0gKCkgPT4gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgcmV0dXJuIGZuO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IE9XTF9EVFBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIgPSB7XG4gICAgcHJvdmlkZTogT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWSxcbiAgICBkZXBzOiBbT3ZlcmxheV0sXG4gICAgdXNlRmFjdG9yeTogT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUnLFxuICAgIGV4cG9ydEFzOiAnb3dsRGF0ZVRpbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgT3dsRGF0ZVRpbWVDb21wb25lbnQ8VD4gZXh0ZW5kcyBPd2xEYXRlVGltZTxUPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKiBDdXN0b20gY2xhc3MgZm9yIHRoZSBwaWNrZXIgYmFja2Ryb3AuICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXTtcblxuICAgIC8qKiBDdXN0b20gY2xhc3MgZm9yIHRoZSBwaWNrZXIgb3ZlcmxheSBwYW5lLiAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdID0gW107XG5cbiAgICAvKiogVGhlIGRhdGUgdG8gb3BlbiB0aGUgY2FsZW5kYXIgdG8gaW5pdGlhbGx5LiAqL1xuICAgIHByaXZhdGUgX3N0YXJ0QXQ6IFQgfCBudWxsO1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHN0YXJ0QXQoKTogVCB8IG51bGwge1xuICAgICAgICAvLyBJZiBhbiBleHBsaWNpdCBzdGFydEF0IGlzIHNldCB3ZSBzdGFydCB0aGVyZSwgb3RoZXJ3aXNlIHdlIHN0YXJ0IGF0IHdoYXRldmVyIHRoZSBjdXJyZW50bHlcbiAgICAgICAgLy8gc2VsZWN0ZWQgdmFsdWUgaXMuXG4gICAgICAgIGlmICh0aGlzLl9zdGFydEF0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRBdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9kdElucHV0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHRJbnB1dC5zZWxlY3RNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0LnZhbHVlIHx8IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuX2R0SW5wdXQuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlJyB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2R0SW5wdXQuc2VsZWN0TW9kZSA9PT0gJ3JhbmdlRnJvbSdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0LnZhbHVlc1swXSB8fCBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9kdElucHV0LnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0LnZhbHVlc1sxXSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgc3RhcnRBdChkYXRlOiBUIHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5nZXRWYWxpZERhdGUoXG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5kZXNlcmlhbGl6ZShkYXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdHlwZSBvZiB0aGUgZGF0ZVRpbWUgcGlja2VyXG4gICAgICogICAgICAnYm90aCcgLS0gc2hvdyBib3RoIGNhbGVuZGFyIGFuZCB0aW1lclxuICAgICAqICAgICAgJ2NhbGVuZGFyJyAtLSBzaG93IG9ubHkgY2FsZW5kYXJcbiAgICAgKiAgICAgICd0aW1lcicgLS0gc2hvdyBvbmx5IHRpbWVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGlja2VyVHlwZTogUGlja2VyVHlwZSA9ICdib3RoJztcbiAgICBASW5wdXQoKVxuICAgIGdldCBwaWNrZXJUeXBlKCk6IFBpY2tlclR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGlja2VyVHlwZTtcbiAgICB9XG5cbiAgICBzZXQgcGlja2VyVHlwZSh2YWw6IFBpY2tlclR5cGUpIHtcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5fcGlja2VyVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fcGlja2VyVHlwZSA9IHZhbDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHRJbnB1dC5mb3JtYXROYXRpdmVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBwaWNrZXIgb3BlbiBhcyBhIGRpYWxvZ1xuICAgICAqL1xuICAgIF9waWNrZXJNb2RlOiBQaWNrZXJNb2RlID0gJ3BvcHVwJztcbiAgICBASW5wdXQoKVxuICAgIGdldCBwaWNrZXJNb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGlja2VyTW9kZTtcbiAgICB9XG5cbiAgICBzZXQgcGlja2VyTW9kZShtb2RlOiBQaWNrZXJNb2RlKSB7XG4gICAgICAgIGlmIChtb2RlID09PSAncG9wdXAnKSB7XG4gICAgICAgICAgICB0aGlzLl9waWNrZXJNb2RlID0gbW9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BpY2tlck1vZGUgPSAnZGlhbG9nJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBXaGV0aGVyIHRoZSBkYXRlIHRpbWUgcGlja2VyIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZHRJbnB1dFxuICAgICAgICAgICAgPyB0aGlzLl9kdElucHV0LmRpc2FibGVkXG4gICAgICAgICAgICA6ICEhdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgb3Blbi4gKi9cbiAgICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKVxuICAgIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gICAgfVxuXG4gICAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFsID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbCBzdHJhdGVneSB3aGVuIHRoZSBwaWNrZXIgaXMgb3BlblxuICAgICAqIExlYXJuIG1vcmUgdGhpcyBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvb3ZlcmxheS9vdmVydmlldyNzY3JvbGwtc3RyYXRlZ2llc1xuICAgICAqICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2Nyb2xsU3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgd2hlbiB0aGUgcGlja2VyIGlzIGNsb3NlZFxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgYWZ0ZXJQaWNrZXJDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHdoZW4gdGhlIHBpY2tlciBpcyBvcGVuXG4gICAgICogKi9cbiAgICBAT3V0cHV0KClcbiAgICBhZnRlclBpY2tlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIHNlbGVjdGVkIHllYXIgaW4gbXVsdGkteWVhciB2aWV3XG4gICAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgeWVhclNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3XG4gICAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAqICovXG4gICAgQE91dHB1dCgpXG4gICAgbW9udGhTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXQgd2hlbiB0aGUgc2VsZWN0ZWQgdmFsdWUgaGFzIGJlZW4gY29uZmlybWVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgY29uZmlybVNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUW10gfCBUPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiB0aGUgZGF0ZSB0aW1lIHBpY2tlciBpcyBkaXNhYmxlZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBkaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIHByaXZhdGUgcGlja2VyQ29udGFpbmVyUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8XG4gICAgICAgIE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50PFQ+XG4gICAgPjtcbiAgICBwcml2YXRlIHBpY2tlckNvbnRhaW5lcjogT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQ8VD47XG4gICAgcHJpdmF0ZSBwb3B1cFJlZjogT3ZlcmxheVJlZjtcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogT3dsRGlhbG9nUmVmPE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50PFQ+PjtcbiAgICBwcml2YXRlIGR0SW5wdXRTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgcHJpdmF0ZSBoaWRlUGlja2VyU3RyZWFtU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgIHByaXZhdGUgY29uZmlybVNlbGVjdGVkU3RyZWFtU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgIHByaXZhdGUgcGlja2VyT3BlbmVkU3RyZWFtU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gICAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBkYXRlIHRpbWUgcGlja2VyIHdhcyBvcGVuZWQuICovXG4gICAgcHJpdmF0ZSBmb2N1c2VkRWxlbWVudEJlZm9yZU9wZW46IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9kdElucHV0OiBPd2xEYXRlVGltZUlucHV0RGlyZWN0aXZlPFQ+O1xuICAgIGdldCBkdElucHV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHRJbnB1dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWxlY3RlZDogVCB8IG51bGw7XG4gICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlOiBUIHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbGVjdGVkczogVFtdID0gW107XG4gICAgZ2V0IHNlbGVjdGVkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkcztcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWRzKHZhbHVlczogVFtdKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICAgIGdldCBtaW5EYXRlVGltZSgpOiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0ICYmIHRoaXMuX2R0SW5wdXQubWluO1xuICAgIH1cblxuICAgIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gICAgZ2V0IG1heERhdGVUaW1lKCk6IFQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R0SW5wdXQgJiYgdGhpcy5fZHRJbnB1dC5tYXg7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGVUaW1lRmlsdGVyKCk6IChkYXRlOiBUIHwgbnVsbCkgPT4gYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0ICYmIHRoaXMuX2R0SW5wdXQuZGF0ZVRpbWVGaWx0ZXI7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdE1vZGUoKTogU2VsZWN0TW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdElucHV0LnNlbGVjdE1vZGU7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5TaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHRJbnB1dC5pc0luU2luZ2xlTW9kZTtcbiAgICB9XG5cbiAgICBnZXQgaXNJblJhbmdlTW9kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R0SW5wdXQuaXNJblJhbmdlTW9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRTY3JvbGxTdHJhdGVneTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogT3dsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGRhdGVUaW1lQWRhcHRlcjogRGF0ZVRpbWVBZGFwdGVyPFQ+LFxuICAgICAgICBASW5qZWN0KE9XTF9EVFBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kpIGRlZmF1bHRTY3JvbGxTdHJhdGVneTogYW55LFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KE9XTF9EQVRFX1RJTUVfRk9STUFUUylcbiAgICAgICAgcHJvdGVjdGVkIGRhdGVUaW1lRm9ybWF0czogT3dsRGF0ZVRpbWVGb3JtYXRzLFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgICAgICBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZGF0ZVRpbWVBZGFwdGVyLCBkYXRlVGltZUZvcm1hdHMpO1xuICAgICAgICB0aGlzLmRlZmF1bHRTY3JvbGxTdHJhdGVneSA9IGRlZmF1bHRTY3JvbGxTdHJhdGVneTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuZHRJbnB1dFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9wdXBSZWYpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBSZWYuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVySW5wdXQoaW5wdXQ6IE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmU8VD4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2R0SW5wdXQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgICdBIE93bCBEYXRlVGltZVBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2R0SW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5kdElucHV0U3ViID0gdGhpcy5fZHRJbnB1dC52YWx1ZUNoYW5nZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAodmFsdWU6IFRbXSB8IFQgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX29wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2R0SW5wdXQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgICdBdHRlbXB0ZWQgdG8gb3BlbiBhbiBEYXRlVGltZVBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBwaWNrZXIgc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgaWYgKHRoaXMuaXNJblNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLl9kdElucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZHMgPSB0aGlzLl9kdElucHV0LnZhbHVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdoZW4gdGhlIHBpY2tlciBpcyBvcGVuICwgd2UgbWFrZSBzdXJlIHRoZSBwaWNrZXIncyBjdXJyZW50IHNlbGVjdGVkIHRpbWUgdmFsdWVcbiAgICAgICAgLy8gaXMgdGhlIHNhbWUgYXMgdGhlIF9zdGFydEF0IHRpbWUgdmFsdWUuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMucGlja2VyVHlwZSAhPT0gJ2NhbGVuZGFyJyAmJiB0aGlzLl9zdGFydEF0KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRlVGltZUFkYXB0ZXIuY3JlYXRlRGF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRZZWFyKHRoaXMuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldE1vbnRoKHRoaXMuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVBZGFwdGVyLmdldERhdGUodGhpcy5zZWxlY3RlZCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0SG91cnModGhpcy5fc3RhcnRBdCksXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVGltZUFkYXB0ZXIuZ2V0TWludXRlcyh0aGlzLl9zdGFydEF0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUaW1lQWRhcHRlci5nZXRTZWNvbmRzKHRoaXMuX3N0YXJ0QXQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waWNrZXJNb2RlID09PSAnZGlhbG9nJyA/IHRoaXMub3BlbkFzRGlhbG9nKCkgOiB0aGlzLm9wZW5Bc1BvcHVwKCk7XG5cbiAgICAgICAgdGhpcy5waWNrZXJDb250YWluZXIucGlja2VyID0gdGhpcztcblxuICAgICAgICAvLyBMaXN0ZW4gdG8gcGlja2VyIGNvbnRhaW5lcidzIGhpZGVQaWNrZXJTdHJlYW1cbiAgICAgICAgdGhpcy5oaWRlUGlja2VyU3RyZWFtU3ViID0gdGhpcy5waWNrZXJDb250YWluZXIuaGlkZVBpY2tlclN0cmVhbS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIExpc3RlbiB0byBwaWNrZXIgY29udGFpbmVyJ3MgY29uZmlybVNlbGVjdGVkU3RyZWFtXG4gICAgICAgIHRoaXMuY29uZmlybVNlbGVjdGVkU3RyZWFtU3ViID0gdGhpcy5waWNrZXJDb250YWluZXIuY29uZmlybVNlbGVjdGVkU3RyZWFtLnN1YnNjcmliZShcbiAgICAgICAgICAgIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBkYXRlXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChkYXRlOiBUW10gfCBUKTogdm9pZCB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkcyA9IFsuLi5kYXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhc2VzIGluIHdoaWNoIGF1dG9tYXRpY2FsbHkgY29uZmlybSB0aGUgc2VsZWN0IHdoZW4gZGF0ZSBvciBkYXRlcyBhcmUgc2VsZWN0ZWQ6XG4gICAgICAgICAqIDEpIHBpY2tlciBtb2RlIGlzIE5PVCAnZGlhbG9nJ1xuICAgICAgICAgKiAyKSBwaWNrZXIgdHlwZSBpcyAnY2FsZW5kYXInIGFuZCBzZWxlY3RNb2RlIGlzICdzaW5nbGUnLlxuICAgICAgICAgKiAzKSBwaWNrZXIgdHlwZSBpcyAnY2FsZW5kYXInIGFuZCBzZWxlY3RNb2RlIGlzICdyYW5nZScgYW5kXG4gICAgICAgICAqICAgIHRoZSAnc2VsZWN0ZWRzJyBoYXMgJ2Zyb20nKHNlbGVjdGVkc1swXSkgYW5kICd0bycoc2VsZWN0ZWRzWzFdKSB2YWx1ZXMuXG4gICAgICAgICAqIDQpIHNlbGVjdE1vZGUgaXMgJ3JhbmdlRnJvbScgYW5kIHNlbGVjdGVkc1swXSBoYXMgdmFsdWUuXG4gICAgICAgICAqIDUpIHNlbGVjdE1vZGUgaXMgJ3JhbmdlVG8nIGFuZCBzZWxlY3RlZHNbMV0gaGFzIHZhbHVlLlxuICAgICAgICAgKiAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnBpY2tlck1vZGUgIT09ICdkaWFsb2cnICYmXG4gICAgICAgICAgICB0aGlzLnBpY2tlclR5cGUgPT09ICdjYWxlbmRhcicgJiZcbiAgICAgICAgICAgICgodGhpcy5zZWxlY3RNb2RlID09PSAnc2luZ2xlJyAmJiB0aGlzLnNlbGVjdGVkKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZUZyb20nICYmIHRoaXMuc2VsZWN0ZWRzWzBdKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnNlbGVjdE1vZGUgPT09ICdyYW5nZVRvJyAmJiB0aGlzLnNlbGVjdGVkc1sxXSkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zZWxlY3RNb2RlID09PSAncmFuZ2UnICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRzWzFdKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1TZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyIGluIG11bHRpLXllYXIgdmlld1xuICAgICAqICovXG4gICAgcHVibGljIHNlbGVjdFllYXIobm9ybWFsaXplZFllYXI6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3XG4gICAgICogKi9cbiAgICBwdWJsaWMgc2VsZWN0TW9udGgobm9ybWFsaXplZE1vbnRoOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcGlja2VyXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX29wZW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9wdXBSZWYgJiYgdGhpcy5wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwUmVmLmRldGFjaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5waWNrZXJDb250YWluZXJQb3J0YWwgJiZcbiAgICAgICAgICAgIHRoaXMucGlja2VyQ29udGFpbmVyUG9ydGFsLmlzQXR0YWNoZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlckNvbnRhaW5lclBvcnRhbC5kZXRhY2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGVQaWNrZXJTdHJlYW1TdWIpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlclN0cmVhbVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5oaWRlUGlja2VyU3RyZWFtU3ViID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1TZWxlY3RlZFN0cmVhbVN1Yikge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0ZWRTdHJlYW1TdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVNlbGVjdGVkU3RyZWFtU3ViID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBpY2tlck9wZW5lZFN0cmVhbVN1Yikge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJPcGVuZWRTdHJlYW1TdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMucGlja2VyT3BlbmVkU3RyZWFtU3ViID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpYWxvZ1JlZikge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlclBpY2tlckNsb3NlZC5lbWl0KG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXG4gICAgICAgICAgICAvLyBtYXJrZWQgdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XG4gICAgICAgICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xuICAgICAgICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXG4gICAgICAgICAgICAvLyB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQsIGFzeW5jIGFzIHdlbGwuXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cygpO1xuICAgICAgICAgICAgc2V0VGltZW91dChjb21wbGV0ZUNsb3NlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm0gdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGNvbmZpcm1TZWxlY3QoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJblNpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkIHx8IHRoaXMuc3RhcnRBdCB8fCB0aGlzLmRhdGVUaW1lQWRhcHRlci5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJblJhbmdlTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBwaWNrZXIgYXMgYSBkaWFsb2dcbiAgICAgKi9cbiAgICBwcml2YXRlIG9wZW5Bc0RpYWxvZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgICAgICAgIE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAnY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCcsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvZXJjZUFycmF5KHRoaXMuYmFja2Ryb3BDbGFzcylcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBhbmVDbGFzczogWydvd2wtZHQtZGlhbG9nJywgLi4uY29lcmNlQXJyYXkodGhpcy5wYW5lbENsYXNzKV0sXG4gICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5IHx8IHRoaXMuZGVmYXVsdFNjcm9sbFN0cmF0ZWd5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5waWNrZXJDb250YWluZXIgPSB0aGlzLmRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlck9wZW4oKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZnRlclBpY2tlck9wZW4uZW1pdChudWxsKTtcbiAgICAgICAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIHBpY2tlciBhcyBwb3B1cFxuICAgICAqL1xuICAgIHByaXZhdGUgb3BlbkFzUG9wdXAoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5waWNrZXJDb250YWluZXJQb3J0YWwpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyQ29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxcbiAgICAgICAgICAgICAgICBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudDxUPlxuICAgICAgICAgICAgPihPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wb3B1cFJlZikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQb3B1cCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFxuICAgICAgICAgICAgICAgIE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50PFQ+XG4gICAgICAgICAgICA+ID0gdGhpcy5wb3B1cFJlZi5hdHRhY2godGhpcy5waWNrZXJDb250YWluZXJQb3J0YWwpO1xuICAgICAgICAgICAgdGhpcy5waWNrZXJDb250YWluZXIgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb25jZSB0aGUgY2FsZW5kYXIgaGFzIHJlbmRlcmVkLlxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGVcbiAgICAgICAgICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGVtaXQgb3BlbiBzdHJlYW1cbiAgICAgICAgICAgIHRoaXMucGlja2VyT3BlbmVkU3RyZWFtU3ViID0gdGhpcy5waWNrZXJDb250YWluZXIucGlja2VyT3BlbmVkU3RyZWFtXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlclBpY2tlck9wZW4uZW1pdChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUG9wdXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmNyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICAgICAgICBiYWNrZHJvcENsYXNzOiBbXG4gICAgICAgICAgICAgICAgJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgICAgICAgICAgICAuLi5jb2VyY2VBcnJheSh0aGlzLmJhY2tkcm9wQ2xhc3MpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3kgfHwgdGhpcy5kZWZhdWx0U2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnb3dsLWR0LXBvcHVwJywgLi4uY29lcmNlQXJyYXkodGhpcy5wYW5lbENsYXNzKV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cFJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG5cbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICB0aGlzLnBvcHVwUmVmLmJhY2tkcm9wQ2xpY2soKSxcbiAgICAgICAgICAgIHRoaXMucG9wdXBSZWYuZGV0YWNobWVudHMoKSxcbiAgICAgICAgICAgIHRoaXMucG9wdXBSZWZcbiAgICAgICAgICAgICAgICAua2V5ZG93bkV2ZW50cygpXG4gICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX2R0SW5wdXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IFVQX0FSUk9XKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgcG9wdXAgUG9zaXRpb25TdHJhdGVneS5cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5XG4gICAgICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZHRJbnB1dC5lbGVtZW50UmVmKVxuICAgICAgICAgICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLm93bC1kdC1jb250YWluZXInKVxuICAgICAgICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgICAgICAgICAud2l0aFB1c2goZmFsc2UpXG4gICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC0xNzZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC0zNTJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKTtcbiAgICB9XG59XG4iXX0=