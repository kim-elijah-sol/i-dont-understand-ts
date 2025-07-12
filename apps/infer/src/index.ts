type ElementOfArray<T> = T extends (infer U)[] ? U : unknown;

type MyString = ElementOfArray<string[]>; // string 으로 추론됨
type MyStringArray = ElementOfArray<string[][]>; // string[] 으로 추론됨
type Unknown = ElementOfArray<() => void>; // unknown 으로 추론됨

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : unknown;

type StringReturn = MyReturnType<() => string>; // string 으로 추론됨
type VoidReturn = MyReturnType<typeof console.log>; // void 로 추론됨
type UnknownReturn = MyReturnType<Console>; // unknown 으로 추론됨
