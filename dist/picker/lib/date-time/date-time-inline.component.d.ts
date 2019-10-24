/**
 * date-time-inline.component
 */
import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { OwlDateTime, PickerMode, PickerType, SelectMode } from './date-time.class';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
export declare const OWL_DATETIME_VALUE_ACCESSOR: any;
export declare class OwlDateTimeInlineComponent<T> extends OwlDateTime<T> implements OnInit, ControlValueAccessor {
    protected changeDetector: ChangeDetectorRef;
    protected dateTimeAdapter: DateTimeAdapter<T>;
    protected dateTimeFormats: OwlDateTimeFormats;
    container: OwlDateTimeContainerComponent<T>;
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     */
    private _pickerType;
    pickerType: PickerType;
    private _disabled;
    disabled: boolean;
    private _selectMode;
    selectMode: SelectMode;
    /** The date to open the calendar to initially. */
    private _startAt;
    startAt: T | null;
    private _dateTimeFilter;
    dateTimeFilter: (date: T | null) => boolean;
    /** The minimum valid date. */
    private _min;
    minDateTime: T | null;
    /** The maximum valid date. */
    private _max;
    maxDateTime: T | null;
    private _value;
    value: T | null;
    private _values;
    values: T[];
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
    private _selected;
    selected: T | null;
    private _selecteds;
    selecteds: T[];
    readonly opened: boolean;
    readonly pickerMode: PickerMode;
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    readonly owlDTInlineClass: boolean;
    private onModelChange;
    private onModelTouched;
    constructor(changeDetector: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    select(date: T[] | T): void;
    /**
     * Emits the selected year in multi-year view
     * */
    selectYear(normalizedYear: T): void;
    /**
     * Emits selected month in year view
     * */
    selectMonth(normalizedMonth: T): void;
}
