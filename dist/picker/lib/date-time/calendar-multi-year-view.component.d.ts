/**
 * calendar-multi-year-view.component
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { SelectMode } from './date-time.class';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
export declare const YEARS_PER_ROW = 3;
export declare const YEAR_ROWS = 7;
export declare class OwlMultiYearViewComponent<T> implements OnInit, AfterContentInit {
    private cdRef;
    private pickerIntl;
    private dateTimeAdapter;
    /**
     * The select mode of the picker;
     * */
    private _selectMode;
    selectMode: SelectMode;
    /** The currently selected date. */
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    private _pickerMoment;
    pickerMoment: T;
    /**
     * A function used to filter which dates are selectable
     * */
    private _dateFilter;
    dateFilter: (date: T) => boolean;
    /** The minimum selectable date. */
    private _minDate;
    minDate: T | null;
    /** The maximum selectable date. */
    private _maxDate;
    maxDate: T | null;
    private _todayYear;
    readonly todayYear: number;
    private _years;
    readonly years: CalendarCell[][];
    private _selectedYears;
    readonly selectedYears: number[];
    private initiated;
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    readonly activeCell: number;
    readonly tableHeader: string;
    readonly prevButtonLabel: string;
    readonly nextButtonLabel: string;
    /**
     * Callback to invoke when a new month is selected
     * */
    readonly change: EventEmitter<T>;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * */
    readonly yearSelected: EventEmitter<T>;
    /** Emits when any date is activated. */
    readonly pickerMomentChange: EventEmitter<T>;
    /** Emits when use keyboard enter to select a calendar cell */
    readonly keyboardEnter: EventEmitter<any>;
    /** The body of calendar table */
    calendarBodyElm: OwlCalendarBodyComponent;
    readonly owlDTCalendarView: boolean;
    readonly owlDTCalendarMultiYearView: boolean;
    constructor(cdRef: ChangeDetectorRef, pickerIntl: OwlDateTimeIntl, dateTimeAdapter: DateTimeAdapter<T>);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void;
    private selectYear;
    /**
     * Generate the previous year list
     * */
    prevYearList(event: any): void;
    /**
     * Generate the next year list
     * */
    nextYearList(event: any): void;
    generateYearList(): void;
    /** Whether the previous period button is enabled. */
    previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    nextEnabled(): boolean;
    handleCalendarKeydown(event: KeyboardEvent): void;
    /**
     * Creates an CalendarCell for the given year.
     */
    private createYearCell;
    private setSelectedYears;
    /** Whether the given year is enabled. */
    private isYearEnabled;
    private isSameYearList;
    /**
     * Get a valid date object
     */
    private getValidDate;
    private focusActiveCell;
}
