/**
 * 아래 `const enum` 코드는 컴파일 시 제거된다.
 */
const enum Bool {
  True,
  False,
  FileNotFound,
}
// 컴파일 시 Bool.FileNotFound 는 2로 대체된다.
const value = Bool.FileNotFound;
console.log(value);
