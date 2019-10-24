/**
 * date-time.class
 */
import { EventEmitter } from '@angular/core';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
export declare type PickerType = 'both' | 'calendar' | 'timer';
export declare type PickerMode = 'popup' | 'dialog' | 'inline';
export declare type SelectMode = 'single' | 'range' | 'rangeFrom' | 'rangeTo';
export declare abstract class OwlDateTime<T> {
    protected dateTimeAdapter: DateTimeAdapter<T>;
    protected dateTimeFormats: OwlDateTimeFormats;
    /**
     * Whether to show the second's timer
     */
    private _showSecondsTimer;
    showSecondsTimer: boolean;
    /**
     * Whether the timer is in hour12 format
     */
    private _hour12Timer;
    hour12Timer: boolean;
    /**
     * The view that the calendar should start in.
     */
    startView: 'month' | 'year' | 'multi-years';
    /**
     * Hours to change per step
     */
    private _stepHour;
    stepHour: number;
    /**
     * Minutes to change per step
     */
    private _stepMinute;
    stepMinute: number;
    /**
     * Seconds to change per step
     */
    private _stepSecond;
    stepSecond: number;
    /**
     * Set the first day of week
     */
    private _firstDayOfWeek;
    firstDayOfWeek: number;
    /**
     * Whether to hide dates in other months at the start or end of the current month.
     */
    private _hideOtherMonths;
    hideOtherMonths: boolean;
    private _id;
    readonly id: string;
    abstract readonly selected: T | null;
    abstract readonly selecteds: T[] | null;
    abstract readonly dateTimeFilter: (date: T | null) => boolean;
    abstract readonly maxDateTime: T | null;
    abstract readonly minDateTime: T | null;
    abstract readonly selectMode: SelectMode;
    abstract readonly startAt: T | null;
    abstract readonly opened: boolean;
    abstract readonly pickerMode: PickerMode;
    abstract readonly pickerType: PickerType;
    abstract readonly isInSingleMode: boolean;
    abstract readonly isInRangeMode: boolean;
    abstract select(date: T | T[]): void;
    abstract yearSelected: EventEmitter<T>;
    abstract monthSelected: EventEmitter<T>;
    abstract selectYear(normalizedYear: T): void;
    abstract selectMonth(normalizedMonth: T): void;
    readonly formatString: string;
    /**
     * Date Time Checker to check if the give dateTime is selectable
     */
    dateTimeChecker: (dateTime: T) => boolean;
    readonly disabled: boolean;
    constructor(dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    protected getValidDate(obj: any): T | null;
}
