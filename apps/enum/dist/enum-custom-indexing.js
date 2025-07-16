"use strict";
/**
 * 중간에 숫자로 index 를 매긴다면,
 * 다음 값 부터는 해당 index 부터 다시 1씩 증가하며 설정된다.
 */
var CustomIndex;
(function (CustomIndex) {
    CustomIndex[CustomIndex["A"] = 0] = "A";
    CustomIndex[CustomIndex["B"] = 10] = "B";
    CustomIndex[CustomIndex["C"] = 11] = "C";
    CustomIndex[CustomIndex["D"] = 12] = "D";
    CustomIndex[CustomIndex["E"] = 13] = "E";
})(CustomIndex || (CustomIndex = {}));
console.log(CustomIndex.A); // 0
console.log(CustomIndex.B); // 10
console.log(CustomIndex.C); // 11
console.log(CustomIndex[13]); // 'E'
console.log(CustomIndex[9]); // undefined
