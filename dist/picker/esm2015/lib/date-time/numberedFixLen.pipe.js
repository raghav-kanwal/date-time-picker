/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * numberFixedLen.pipe
 */
import { Pipe } from '@angular/core';
export class NumberFixedLenPipe {
    /**
     * @param {?} num
     * @param {?} len
     * @return {?}
     */
    transform(num, len) {
        /** @type {?} */
        const number = Math.floor(num);
        /** @type {?} */
        const length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        /** @type {?} */
        let numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    }
}
NumberFixedLenPipe.decorators = [
    { type: Pipe, args: [{
                name: 'numberFixedLen'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyZWRGaXhMZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGF0ZS10aW1lL251bWJlcmVkRml4TGVuLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUMzQixTQUFTLENBQUUsR0FBVyxFQUFFLEdBQVc7O2NBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRTlCLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7O1lBRUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFFakMsT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUM5QixTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7OztZQW5CSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGdCQUFnQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbnVtYmVyRml4ZWRMZW4ucGlwZVxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdudW1iZXJGaXhlZExlbidcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRml4ZWRMZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKCBudW06IG51bWJlciwgbGVuOiBudW1iZXIgKTogYW55IHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihudW0pO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKGxlbik7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gbnVsbCB8fCBpc05hTihudW1iZXIpIHx8IGlzTmFOKGxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtU3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgd2hpbGUgKG51bVN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIG51bVN0cmluZyA9ICcwJyArIG51bVN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1TdHJpbmc7XG4gICAgfVxufVxuIl19