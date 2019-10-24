/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time-picker.animations
 */
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var owlDateTimePickerAnimations = {
    transformPicker: trigger('transformPicker', [
        state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
        state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
        transition('void => enter', group([
            query('@fadeInPicker', animateChild(), { optional: true }),
            animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('enter => void', animate('100ms linear', style({ opacity: 0 })))
    ]),
    fadeInPicker: trigger('fadeInPicker', [
        state('enter', style({ opacity: 1 })),
        state('void', style({ opacity: 0 })),
        transition('void => enter', animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLXBpY2tlci5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0gsT0FBTyxFQUFFLFlBQVksRUFFckIsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1YsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsTUFBTSxLQUFPLDJCQUEyQixHQUdwQztJQUVBLGVBQWUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7UUFDeEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzVELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUM3RCxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztZQUM5QixLQUFLLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzFELE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQztTQUNwRCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUM1RSxDQUFDO0lBRUYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUU7UUFDbEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7S0FDdkYsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLXRpbWUtcGlja2VyLmFuaW1hdGlvbnNcbiAqL1xuaW1wb3J0IHtcbiAgICBhbmltYXRlLCBhbmltYXRlQ2hpbGQsXG4gICAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICAgIGdyb3VwLFxuICAgIHF1ZXJ5LFxuICAgIHN0YXRlLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IG93bERhdGVUaW1lUGlja2VyQW5pbWF0aW9uczoge1xuICAgIHJlYWRvbmx5IHRyYW5zZm9ybVBpY2tlcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xuICAgIHJlYWRvbmx5IGZhZGVJblBpY2tlcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xufSA9IHtcblxuICAgIHRyYW5zZm9ybVBpY2tlcjogdHJpZ2dlcigndHJhbnNmb3JtUGlja2VyJywgW1xuICAgICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgxLCAwKSd9KSksXG4gICAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxLCAxKSd9KSksXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZW50ZXInLCBncm91cChbXG4gICAgICAgICAgICBxdWVyeSgnQGZhZGVJblBpY2tlcicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSknKVxuICAgICAgICBdKSksXG4gICAgICAgIHRyYW5zaXRpb24oJ2VudGVyID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSlcbiAgICBdKSxcblxuICAgIGZhZGVJblBpY2tlcjogdHJpZ2dlcignZmFkZUluUGlja2VyJywgW1xuICAgICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcbiAgICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7b3BhY2l0eTogMH0pKSxcbiAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBlbnRlcicsIGFuaW1hdGUoJzQwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpJykpLFxuICAgIF0pXG59O1xuIl19