# tsconfig.compilerOptions.target

TypeScript 소스 코드를 어떤 버전의 JavaScript로 변환할지 지정하는 설정이다.
예를 들어, "target": "ES5"로 설정하면 TypeScript는 코드를 ECMAScript 5(2015 이전 표준) 문법에 맞게 변환하고,<br>
"ES2015"나 "ES6"로 설정하면 ECMAScript 2015(ES6) 문법을 사용해 변환한다.

| target     | 변환 결과의 JS 버전        | 차이점                                                     |
| ---------- | -------------------------- | ---------------------------------------------------------- |
| ES5        | IE11 등 구형 브라우저 지원 | class, let, const 등 ES6 문법이 ES5 방식으로 변환          |
| ES2015/ES6 | 최신 JS 엔진 지원          | class, let, const, 화살표 함수 등 ES6 문법이 그대로 유지됨 |
| ESNext     | 최신 JS 표준               | 최신 문법도 변환하지 않고 그대로 남김                      |
