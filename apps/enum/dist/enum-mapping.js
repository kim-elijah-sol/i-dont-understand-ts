"use strict";
var _Week;
(function (_Week) {
    _Week[_Week["Sun"] = 0] = "Sun";
    _Week[_Week["Mon"] = 1] = "Mon";
    _Week[_Week["Tue"] = 2] = "Tue";
    _Week[_Week["Wed"] = 3] = "Wed";
    _Week[_Week["Thu"] = 4] = "Thu";
    _Week[_Week["Fri"] = 5] = "Fri";
    _Week[_Week["Sat"] = 6] = "Sat";
})(_Week || (_Week = {}));
/**
 * object literal 의 key 를 enum 으로 설정하여 매핑하고,
 * Enum[enumKey] 로 접근이 가능하다.
 */
const WeekMap = {
    [_Week.Sun]: "일",
    [_Week.Mon]: "월",
    [_Week.Tue]: "화",
    [_Week.Wed]: "수",
    [_Week.Thu]: "목",
    [_Week.Fri]: "금",
    [_Week.Sat]: "토",
};
const getWeekName = (week) => WeekMap[week];
console.log(getWeekName(_Week.Sun)); // 일
console.log(getWeekName(_Week.Thu)); // 목
console.log(getWeekName(_Week.Sat)); // 토
