/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * numberFixedLen.pipe
 */
import { Pipe } from '@angular/core';
var NumberFixedLenPipe = /** @class */ (function () {
    function NumberFixedLenPipe() {
    }
    /**
     * @param {?} num
     * @param {?} len
     * @return {?}
     */
    NumberFixedLenPipe.prototype.transform = /**
     * @param {?} num
     * @param {?} len
     * @return {?}
     */
    function (num, len) {
        /** @type {?} */
        var number = Math.floor(num);
        /** @type {?} */
        var length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        /** @type {?} */
        var numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    };
    NumberFixedLenPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'numberFixedLen'
                },] }
    ];
    return NumberFixedLenPipe;
}());
export { NumberFixedLenPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyZWRGaXhMZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL251bWJlcmVkRml4TGVuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFvQkEsQ0FBQzs7Ozs7O0lBaEJHLHNDQUFTOzs7OztJQUFULFVBQVcsR0FBVyxFQUFFLEdBQVc7O1lBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRTlCLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7O1lBRUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUM5QixTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7O2dCQW5CSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLGdCQUFnQjtpQkFDekI7O0lBa0JELHlCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FqQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBudW1iZXJGaXhlZExlbi5waXBlXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ251bWJlckZpeGVkTGVuJ1xufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJGaXhlZExlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oIG51bTogbnVtYmVyLCBsZW46IG51bWJlciApOiBhbnkge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKG51bSk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3IobGVuKTtcblxuICAgICAgICBpZiAobnVtID09PSBudWxsIHx8IGlzTmFOKG51bWJlcikgfHwgaXNOYU4obGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBudW1TdHJpbmcgPSBudW1iZXIudG9TdHJpbmcoKTtcblxuICAgICAgICB3aGlsZSAobnVtU3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgbnVtU3RyaW5nID0gJzAnICsgbnVtU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bVN0cmluZztcbiAgICB9XG59XG4iXX0=