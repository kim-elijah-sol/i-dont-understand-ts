/**
 * T 를 받아 U 에 부합된다면, never 로, 아니라면 T 로 추론된다.
 * 즉 유니온 타입 T 를 받아 U 만 제거하는 기법이다.
 */
type MyExclude<T, U> = T extends U ? never : T;

type A = MyExclude<number | string | boolean, string>; // number | boolean 으로 추론됨

/**
 * T 를 받아 T[] 로 추론한다.
 */
type ToArray<T> = T extends T ? T[] : never;

type B = ToArray<string | number>; // string[] | number[] 로 추론됨

/**
 * 유니언 타입 전체를 한 번에 검사하고 싶을 때는 양 옆에 대괄호로 감싸주면 분산이 일어나지 않는다.
 */
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type C = ToArrayNonDist<string | number>; // (string | number)[] 로 추론됨
