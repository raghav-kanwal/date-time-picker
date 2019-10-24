/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * dialog-container.component
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, ViewChild } from '@angular/core';
import { animate, animateChild, keyframes, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
/** @type {?} */
const zoomFadeIn = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
};
/** @type {?} */
const zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
export class OwlDialogContainerComponent extends BasePortalOutlet {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} document
     */
    constructor(changeDetector, elementRef, focusTrapFactory, document) {
        super();
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.document = document;
        /**
         * ID of the element that should be considered as the dialog's label.
         */
        this.ariaLabelledBy = null;
        /**
         * Emits when an animation state changes.
         */
        this.animationStateChanged = new EventEmitter();
        this.isAnimating = false;
        this.state = 'enter';
        // for animation purpose
        this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        // A variable to hold the focused element before the dialog was open.
        // This would help us to refocus back to element when the dialog was closed.
        this.elementFocusedBeforeDialogWasOpened = null;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerClass() {
        return true;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerTabIndex() {
        return -1;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerId() {
        return this._config.id;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerRole() {
        return this._config.role || null;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerAriaLabelledby() {
        return this.ariaLabelledBy;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerAriaDescribedby() {
        return this._config.ariaDescribedBy || null;
    }
    /**
     * @return {?}
     */
    get owlDialogContainerAnimation() {
        return { value: this.state, params: this.params };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        throw new Error('Method not implemented.');
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationStart(event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    }
    /**
     * @return {?}
     */
    startExitAnimation() {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    }
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     * @private
     * @param {?} event
     * @return {?}
     */
    calculateZoomOrigin(event) {
        if (!event) {
            return;
        }
        /** @type {?} */
        const clientX = event.clientX;
        /** @type {?} */
        const clientY = event.clientY;
        /** @type {?} */
        const wh = window.innerWidth / 2;
        /** @type {?} */
        const hh = window.innerHeight / 2;
        /** @type {?} */
        const x = clientX - wh;
        /** @type {?} */
        const y = clientY - hh;
        /** @type {?} */
        const ox = clientX / window.innerWidth;
        /** @type {?} */
        const oy = clientY / window.innerHeight;
        this.params.x = `${x}px`;
        this.params.y = `${y}px`;
        this.params.ox = `${ox * 100}%`;
        this.params.oy = `${oy * 100}%`;
        this.params.scale = 0;
        return;
    }
    /**
     * Save the focused element before dialog was open
     * @private
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this.document
                .activeElement));
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.elementRef.nativeElement.focus()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    /**
     * @private
     * @return {?}
     */
    restoreFocus() {
        /** @type {?} */
        const toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
OwlDialogContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'owl-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                animations: [
                    trigger('slideModal', [
                        transition('void => enter', [
                            style(zoomFadeInFrom),
                            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
                            animate('150ms', keyframes([
                                style({ transform: 'scale(1)', offset: 0 }),
                                style({ transform: 'scale(1.05)', offset: 0.3 }),
                                style({ transform: 'scale(.95)', offset: 0.8 }),
                                style({ transform: 'scale(1)', offset: 1.0 })
                            ])),
                            animateChild()
                        ], {
                            params: {
                                x: '0px',
                                y: '0px',
                                ox: '50%',
                                oy: '50%',
                                scale: 1
                            }
                        }),
                        transition('enter => exit', [animateChild(), animate(200, style(zoomFadeIn))], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
                    ])
                ],
                host: {
                    '(@slideModal.start)': 'onAnimationStart($event)',
                    '(@slideModal.done)': 'onAnimationDone($event)',
                    '[class.owl-dialog-container]': 'owlDialogContainerClass',
                    '[attr.tabindex]': 'owlDialogContainerTabIndex',
                    '[attr.id]': 'owlDialogContainerId',
                    '[attr.role]': 'owlDialogContainerRole',
                    '[attr.aria-labelledby]': 'owlDialogContainerAriaLabelledby',
                    '[attr.aria-describedby]': 'owlDialogContainerAriaDescribedby',
                    '[@slideModal]': 'owlDialogContainerAnimation'
                }
            }] }
];
/** @nocollapse */
OwlDialogContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
OwlDialogContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }]
};
if (false) {
    /** @type {?} */
    OwlDialogContainerComponent.prototype.portalOutlet;
    /**
     * The class that traps and manages focus within the dialog.
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.focusTrap;
    /**
     * ID of the element that should be considered as the dialog's label.
     * @type {?}
     */
    OwlDialogContainerComponent.prototype.ariaLabelledBy;
    /**
     * Emits when an animation state changes.
     * @type {?}
     */
    OwlDialogContainerComponent.prototype.animationStateChanged;
    /** @type {?} */
    OwlDialogContainerComponent.prototype.isAnimating;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.state;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.params;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.elementFocusedBeforeDialogWasOpened;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    OwlDialogContainerComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUVWLFlBQVksRUFDWixNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsT0FBTyxFQUNQLFlBQVksRUFFWixTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1YsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUNILGdCQUFnQixFQUNoQixlQUFlLEVBR2xCLE1BQU0scUJBQXFCLENBQUM7O01BR3ZCLFVBQVUsR0FBRztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsU0FBUyxFQUFFLDBEQUEwRDtDQUN4RTs7TUFDSyxjQUFjLEdBQUc7SUFDbkIsT0FBTyxFQUFFLENBQUM7SUFDVixTQUFTLEVBQUUsMERBQTBEO0lBQ3JFLGVBQWUsRUFBRSxtQkFBbUI7Q0FDdkM7QUFvREQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjs7Ozs7OztJQWdFN0QsWUFDWSxjQUFpQyxFQUNqQyxVQUFzQixFQUN0QixnQkFBa0MsRUFHbEMsUUFBYTtRQUVyQixLQUFLLEVBQUUsQ0FBQztRQVBBLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFHbEMsYUFBUSxHQUFSLFFBQVEsQ0FBSzs7OztR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TUFBTSxTQUFDLFFBQVE7OzsyQkFuRW5CLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBQTVDLG1EQUM4Qjs7Ozs7O0lBRzlCLGdEQUE2Qjs7Ozs7SUFHN0IscURBQTRDOzs7OztJQUc1Qyw0REFBa0U7O0lBRWxFLGtEQUEyQjs7Ozs7SUFFM0IsOENBQWlDOzs7OztJQUtqQyw0Q0FBbUQ7Ozs7O0lBR25ELDZDQU1FOzs7OztJQUlGLDBFQUF1RTs7Ozs7SUErQm5FLHFEQUF5Qzs7Ozs7SUFDekMsaURBQThCOzs7OztJQUM5Qix1REFBMEM7Ozs7O0lBQzFDLCtDQUVxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnRcbiAqL1xuXG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBFbWJlZGRlZFZpZXdSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEluamVjdCxcbiAgICBPbkluaXQsXG4gICAgT3B0aW9uYWwsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIGFuaW1hdGVDaGlsZCxcbiAgICBBbmltYXRpb25FdmVudCxcbiAgICBrZXlmcmFtZXMsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgICBCYXNlUG9ydGFsT3V0bGV0LFxuICAgIENka1BvcnRhbE91dGxldCxcbiAgICBDb21wb25lbnRQb3J0YWwsXG4gICAgVGVtcGxhdGVQb3J0YWxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBPd2xEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcuY2xhc3MnO1xuXG5jb25zdCB6b29tRmFkZUluID0ge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCh7eyB4IH19KSB0cmFuc2xhdGVZKHt7IHkgfX0pIHNjYWxlKHt7c2NhbGV9fSknXG59O1xuY29uc3Qgem9vbUZhZGVJbkZyb20gPSB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKHt7IHggfX0pIHRyYW5zbGF0ZVkoe3sgeSB9fSkgc2NhbGUoe3tzY2FsZX19KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAne3sgb3ggfX0ge3sgb3kgfX0nXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ293bC1kaWFsb2ctY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdzbGlkZU1vZGFsJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAndm9pZCA9PiBlbnRlcicsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSh6b29tRmFkZUluRnJvbSksXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKScsIHN0eWxlKCcqJykpLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzE1MG1zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9mZnNldDogMCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEuMDUpJywgb2Zmc2V0OiAwLjMgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSguOTUpJywgb2Zmc2V0OiAwLjggfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9mZnNldDogMS4wIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlQ2hpbGQoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBveDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBveTogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgJ2VudGVyID0+IGV4aXQnLFxuICAgICAgICAgICAgICAgIFthbmltYXRlQ2hpbGQoKSwgYW5pbWF0ZSgyMDAsIHN0eWxlKHpvb21GYWRlSW4pKV0sXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgeDogJzBweCcsIHk6ICcwcHgnLCBveDogJzUwJScsIG95OiAnNTAlJyB9IH1cbiAgICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhAc2xpZGVNb2RhbC5zdGFydCknOiAnb25BbmltYXRpb25TdGFydCgkZXZlbnQpJyxcbiAgICAgICAgJyhAc2xpZGVNb2RhbC5kb25lKSc6ICdvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KScsXG4gICAgICAgICdbY2xhc3Mub3dsLWRpYWxvZy1jb250YWluZXJdJzogJ293bERpYWxvZ0NvbnRhaW5lckNsYXNzJyxcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdvd2xEaWFsb2dDb250YWluZXJUYWJJbmRleCcsXG4gICAgICAgICdbYXR0ci5pZF0nOiAnb3dsRGlhbG9nQ29udGFpbmVySWQnLFxuICAgICAgICAnW2F0dHIucm9sZV0nOiAnb3dsRGlhbG9nQ29udGFpbmVyUm9sZScsXG4gICAgICAgICdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJzogJ293bERpYWxvZ0NvbnRhaW5lckFyaWFMYWJlbGxlZGJ5JyxcbiAgICAgICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ293bERpYWxvZ0NvbnRhaW5lckFyaWFEZXNjcmliZWRieScsXG4gICAgICAgICdbQHNsaWRlTW9kYWxdJzogJ293bERpYWxvZ0NvbnRhaW5lckFuaW1hdGlvbidcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XG5cbiAgICAvKiogVGhlIGNsYXNzIHRoYXQgdHJhcHMgYW5kIG1hbmFnZXMgZm9jdXMgd2l0aGluIHRoZSBkaWFsb2cuICovXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcblxuICAgIC8qKiBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHRoZSBkaWFsb2cncyBsYWJlbC4gKi9cbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gICAgLyoqIEVtaXRzIHdoZW4gYW4gYW5pbWF0aW9uIHN0YXRlIGNoYW5nZXMuICovXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgICBwdWJsaWMgaXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2NvbmZpZzogT3dsRGlhbG9nQ29uZmlnO1xuICAgIGdldCBjb25maWcoKTogT3dsRGlhbG9nQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcblxuICAgIC8vIGZvciBhbmltYXRpb24gcHVycG9zZVxuICAgIHByaXZhdGUgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgIHg6ICcwcHgnLFxuICAgICAgICB5OiAnMHB4JyxcbiAgICAgICAgb3g6ICc1MCUnLFxuICAgICAgICBveTogJzUwJScsXG4gICAgICAgIHNjYWxlOiAwXG4gICAgfTtcblxuICAgIC8vIEEgdmFyaWFibGUgdG8gaG9sZCB0aGUgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSB0aGUgZGlhbG9nIHdhcyBvcGVuLlxuICAgIC8vIFRoaXMgd291bGQgaGVscCB1cyB0byByZWZvY3VzIGJhY2sgdG8gZWxlbWVudCB3aGVuIHRoZSBkaWFsb2cgd2FzIGNsb3NlZC5cbiAgICBwcml2YXRlIGVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckNsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyVGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmlkO1xuICAgIH1cblxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJSb2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcucm9sZSB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJBcmlhTGFiZWxsZWRieSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWxsZWRCeTtcbiAgICB9XG5cbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQXJpYURlc2NyaWJlZGJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYXJpYURlc2NyaWJlZEJ5IHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckFuaW1hdGlvbigpOiBhbnkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5zdGF0ZSwgcGFyYW1zOiB0aGlzLnBhcmFtcyB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgICAgIEBPcHRpb25hbCgpXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpXG4gICAgICAgIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYSBDb21wb25lbnRQb3J0YWwgYXMgY29udGVudCB0byB0aGlzIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgcHVibGljIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICAgICAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD5cbiAgICApOiBDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICBpZiAodGhpcy5wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIGRpYWxvZyBjb250ZW50IGFmdGVyIGNvbnRlbnQgaXMgYWxyZWFkeSBhdHRhY2hlZCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihcbiAgICAgICAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPlxuICAgICk6IEVtYmVkZGVkVmlld1JlZjxDPiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogT3dsRGlhbG9nQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICBpZiAoY29uZmlnLmV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVpvb21PcmlnaW4oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uQW5pbWF0aW9uU3RhcnQoIGV2ZW50OiBBbmltYXRpb25FdmVudCApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkRvbmUoIGV2ZW50OiBBbmltYXRpb25FdmVudCApOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZWQuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRFeGl0QW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2V4aXQnO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBvcmlnaW4gdXNlZCBpbiB0aGUgYHpvb21GYWRlSW5Gcm9tKClgXG4gICAgICogZm9yIGFuaW1hdGlvbiBwdXJwb3NlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVab29tT3JpZ2luKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIGNvbnN0IHdoID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgICAgICBjb25zdCBoaCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHggPSBjbGllbnRYIC0gd2g7XG4gICAgICAgIGNvbnN0IHkgPSBjbGllbnRZIC0gaGg7XG4gICAgICAgIGNvbnN0IG94ID0gY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjb25zdCBveSA9IGNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5wYXJhbXMueCA9IGAke3h9cHhgO1xuICAgICAgICB0aGlzLnBhcmFtcy55ID0gYCR7eX1weGA7XG4gICAgICAgIHRoaXMucGFyYW1zLm94ID0gYCR7b3ggKiAxMDB9JWA7XG4gICAgICAgIHRoaXMucGFyYW1zLm95ID0gYCR7b3kgKiAxMDB9JWA7XG4gICAgICAgIHRoaXMucGFyYW1zLnNjYWxlID0gMDtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSBkaWFsb2cgd2FzIG9wZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkID0gdGhpcy5kb2N1bWVudFxuICAgICAgICAgICAgICAgIC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdG9Gb2N1cyA9IHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQ7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICAgICAgaWYgKHRvRm9jdXMgJiYgdHlwZW9mIHRvRm9jdXMuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRvRm9jdXMuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19