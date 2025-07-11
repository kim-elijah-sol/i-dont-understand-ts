interface LogFn<in T> {
  (args: T): void;
}

const logFn: LogFn<number | string> = (args) => console.log(args);

/**
 * logFn 은 인자 값으로 number 혹은 string 을 허용한다.
 * LogFn<number> 는 인자를 number 로만 추론하기에 logFn 을 대입할 수 있다.
 */
const numberLogging: LogFn<number> = logFn;

/**
 * 위와 동일
 */
const stringLogging: LogFn<string> = logFn;

/**
 * LogFn<number | string | boolean> 은
 * LogFn<number | string> 에 비해 boolean 타입 데이터가 인자로 넘어갔을 때 처리할 수 있을 때 함수가
 * 대입되기를 기대하고 있기에 logFn 을 대입할 수 없다.
 */
const threeTypeLogging: LogFn<number | string | boolean> = logFn;
