// nav 에 사용될 수 있는 메뉴 리스트에 하위 메뉴를 포함하기 위해 아래와 같이 표현할 수 있다.
type Menu = {
  name: string;
  menus?: Menu[];
};

// 이 타입은 값이거나, 값의 배열이거나, 배열의 배열이거나(무한히 중첩 가능) 등 다양한 형태를 표현할 수 있다.
type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

type DeepElementOfArray<T> = T extends (infer U)[] ? DeepElementOfArray<U> : T;

type DeepString = DeepElementOfArray<string[][]>; // string 으로 추론
type DeepString2 = DeepElementOfArray<string[][][][]>; // string 으로 추론

type PromiseOf<T> = T extends Promise<infer U> ? PromiseOf<U> : T;

type DeepNumber = PromiseOf<Promise<Promise<number>>>; // number 로 추론
