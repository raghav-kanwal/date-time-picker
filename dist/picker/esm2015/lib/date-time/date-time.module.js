/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * date-time.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { OwlDateTimeTriggerDirective } from './date-time-picker-trigger.directive';
import { OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, OwlDateTimeComponent } from './date-time-picker.component';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlMonthViewComponent } from './calendar-month-view.component';
import { OwlCalendarBodyComponent } from './calendar-body.component';
import { OwlYearViewComponent } from './calendar-year-view.component';
import { OwlMultiYearViewComponent } from './calendar-multi-year-view.component';
import { OwlTimerBoxComponent } from './timer-box.component';
import { OwlTimerComponent } from './timer.component';
import { NumberFixedLenPipe } from './numberedFixLen.pipe';
import { OwlCalendarComponent } from './calendar.component';
import { OwlDateTimeInlineComponent } from './date-time-inline.component';
import { OwlDialogModule } from '../dialog/dialog.module';
export class OwlDateTimeModule {
}
OwlDateTimeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
                exports: [
                    OwlCalendarComponent,
                    OwlTimerComponent,
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeInlineComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                ],
                declarations: [
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeContainerComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                    OwlTimerComponent,
                    OwlTimerBoxComponent,
                    OwlCalendarComponent,
                    OwlCalendarBodyComponent,
                    NumberFixedLenPipe,
                    OwlDateTimeInlineComponent,
                ],
                providers: [
                    OwlDateTimeIntl,
                    OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [
                    OwlDateTimeContainerComponent,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL2RhdGUtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0csT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXNDMUQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBcEM3QixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDO2dCQUNuRSxPQUFPLEVBQUU7b0JBQ0wsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLDZCQUE2QjtvQkFDN0IseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLDBCQUEwQjtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YscUNBQXFDO2lCQUN4QztnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsNkJBQTZCO2lCQUNoQzthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLXRpbWUubW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE93bERhdGVUaW1lVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPV0xfRFRQSUNLRVJfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLCBPd2xEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xEYXRlVGltZUlucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPd2xEYXRlVGltZUludGwgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlJztcbmltcG9ydCB7IE93bE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsQ2FsZW5kYXJCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xZZWFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIteWVhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xNdWx0aVllYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1tdWx0aS15ZWFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE93bFRpbWVyQm94Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lci1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IE93bFRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRml4ZWRMZW5QaXBlIH0gZnJvbSAnLi9udW1iZXJlZEZpeExlbi5waXBlJztcbmltcG9ydCB7IE93bENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbmxpbmVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1pbmxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE93bERpYWxvZ01vZHVsZSB9IGZyb20gJy4uL2RpYWxvZy9kaWFsb2cubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBPd2xEaWFsb2dNb2R1bGUsIEExMXlNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgT3dsQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgICAgIE93bFRpbWVyQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZUlubGluZUNvbXBvbmVudCxcbiAgICAgICAgT3dsTXVsdGlZZWFyVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXG4gICAgICAgIE93bE1vbnRoVmlld0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBPd2xEYXRlVGltZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgT3dsTXVsdGlZZWFyVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXG4gICAgICAgIE93bE1vbnRoVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsVGltZXJDb21wb25lbnQsXG4gICAgICAgIE93bFRpbWVyQm94Q29tcG9uZW50LFxuICAgICAgICBPd2xDYWxlbmRhckNvbXBvbmVudCxcbiAgICAgICAgT3dsQ2FsZW5kYXJCb2R5Q29tcG9uZW50LFxuICAgICAgICBOdW1iZXJGaXhlZExlblBpcGUsXG4gICAgICAgIE93bERhdGVUaW1lSW5saW5lQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE93bERhdGVUaW1lSW50bCxcbiAgICAgICAgT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE93bERhdGVUaW1lTW9kdWxlIHtcbn1cbiJdfQ==