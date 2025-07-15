"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
//# sourceMappingURL=sum.js.map