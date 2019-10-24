/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * native-date-time.module
 */
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import { NativeDateTimeAdapter } from './native-date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './date-time-format.class';
import { OWL_NATIVE_DATE_TIME_FORMATS } from './native-date-time-format.class';
var NativeDateTimeModule = /** @class */ (function () {
    function NativeDateTimeModule() {
    }
    NativeDateTimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PlatformModule],
                    providers: [
                        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
                    ],
                },] }
    ];
    return NativeDateTimeModule;
}());
export { NativeDateTimeModule };
var ɵ0 = OWL_NATIVE_DATE_TIME_FORMATS;
var OwlNativeDateTimeModule = /** @class */ (function () {
    function OwlNativeDateTimeModule() {
    }
    OwlNativeDateTimeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NativeDateTimeModule],
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0 }],
                },] }
    ];
    return OwlNativeDateTimeModule;
}());
export { OwlNativeDateTimeModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL25hdGl2ZS1kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFL0U7SUFBQTtJQU9BLENBQUM7O2dCQVBBLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLFNBQVMsRUFBRTt3QkFDUCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDO3FCQUM5RDtpQkFDSjs7SUFFRCwyQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLG9CQUFvQjtTQUswQiw0QkFBNEI7QUFGdkY7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxJQUE4QixFQUFDLENBQUM7aUJBQ3hGOztJQUVELDhCQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBuYXRpdmUtZGF0ZS10aW1lLm1vZHVsZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIgfSBmcm9tICcuL2RhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcbmltcG9ydCB7IE5hdGl2ZURhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vbmF0aXZlLWRhdGUtdGltZS1hZGFwdGVyLmNsYXNzJztcbmltcG9ydCB7IE9XTF9EQVRFX1RJTUVfRk9STUFUUyB9IGZyb20gJy4vZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XG5pbXBvcnQgeyBPV0xfTkFUSVZFX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS10aW1lLWZvcm1hdC5jbGFzcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IERhdGVUaW1lQWRhcHRlciwgdXNlQ2xhc3M6IE5hdGl2ZURhdGVUaW1lQWRhcHRlcn0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlRGF0ZVRpbWVNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVEYXRlVGltZU1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE9XTF9EQVRFX1RJTUVfRk9STUFUUywgdXNlVmFsdWU6IE9XTF9OQVRJVkVfREFURV9USU1FX0ZPUk1BVFN9XSxcbn0pXG5leHBvcnQgY2xhc3MgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUge1xufVxuIl19