/**
 * calendar.component
 */
import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
export declare class OwlCalendarComponent<T> implements OnInit, AfterContentInit, AfterViewChecked, OnDestroy {
    private elmRef;
    private pickerIntl;
    private ngZone;
    private cdRef;
    private dateTimeAdapter;
    private dateTimeFormats;
    /**
     * Date filter for the month and year view
     * */
    dateFilter: Function;
    /**
     * Set the first day of week
     */
    firstDayOfWeek: number;
    /** The minimum selectable date. */
    private _minDate;
    minDate: T | null;
    /** The maximum selectable date. */
    private _maxDate;
    maxDate: T | null;
    /** The current picker moment */
    private _pickerMoment;
    pickerMoment: T;
    selectMode: SelectMode;
    /** The currently selected moment. */
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    /**
     * The view that the calendar should start in.
     */
    startView: 'month' | 'year' | 'multi-years';
    /**
     * Whether to hide dates in other months at the start or end of the current month.
     * */
    hideOtherMonths: boolean;
    /** Emits when the currently picker moment changes. */
    pickerMomentChange: EventEmitter<T>;
    /** Emits when the currently selected date changes. */
    selectedChange: EventEmitter<T>;
    /** Emits when any date is selected. */
    userSelection: EventEmitter<void>;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * */
    readonly yearSelected: EventEmitter<T>;
    /**
     * Emits the selected month. This doesn't imply a change on the selected date
     * */
    readonly monthSelected: EventEmitter<T>;
    readonly periodButtonText: string;
    readonly periodButtonLabel: string;
    readonly prevButtonLabel: string;
    readonly nextButtonLabel: string;
    private _currentView;
    currentView: 'month' | 'year' | 'multi-years';
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    readonly showControlArrows: boolean;
    readonly isMonthView: boolean;
    /**
     * Date filter for the month and year view
     */
    dateFilterForViews: (date: T) => boolean;
    /**
     * Bind class 'owl-dt-calendar' to host
     * */
    readonly owlDTCalendarClass: boolean;
    private intlChangesSub;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    private moveFocusOnNextTick;
    constructor(elmRef: ElementRef, pickerIntl: OwlDateTimeIntl, ngZone: NgZone, cdRef: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    /**
     * Toggle between month view and year view
     */
    toggleViews(): void;
    /**
     * Handles user clicks on the previous button.
     * */
    previousClicked(): void;
    /**
     * Handles user clicks on the next button.
     * */
    nextClicked(): void;
    dateSelected(date: T): void;
    /**
     * Change the pickerMoment value and switch to a specific view
     */
    goToDateInView(date: T, view: 'month' | 'year' | 'multi-years'): void;
    /**
     * Change the pickerMoment value
     */
    handlePickerMomentChange(date: T): void;
    userSelected(): void;
    /**
     * Whether the previous period button is enabled.
     */
    prevButtonEnabled(): boolean;
    /**
     * Whether the next period button is enabled.
     */
    nextButtonEnabled(): boolean;
    /**
     * Focus to the host element
     * */
    focusActiveCell(): void;
    selectYearInMultiYearView(normalizedYear: T): void;
    selectMonthInYearView(normalizedMonth: T): void;
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     */
    private isSameView;
    /**
     * Get a valid date object
     */
    private getValidDate;
}
