"use strict";
function calculateTax(income, tasyear) {
    if (tasyear < 2022)
        return income * 1.2;
    return income * 1.5;
}
const total = calculateTax(1000, 2022);
console.log(total);
//# sourceMappingURL=index.js.map