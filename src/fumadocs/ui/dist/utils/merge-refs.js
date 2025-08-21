"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRefs = mergeRefs;
function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        refs.forEach(function (ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                ref.current = value;
            }
        });
    };
}
