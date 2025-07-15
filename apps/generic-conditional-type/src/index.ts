type OnlyString<T> = T extends string ? string : unknown;

type MyString = OnlyString<string>; // string 으로 추론됨
type MyNumber = OnlyString<number>; // unknown 으로 추론됨
type MyBoolean = OnlyString<boolean>; // unknown 으로 추론됨
type MyStringArray = OnlyString<string[]>; // unknown 으로 추론됨
