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
export class NativeDateTimeModule {
}
NativeDateTimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
                ],
            },] }
];
const ɵ0 = OWL_NATIVE_DATE_TIME_FORMATS;
export class OwlNativeDateTimeModule {
}
OwlNativeDateTimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [NativeDateTimeModule],
                providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: ɵ0 }],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waWNrLWRhdGV0aW1lLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGltZS9hZGFwdGVyL25hdGl2ZS1kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFRL0UsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTmhDLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRTtvQkFDUCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDO2lCQUM5RDthQUNKOztXQU0wRCw0QkFBNEI7QUFFdkYsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxJQUE4QixFQUFDLENBQUM7YUFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIG5hdGl2ZS1kYXRlLXRpbWUubW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xuaW1wb3J0IHsgTmF0aXZlRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xuaW1wb3J0IHsgT1dMX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcbmltcG9ydCB7IE9XTF9OQVRJVkVfREFURV9USU1FX0ZPUk1BVFMgfSBmcm9tICcuL25hdGl2ZS1kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUGxhdGZvcm1Nb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogRGF0ZVRpbWVBZGFwdGVyLCB1c2VDbGFzczogTmF0aXZlRGF0ZVRpbWVBZGFwdGVyfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRlVGltZU1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZURhdGVUaW1lTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogT1dMX05BVElWRV9EQVRFX1RJTUVfRk9STUFUU31dLFxufSlcbmV4cG9ydCBjbGFzcyBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB7XG59XG4iXX0=