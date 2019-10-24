/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NoopScrollStrategy } from '@angular/cdk/overlay';
/** @type {?} */
let uniqueId = 0;
/**
 * Possible overrides for a dialog's position.
 * @record
 */
export function DialogPosition() { }
if (false) {
    /**
     * Override for the dialog's top position.
     * @type {?|undefined}
     */
    DialogPosition.prototype.top;
    /**
     * Override for the dialog's bottom position.
     * @type {?|undefined}
     */
    DialogPosition.prototype.bottom;
    /**
     * Override for the dialog's left position.
     * @type {?|undefined}
     */
    DialogPosition.prototype.left;
    /**
     * Override for the dialog's right position.
     * @type {?|undefined}
     */
    DialogPosition.prototype.right;
}
export class OwlDialogConfig {
    constructor() {
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        /**
         * Whether to focus the dialog when the dialog is opened
         */
        this.autoFocus = true;
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * Whether the user can use escape or clicking outside to close a modal.
         */
        this.disableClose = false;
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the pane
         *
         */
        this.paneClass = '';
        /**
         * Mouse Event
         *
         */
        this.event = null;
        /**
         * Custom class for the backdrop
         *
         */
        this.backdropClass = '';
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         *
         */
        this.closeOnNavigation = true;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * The max-width of the overlay panel.
         * If a number is provided, pixel units are assumed.
         *
         */
        this.maxWidth = '85vw';
        /**
         * The scroll strategy when the dialog is open
         * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
         *
         */
        this.scrollStrategy = new NoopScrollStrategy();
        this.id = `owl-dialog-${uniqueId++}`;
    }
}
if (false) {
    /**
     * ID of the element that describes the dialog.
     * @type {?}
     */
    OwlDialogConfig.prototype.ariaDescribedBy;
    /**
     * Whether to focus the dialog when the dialog is opened
     * @type {?}
     */
    OwlDialogConfig.prototype.autoFocus;
    /**
     * Whether the dialog has a backdrop.
     * @type {?}
     */
    OwlDialogConfig.prototype.hasBackdrop;
    /**
     * Custom style for the backdrop
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.backdropStyle;
    /**
     * Data being injected into the child component.
     * @type {?}
     */
    OwlDialogConfig.prototype.data;
    /**
     * Whether the user can use escape or clicking outside to close a modal.
     * @type {?}
     */
    OwlDialogConfig.prototype.disableClose;
    /**
     * ID for the modal. If omitted, a unique one will be generated.
     * @type {?}
     */
    OwlDialogConfig.prototype.id;
    /**
     * The ARIA role of the dialog element.
     * @type {?}
     */
    OwlDialogConfig.prototype.role;
    /**
     * Custom class for the pane
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.paneClass;
    /**
     * Mouse Event
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.event;
    /**
     * Custom class for the backdrop
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.backdropClass;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.closeOnNavigation;
    /**
     * Width of the dialog.
     * @type {?}
     */
    OwlDialogConfig.prototype.width;
    /**
     * Height of the dialog.
     * @type {?}
     */
    OwlDialogConfig.prototype.height;
    /**
     * The min-width of the overlay panel.
     * If a number is provided, pixel units are assumed.
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.minWidth;
    /**
     * The min-height of the overlay panel.
     * If a number is provided, pixel units are assumed.
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.minHeight;
    /**
     * The max-width of the overlay panel.
     * If a number is provided, pixel units are assumed.
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.maxWidth;
    /**
     * The max-height of the overlay panel.
     * If a number is provided, pixel units are assumed.
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.maxHeight;
    /**
     * Position overrides.
     * @type {?}
     */
    OwlDialogConfig.prototype.position;
    /**
     * The scroll strategy when the dialog is open
     * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
     *
     * @type {?}
     */
    OwlDialogConfig.prototype.scrollStrategy;
    /** @type {?} */
    OwlDialogConfig.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1jb25maWcuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBa0IsTUFBTSxzQkFBc0IsQ0FBQzs7SUFFdEUsUUFBUSxHQUFHLENBQUM7Ozs7O0FBR2hCLG9DQVlDOzs7Ozs7SUFWRyw2QkFBYTs7Ozs7SUFHYixnQ0FBZ0I7Ozs7O0lBR2hCLDhCQUFjOzs7OztJQUdkLCtCQUFlOztBQUduQixNQUFNLE9BQU8sZUFBZTtJQWdHeEI7Ozs7UUE1Rk8sb0JBQWUsR0FBbUIsSUFBSSxDQUFDOzs7O1FBS3ZDLGNBQVMsR0FBSSxJQUFJLENBQUM7Ozs7UUFHbEIsZ0JBQVcsR0FBSSxJQUFJLENBQUM7Ozs7UUFRcEIsU0FBSSxHQUFTLElBQUksQ0FBQzs7OztRQUdsQixpQkFBWSxHQUFJLEtBQUssQ0FBQzs7OztRQVV0QixTQUFJLEdBQThCLFFBQVEsQ0FBQzs7Ozs7UUFLM0MsY0FBUyxHQUF1QixFQUFFLENBQUM7Ozs7O1FBS25DLFVBQUssR0FBZ0IsSUFBSSxDQUFDOzs7OztRQUsxQixrQkFBYSxHQUF1QixFQUFFLENBQUM7Ozs7O1FBS3ZDLHNCQUFpQixHQUFhLElBQUksQ0FBQzs7OztRQUduQyxVQUFLLEdBQVksRUFBRSxDQUFDOzs7O1FBR3BCLFdBQU0sR0FBWSxFQUFFLENBQUM7Ozs7OztRQWtCckIsYUFBUSxHQUFxQixNQUFNLENBQUM7Ozs7OztRQWVwQyxtQkFBYyxHQUFvQixJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFLOUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxjQUFjLFFBQVEsRUFBRSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNKOzs7Ozs7SUEvRkcsMENBQThDOzs7OztJQUs5QyxvQ0FBeUI7Ozs7O0lBR3pCLHNDQUEyQjs7Ozs7O0lBSzNCLHdDQUEyQjs7Ozs7SUFHM0IsK0JBQXlCOzs7OztJQUd6Qix1Q0FBNkI7Ozs7O0lBSzdCLDZCQUFtQjs7Ozs7SUFLbkIsK0JBQWtEOzs7Ozs7SUFLbEQsb0NBQTBDOzs7Ozs7SUFLMUMsZ0NBQWlDOzs7Ozs7SUFLakMsd0NBQThDOzs7Ozs7SUFLOUMsNENBQTBDOzs7OztJQUcxQyxnQ0FBMkI7Ozs7O0lBRzNCLGlDQUE0Qjs7Ozs7OztJQU01QixtQ0FBa0M7Ozs7Ozs7SUFNbEMsb0NBQW1DOzs7Ozs7O0lBTW5DLG1DQUEyQzs7Ozs7OztJQU0zQyxvQ0FBbUM7Ozs7O0lBR25DLG1DQUFpQzs7Ozs7OztJQU1qQyx5Q0FBa0U7O0lBRWxFLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGlhbG9nLWNvbmZpZy5jbGFzc1xuICovXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb29wU2Nyb2xsU3RyYXRlZ3ksIFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5sZXQgdW5pcXVlSWQgPSAwO1xuXG4vKiogUG9zc2libGUgb3ZlcnJpZGVzIGZvciBhIGRpYWxvZydzIHBvc2l0aW9uLiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQb3NpdGlvbiB7XG4gICAgLyoqIE92ZXJyaWRlIGZvciB0aGUgZGlhbG9nJ3MgdG9wIHBvc2l0aW9uLiAqL1xuICAgIHRvcD86IHN0cmluZztcblxuICAgIC8qKiBPdmVycmlkZSBmb3IgdGhlIGRpYWxvZydzIGJvdHRvbSBwb3NpdGlvbi4gKi9cbiAgICBib3R0b20/OiBzdHJpbmc7XG5cbiAgICAvKiogT3ZlcnJpZGUgZm9yIHRoZSBkaWFsb2cncyBsZWZ0IHBvc2l0aW9uLiAqL1xuICAgIGxlZnQ/OiBzdHJpbmc7XG5cbiAgICAvKiogT3ZlcnJpZGUgZm9yIHRoZSBkaWFsb2cncyByaWdodCBwb3NpdGlvbi4gKi9cbiAgICByaWdodD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE93bERpYWxvZ0NvbmZpZyB7XG4gICAgLyoqXG4gICAgICogSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBkZXNjcmliZXMgdGhlIGRpYWxvZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXJpYURlc2NyaWJlZEJ5Pzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGZvY3VzIHRoZSBkaWFsb2cgd2hlbiB0aGUgZGlhbG9nIGlzIG9wZW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvRm9jdXM/ID0gdHJ1ZTtcblxuICAgIC8qKiBXaGV0aGVyIHRoZSBkaWFsb2cgaGFzIGEgYmFja2Ryb3AuICovXG4gICAgcHVibGljIGhhc0JhY2tkcm9wPyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gc3R5bGUgZm9yIHRoZSBiYWNrZHJvcFxuICAgICAqICovXG4gICAgcHVibGljIGJhY2tkcm9wU3R5bGU/OiBhbnk7XG5cbiAgICAvKiogRGF0YSBiZWluZyBpbmplY3RlZCBpbnRvIHRoZSBjaGlsZCBjb21wb25lbnQuICovXG4gICAgcHVibGljIGRhdGE/OiBhbnkgPSBudWxsO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgY2FuIHVzZSBlc2NhcGUgb3IgY2xpY2tpbmcgb3V0c2lkZSB0byBjbG9zZSBhIG1vZGFsLiAqL1xuICAgIHB1YmxpYyBkaXNhYmxlQ2xvc2U/ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJRCBmb3IgdGhlIG1vZGFsLiBJZiBvbWl0dGVkLCBhIHVuaXF1ZSBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGlkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFSSUEgcm9sZSBvZiB0aGUgZGlhbG9nIGVsZW1lbnQuXG4gICAgICovXG4gICAgcHVibGljIHJvbGU/OiAnZGlhbG9nJyB8ICdhbGVydGRpYWxvZycgPSAnZGlhbG9nJztcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBjbGFzcyBmb3IgdGhlIHBhbmVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBwYW5lQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogTW91c2UgRXZlbnRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBldmVudD86IE1vdXNlRXZlbnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGNsYXNzIGZvciB0aGUgYmFja2Ryb3BcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBiYWNrZHJvcENsYXNzPzogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRpYWxvZyBzaG91bGQgY2xvc2Ugd2hlbiB0aGUgdXNlciBnb2VzIGJhY2t3YXJkcy9mb3J3YXJkcyBpbiBoaXN0b3J5LlxuICAgICAqICovXG4gICAgcHVibGljIGNsb3NlT25OYXZpZ2F0aW9uPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKiogV2lkdGggb2YgdGhlIGRpYWxvZy4gKi9cbiAgICBwdWJsaWMgd2lkdGg/OiBzdHJpbmcgPSAnJztcblxuICAgIC8qKiBIZWlnaHQgb2YgdGhlIGRpYWxvZy4gKi9cbiAgICBwdWJsaWMgaGVpZ2h0Pzogc3RyaW5nID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluLXdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBtaW5XaWR0aD86IG51bWJlciB8IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4taGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBtaW5IZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4LXdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyA9ICc4NXZ3JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBtYXhIZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgICAvKiogUG9zaXRpb24gb3ZlcnJpZGVzLiAqL1xuICAgIHB1YmxpYyBwb3NpdGlvbj86IERpYWxvZ1Bvc2l0aW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbCBzdHJhdGVneSB3aGVuIHRoZSBkaWFsb2cgaXMgb3BlblxuICAgICAqIExlYXJuIG1vcmUgdGhpcyBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvb3ZlcmxheS9vdmVydmlldyNzY3JvbGwtc3RyYXRlZ2llc1xuICAgICAqICovXG4gICAgcHVibGljIHNjcm9sbFN0cmF0ZWd5PzogU2Nyb2xsU3RyYXRlZ3kgPSBuZXcgTm9vcFNjcm9sbFN0cmF0ZWd5KCk7XG5cbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IGBvd2wtZGlhbG9nLSR7dW5pcXVlSWQrK31gO1xuICAgIH1cbn1cbiJdfQ==