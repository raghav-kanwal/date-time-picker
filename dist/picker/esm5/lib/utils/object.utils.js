/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * object.utils
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
export function extendObject(dest) {
    var e_1, _a;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    try {
        for (var sources_1 = tslib_1.__values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            if (source != null) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        dest[key] = source[key];
                    }
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (sources_1_1 && !sources_1_1.done && (_a = sources_1.return)) _a.call(sources_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return dest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGljay1kYXRldGltZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9vYmplY3QudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBUzs7SUFBRSxpQkFBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLGdDQUFpQjs7SUFDckQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2QsTUFBTSxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUNqRTs7UUFFRCxLQUFxQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO1lBQXpCLElBQU0sTUFBTSxvQkFBQTtZQUNiLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7b0JBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDM0I7aUJBQ0o7YUFDSjtTQUNKOzs7Ozs7Ozs7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBvYmplY3QudXRpbHNcbiAqL1xuXG5cbi8qKlxuICogRXh0ZW5kcyBhbiBvYmplY3Qgd2l0aCB0aGUgKmVudW1lcmFibGUqIGFuZCAqb3duKiBwcm9wZXJ0aWVzIG9mIG9uZSBvciBtb3JlIHNvdXJjZSBvYmplY3RzLFxuICogc2ltaWxhciB0byBPYmplY3QuYXNzaWduLlxuICpcbiAqIEBwYXJhbSBkZXN0IFRoZSBvYmplY3Qgd2hpY2ggd2lsbCBoYXZlIHByb3BlcnRpZXMgY29waWVkIHRvIGl0LlxuICogQHBhcmFtIHNvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3RzIGZyb20gd2hpY2ggcHJvcGVydGllcyB3aWxsIGJlIGNvcGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZE9iamVjdChkZXN0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgICBpZiAoZGVzdCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBkZXN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbn1cbiJdfQ==