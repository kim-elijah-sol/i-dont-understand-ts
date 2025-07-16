"use strict";
/**
 * enum 은 아래와 같이 각 멤버에 값을 설정하지 않았다면, 0부터 값이 시작된다.
 */
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week.Sun); // 0
console.log(Week.Wed); // 3
console.log(Week[6]); // 'Sat'
console.log(Week[7]); // undefined
