enum _Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

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

const getWeekName = (week: _Week) => WeekMap[week];

console.log(getWeekName(_Week.Sun)); // 일
console.log(getWeekName(_Week.Thu)); // 목
console.log(getWeekName(_Week.Sat)); // 토
