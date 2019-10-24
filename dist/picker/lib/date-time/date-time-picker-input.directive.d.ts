/**
 * date-time-picker-input.directive
 */
import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { OwlDateTimeComponent } from './date-time-picker.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
export declare const OWL_DATETIME_VALUE_ACCESSOR: any;
export declare const OWL_DATETIME_VALIDATORS: any;
export declare class OwlDateTimeInputDirective<T> implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor, Validator {
    private elmRef;
    private renderer;
    private dateTimeAdapter;
    private dateTimeFormats;
    /**
     * The date time picker that this input is associated with.
     * */
    owlDateTime: OwlDateTimeComponent<T>;
    /**
     * A function to filter date time
     */
    owlDateTimeFilter: (date: T | null) => boolean;
    private _dateTimeFilter;
    readonly dateTimeFilter: (date: T) => boolean;
    /** Whether the date time picker's input is disabled. */
    private _disabled;
    disabled: boolean;
    /** The minimum valid date. */
    private _min;
    min: T | null;
    /** The maximum valid date. */
    private _max;
    max: T | null;
    /**
     * The picker's select mode
     */
    private _selectMode;
    selectMode: SelectMode;
    /**
     * The character to separate the 'from' and 'to' in input value
     */
    rangeSeparator: string;
    private _value;
    value: T | null;
    private _values;
    values: T[];
    /**
     * Callback to invoke when `change` event is fired on this `<input>`
     * */
    dateTimeChange: EventEmitter<any>;
    /**
     * Callback to invoke when an `input` event is fired on this `<input>`.
     * */
    dateTimeInput: EventEmitter<any>;
    readonly elementRef: ElementRef;
    readonly isInSingleMode: boolean;
    readonly isInRangeMode: boolean;
    /** The date-time-picker that this input is associated with. */
    dtPicker: OwlDateTimeComponent<T>;
    private dtPickerSub;
    private localeSub;
    private lastValueValid;
    private onModelChange;
    private onModelTouched;
    private validatorOnChange;
    /** The form control validator for whether the input parses. */
    private parseValidator;
    /** The form control validator for the min date. */
    private minValidator;
    /** The form control validator for the max date. */
    private maxValidator;
    /** The form control validator for the date filter. */
    private filterValidator;
    /**
     * The form control validator for the range.
     * Check whether the 'before' value is before the 'to' value
     * */
    private rangeValidator;
    /** The combined form control validator for this input. */
    private validator;
    /** Emits when the value changes (either due to user input or programmatic change). */
    valueChange: EventEmitter<T | T[]>;
    /** Emits when the disabled state has changed */
    disabledChange: EventEmitter<boolean>;
    readonly owlDateTimeInputAriaHaspopup: boolean;
    readonly owlDateTimeInputAriaOwns: string;
    readonly minIso8601: string;
    readonly maxIso8601: string;
    readonly owlDateTimeInputDisabled: boolean;
    constructor(elmRef: ElementRef, renderer: Renderer2, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    /**
     * Open the picker when user hold alt + DOWN_ARROW
     * */
    handleKeydownOnHost(event: KeyboardEvent): void;
    handleBlurOnHost(event: Event): void;
    handleInputOnHost(event: any): void;
    handleChangeOnHost(event: any): void;
    /**
     * Set the native input property 'value'
     */
    formatNativeInputValue(): void;
    /**
     * Register the relationship between this input and its picker component
     */
    private registerDateTimePicker;
    /**
     * Convert a given obj to a valid date object
     */
    private getValidDate;
    /**
     * Convert a time string to a date-time string
     * When pickerType is 'timer', the value in the picker's input is a time string.
     * The dateTimeAdapter parse fn could not parse a time string to a Date Object.
     * Therefore we need this fn to convert a time string to a date-time string.
     */
    private convertTimeStringToDateTimeString;
    /**
     * Handle input change in single mode
     */
    private changeInputInSingleMode;
    /**
     * Handle input change in rangeFrom or rangeTo mode
     */
    private changeInputInRangeFromToMode;
    /**
     * Handle input change in range mode
     */
    private changeInputInRangeMode;
    /**
     * Check if the two value is the same
     */
    private isSameValue;
}
