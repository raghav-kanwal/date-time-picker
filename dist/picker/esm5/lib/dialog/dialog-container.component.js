/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * dialog-container.component
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, ViewChild } from '@angular/core';
import { animate, animateChild, keyframes, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
/** @type {?} */
var zoomFadeIn = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
};
/** @type {?} */
var zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
};
var OwlDialogContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OwlDialogContainerComponent, _super);
    function OwlDialogContainerComponent(changeDetector, elementRef, focusTrapFactory, document) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.document = document;
        /**
         * ID of the element that should be considered as the dialog's label.
         */
        _this.ariaLabelledBy = null;
        /**
         * Emits when an animation state changes.
         */
        _this.animationStateChanged = new EventEmitter();
        _this.isAnimating = false;
        _this.state = 'enter';
        // for animation purpose
        _this.params = {
            x: '0px',
            y: '0px',
            ox: '50%',
            oy: '50%',
            scale: 0
        };
        // A variable to hold the focused element before the dialog was open.
        // This would help us to refocus back to element when the dialog was closed.
        _this.elementFocusedBeforeDialogWasOpened = null;
        return _this;
    }
    Object.defineProperty(OwlDialogContainerComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerClass", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerTabIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerRole", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config.role || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaLabelledby", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ariaLabelledBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAriaDescribedby", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config.ariaDescribedBy || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlDialogContainerComponent.prototype, "owlDialogContainerAnimation", {
        get: /**
         * @return {?}
         */
        function () {
            return { value: this.state, params: this.params };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.attachComponentPortal = /**
     * Attach a ComponentPortal as content to this dialog container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach dialog content after content is already attached');
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.attachTemplatePortal = /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        throw new Error('Method not implemented.');
    };
    /**
     * @param {?} config
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config = config;
        if (config.event) {
            this.calculateZoomOrigin(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isAnimating = true;
        this.animationStateChanged.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.onAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.animationStateChanged.emit(event);
        this.isAnimating = false;
    };
    /**
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.startExitAnimation = /**
     * @return {?}
     */
    function () {
        this.state = 'exit';
        this.changeDetector.markForCheck();
    };
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     * @private
     * @param {?} event
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.calculateZoomOrigin = /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event) {
            return;
        }
        /** @type {?} */
        var clientX = event.clientX;
        /** @type {?} */
        var clientY = event.clientY;
        /** @type {?} */
        var wh = window.innerWidth / 2;
        /** @type {?} */
        var hh = window.innerHeight / 2;
        /** @type {?} */
        var x = clientX - wh;
        /** @type {?} */
        var y = clientY - hh;
        /** @type {?} */
        var ox = clientX / window.innerWidth;
        /** @type {?} */
        var oy = clientY / window.innerHeight;
        this.params.x = x + "px";
        this.params.y = y + "px";
        this.params.ox = ox * 100 + "%";
        this.params.oy = oy * 100 + "%";
        this.params.scale = 0;
        return;
    };
    /**
     * Save the focused element before dialog was open
     */
    /**
     * Save the focused element before dialog was open
     * @private
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.savePreviouslyFocusedElement = /**
     * Save the focused element before dialog was open
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = (/** @type {?} */ (this.document
                .activeElement));
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.elementRef.nativeElement.focus(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.trapFocus = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this._config.autoFocus) {
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * @private
     * @return {?}
     */
    OwlDialogContainerComponent.prototype.restoreFocus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = this.elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
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
    OwlDialogContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FocusTrapFactory },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    OwlDialogContainerComponent.propDecorators = {
        portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }]
    };
    return OwlDialogContainerComponent;
}(BasePortalOutlet));
export { OwlDialogContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFFVixZQUFZLEVBQ1osTUFBTSxFQUVOLFFBQVEsRUFDUixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE9BQU8sRUFDUCxZQUFZLEVBRVosU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNWLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFDSCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUdsQixNQUFNLHFCQUFxQixDQUFDOztJQUd2QixVQUFVLEdBQUc7SUFDZixPQUFPLEVBQUUsQ0FBQztJQUNWLFNBQVMsRUFBRSwwREFBMEQ7Q0FDeEU7O0lBQ0ssY0FBYyxHQUFHO0lBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ1YsU0FBUyxFQUFFLDBEQUEwRDtJQUNyRSxlQUFlLEVBQUUsbUJBQW1CO0NBQ3ZDO0FBRUQ7SUFrRGlELHVEQUFnQjtJQWdFN0QscUNBQ1ksY0FBaUMsRUFDakMsVUFBc0IsRUFDdEIsZ0JBQWtDLEVBR2xDLFFBQWE7UUFOekIsWUFRSSxpQkFBTyxTQUNWO1FBUlcsb0JBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFHbEMsY0FBUSxHQUFSLFFBQVEsQ0FBSzs7OztRQTdEbEIsb0JBQWMsR0FBa0Is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QUUseUJBQXlCO3dCQUN6RCxpQkFBaUIsRUFBRSw0QkFBNEI7d0JBQy9DLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLGFBQWEsRUFBRSx3QkFBd0I7d0JBQ3ZDLHdCQUF3QixFQUFFLGtDQUFrQzt3QkFDNUQseUJBQXlCLEVBQUUsbUNBQW1DO3dCQUM5RCxlQUFlLEVBQUUsNkJBQTZCO3FCQUNqRDtpQkFDSjs7OztnQkF6RkcsaUJBQWlCO2dCQUdqQixVQUFVO2dCQWtCTSxnQkFBZ0I7Z0RBeUkzQixRQUFRLFlBQ1IsTUFBTSxTQUFDLFFBQVE7OzsrQkFuRW5CLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQThMaEQsa0NBQUM7Q0FBQSxBQWxQRCxDQWtEaUQsZ0JBQWdCLEdBZ01oRTtTQWhNWSwyQkFBMkI7OztJQUVwQyxtREFDOEI7Ozs7OztJQUc5QixnREFBNkI7Ozs7O0lBRzdCLHFEQUE0Qzs7Ozs7SUFHNUMsNERBQWtFOztJQUVsRSxrREFBMkI7Ozs7O0lBRTNCLDhDQUFpQzs7Ozs7SUFLakMsNENBQW1EOzs7OztJQUduRCw2Q0FNRTs7Ozs7SUFJRiwwRUFBdUU7Ozs7O0lBK0JuRSxxREFBeUM7Ozs7O0lBQ3pDLGlEQUE4Qjs7Ozs7SUFDOUIsdURBQTBDOzs7OztJQUMxQywrQ0FFcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRpYWxvZy1jb250YWluZXIuY29tcG9uZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgT25Jbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgYW5pbWF0ZSxcbiAgICBhbmltYXRlQ2hpbGQsXG4gICAgQW5pbWF0aW9uRXZlbnQsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gICAgQmFzZVBvcnRhbE91dGxldCxcbiAgICBDZGtQb3J0YWxPdXRsZXQsXG4gICAgQ29tcG9uZW50UG9ydGFsLFxuICAgIFRlbXBsYXRlUG9ydGFsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3dsRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnLmNsYXNzJztcblxuY29uc3Qgem9vbUZhZGVJbiA9IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoe3sgeCB9fSkgdHJhbnNsYXRlWSh7eyB5IH19KSBzY2FsZSh7e3NjYWxlfX0pJ1xufTtcbmNvbnN0IHpvb21GYWRlSW5Gcm9tID0ge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCh7eyB4IH19KSB0cmFuc2xhdGVZKHt7IHkgfX0pIHNjYWxlKHt7c2NhbGV9fSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3t7IG94IH19IHt7IG95IH19J1xufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvd2wtZGlhbG9nLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignc2xpZGVNb2RhbCcsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgJ3ZvaWQgPT4gZW50ZXInLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoem9vbUZhZGVJbkZyb20pLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCczMDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSknLCBzdHlsZSgnKicpKSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICcxNTBtcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1KScsIG9mZnNldDogMC4zIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoLjk1KScsIG9mZnNldDogMC44IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDEuMCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUNoaWxkKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3g6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3k6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAgICAgICAgICdlbnRlciA9PiBleGl0JyxcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZUNoaWxkKCksIGFuaW1hdGUoMjAwLCBzdHlsZSh6b29tRmFkZUluKSldLFxuICAgICAgICAgICAgICAgIHsgcGFyYW1zOiB7IHg6ICcwcHgnLCB5OiAnMHB4Jywgb3g6ICc1MCUnLCBveTogJzUwJScgfSB9XG4gICAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoQHNsaWRlTW9kYWwuc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgICAgICcoQHNsaWRlTW9kYWwuZG9uZSknOiAnb25BbmltYXRpb25Eb25lKCRldmVudCknLFxuICAgICAgICAnW2NsYXNzLm93bC1kaWFsb2ctY29udGFpbmVyXSc6ICdvd2xEaWFsb2dDb250YWluZXJDbGFzcycsXG4gICAgICAgICdbYXR0ci50YWJpbmRleF0nOiAnb3dsRGlhbG9nQ29udGFpbmVyVGFiSW5kZXgnLFxuICAgICAgICAnW2F0dHIuaWRdJzogJ293bERpYWxvZ0NvbnRhaW5lcklkJyxcbiAgICAgICAgJ1thdHRyLnJvbGVdJzogJ293bERpYWxvZ0NvbnRhaW5lclJvbGUnLFxuICAgICAgICAnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XSc6ICdvd2xEaWFsb2dDb250YWluZXJBcmlhTGFiZWxsZWRieScsXG4gICAgICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdvd2xEaWFsb2dDb250YWluZXJBcmlhRGVzY3JpYmVkYnknLFxuICAgICAgICAnW0BzbGlkZU1vZGFsXSc6ICdvd2xEaWFsb2dDb250YWluZXJBbmltYXRpb24nXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBPd2xEaWFsb2dDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0XG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHBvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xuXG4gICAgLyoqIFRoZSBjbGFzcyB0aGF0IHRyYXBzIGFuZCBtYW5hZ2VzIGZvY3VzIHdpdGhpbiB0aGUgZGlhbG9nLiAqL1xuICAgIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgICAvKiogSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyB0aGUgZGlhbG9nJ3MgbGFiZWwuICovXG4gICAgcHVibGljIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAgIC8qKiBFbWl0cyB3aGVuIGFuIGFuaW1hdGlvbiBzdGF0ZSBjaGFuZ2VzLiAqL1xuICAgIHB1YmxpYyBhbmltYXRpb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gICAgcHVibGljIGlzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9jb25maWc6IE93bERpYWxvZ0NvbmZpZztcbiAgICBnZXQgY29uZmlnKCk6IE93bERpYWxvZ0NvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyB8ICdleGl0JyA9ICdlbnRlcic7XG5cbiAgICAvLyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VcbiAgICBwcml2YXRlIHBhcmFtczogYW55ID0ge1xuICAgICAgICB4OiAnMHB4JyxcbiAgICAgICAgeTogJzBweCcsXG4gICAgICAgIG94OiAnNTAlJyxcbiAgICAgICAgb3k6ICc1MCUnLFxuICAgICAgICBzY2FsZTogMFxuICAgIH07XG5cbiAgICAvLyBBIHZhcmlhYmxlIHRvIGhvbGQgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgdGhlIGRpYWxvZyB3YXMgb3Blbi5cbiAgICAvLyBUaGlzIHdvdWxkIGhlbHAgdXMgdG8gcmVmb2N1cyBiYWNrIHRvIGVsZW1lbnQgd2hlbiB0aGUgZGlhbG9nIHdhcyBjbG9zZWQuXG4gICAgcHJpdmF0ZSBlbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lclRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVySWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5pZDtcbiAgICB9XG5cbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyUm9sZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJvbGUgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgb3dsRGlhbG9nQ29udGFpbmVyQXJpYUxhYmVsbGVkYnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJpYUxhYmVsbGVkQnk7XG4gICAgfVxuXG4gICAgZ2V0IG93bERpYWxvZ0NvbnRhaW5lckFyaWFEZXNjcmliZWRieSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFyaWFEZXNjcmliZWRCeSB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldCBvd2xEaWFsb2dDb250YWluZXJBbmltYXRpb24oKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuc3RhdGUsIHBhcmFtczogdGhpcy5wYXJhbXMgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKVxuICAgICAgICBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGEgQ29tcG9uZW50UG9ydGFsIGFzIGNvbnRlbnQgdG8gdGhpcyBkaWFsb2cgY29udGFpbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4oXG4gICAgICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+XG4gICAgKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgICdBdHRlbXB0aW5nIHRvIGF0dGFjaCBkaWFsb2cgY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4oXG4gICAgICAgIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz5cbiAgICApOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbmZpZyhjb25maWc6IE93bERpYWxvZ0NvbmZpZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5ldmVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVab29tT3JpZ2luKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkFuaW1hdGlvblN0YXJ0KCBldmVudDogQW5pbWF0aW9uRXZlbnQgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BbmltYXRpb25Eb25lKCBldmVudDogQW5pbWF0aW9uRXZlbnQgKTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdleGl0Jykge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0RXhpdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdleGl0JztcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgb3JpZ2luIHVzZWQgaW4gdGhlIGB6b29tRmFkZUluRnJvbSgpYFxuICAgICAqIGZvciBhbmltYXRpb24gcHVycG9zZVxuICAgICAqL1xuICAgIHByaXZhdGUgY2FsY3VsYXRlWm9vbU9yaWdpbihldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBjb25zdCB3aCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgaGggPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCB4ID0gY2xpZW50WCAtIHdoO1xuICAgICAgICBjb25zdCB5ID0gY2xpZW50WSAtIGhoO1xuICAgICAgICBjb25zdCBveCA9IGNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29uc3Qgb3kgPSBjbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIHRoaXMucGFyYW1zLnggPSBgJHt4fXB4YDtcbiAgICAgICAgdGhpcy5wYXJhbXMueSA9IGAke3l9cHhgO1xuICAgICAgICB0aGlzLnBhcmFtcy5veCA9IGAke294ICogMTAwfSVgO1xuICAgICAgICB0aGlzLnBhcmFtcy5veSA9IGAke295ICogMTAwfSVgO1xuICAgICAgICB0aGlzLnBhcmFtcy5zY2FsZSA9IDA7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgZGlhbG9nIHdhcyBvcGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZCA9IHRoaXMuZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9Gb2N1cykge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvRm9jdXMgPSB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgICAgIGlmICh0b0ZvY3VzICYmIHR5cGVvZiB0b0ZvY3VzLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==