interface Fn<out T> {
  (): T;
}

const stringFn: Fn<string> = () => "Hello world";

/**
 * string 은 string | number 의 부분 집합이기에 가능하고,
 * stringNumberFn 의 반환 값은
 * string 과 number 를 모두 염두에 두기에
 * toString, toLocaleString, valueOf 메소드만을 지원한다.
 */
const stringNumberFn: Fn<string | number> = stringFn;

/**
 * string 과 number 는 다른 타입이기 때문에 numberFn 에 stringFn 을 할당할 수 없다.
 */
const numberFn: Fn<number> = stringFn;
