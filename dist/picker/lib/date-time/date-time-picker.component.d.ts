/**
 * date-time-picker.component
 */
import { ChangeDetectorRef, EventEmitter, InjectionToken, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BlockScrollStrategy, Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { OwlDateTime, PickerMode, PickerType, SelectMode } from './date-time.class';
import { OwlDialogService } from '../dialog/dialog.service';
/** Injection token that determines the scroll handling while the dtPicker is open. */
export declare const OWL_DTPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** @docs-private */
export declare function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => BlockScrollStrategy;
/** @docs-private */
export declare const OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
export declare class OwlDateTimeComponent<T> extends OwlDateTime<T> implements OnInit, OnDestroy {
    private overlay;
    private viewContainerRef;
    private dialogService;
    private ngZone;
    protected changeDetector: ChangeDetectorRef;
    protected dateTimeAdapter: DateTimeAdapter<T>;
    protected dateTimeFormats: OwlDateTimeFormats;
    private document;
    /** Custom class for the picker backdrop. */
    backdropClass: string | string[];
    /** Custom class for the picker overlay pane. */
    panelClass: string | string[];
    /** The date to open the calendar to initially. */
    private _startAt;
    startAt: T | null;
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     */
    private _pickerType;
    pickerType: PickerType;
    /**
     * Whether the picker open as a dialog
     */
    _pickerMode: PickerMode;
    pickerMode: PickerMode;
    /** Whether the date time picker should be disabled. */
    private _disabled;
    disabled: boolean;
    /** Whether the calendar is open. */
    private _opened;
    opened: boolean;
    /**
     * The scroll strategy when the picker is open
     * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
     * */
    scrollStrategy: ScrollStrategy;
    /**
     * Callback when the picker is closed
     * */
    afterPickerClosed: EventEmitter<any>;
    /**
     * Callback when the picker is open
     * */
    afterPickerOpen: EventEmitter<any>;
    /**
     * Emits selected year in multi-year view
     * This doesn't imply a change on the selected date.
     * */
    yearSelected: EventEmitter<T>;
    /**
     * Emits selected month in year view
     * This doesn't imply a change on the selected date.
     * */
    monthSelected: EventEmitter<T>;
    /**
     * Emit when the selected value has been confirmed
     * */
    confirmSelectedChange: EventEmitter<T | T[]>;
    /**
     * Emits when the date time picker is disabled.
     * */
    disabledChange: EventEmitter<boolean>;
    private pickerContainerPortal;
    private pickerContainer;
    private popupRef;
    private dialogRef;
    private dtInputSub;
    private hidePickerStreamSub;
    private confirmSelectedStreamSub;
    private pickerOpenedStreamSub;
    /** The element that was focused before the date time picker was opened. */
    private focusedElementBeforeOpen;
    private _dtInput;
    readonly dtInput: OwlDateTimeInputDirective<T>;
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    /** The minimum selectable date. */
    readonly minDateTime: T | null;
    /** The maximum selectable date. */
    readonly maxDateTime: T | null;
    readonly dateTimeFilter: (date: T | null) => boolean;
    readonly selectMode: SelectMode;
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    private defaultScrollStrategy;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: OwlDialogService, ngZone: NgZone, changeDetector: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, defaultScrollStrategy: any, dateTimeFormats: OwlDateTimeFormats, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerInput(input: OwlDateTimeInputDirective<T>): void;
    open(): void;
    /**
     * Selects the given date
     */
    select(date: T[] | T): void;
    /**
     * Emits the selected year in multi-year view
     * */
    selectYear(normalizedYear: T): void;
    /**
     * Emits selected month in year view
     * */
    selectMonth(normalizedMonth: T): void;
    /**
     * Hide the picker
     */
    close(): void;
    /**
     * Confirm the selected value
     */
    confirmSelect(event?: any): void;
    /**
     * Open the picker as a dialog
     */
    private openAsDialog;
    /**
     * Open the picker as popup
     */
    private openAsPopup;
    private createPopup;
    /**
     * Create the popup PositionStrategy.
     * */
    private createPopupPositionStrategy;
}
