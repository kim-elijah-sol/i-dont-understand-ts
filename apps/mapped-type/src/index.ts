type MyObject = {
  name: string;
  age?: number;
  address: string;
};

// Partial 은 아래와 같이 구현되어 있다.
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type PartialObject = MyPartial<MyObject>;

// Required 는 아래와 같이 구현되어 있다.
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type RequiredObject = MyRequired<MyObject>;

// 모든 멤버의 타입을 number 로 변환한다.
type NumberMember<T> = {
  [K in keyof T]: number;
};

type NumberObject = NumberMember<MyObject>;
