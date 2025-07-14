# tsconfig.compilerOptions.lib

```json
{
  "compilerOptions": {
    "lib": [...libs]
  }
}
```

위와 같은 형식으로 작성되고, `lib` 옵션에 ts 의 런타임 환경에 적용할 라이브러리를 작성한다.<br>
`lib` 를 작성하지 않으면, `target` 옵션에서 지정하는 라이브러리를 따라간다.<br><br>

`lib` 가 참조하는 파일은 typescript 패키지가 설치된 곳에 존재한다.<br>
ex ) `node_modules/typescript/lib`<br>
그리고 파일명은 실제로 작성하는 lib 값과는 상이한데, 이를 매칭해주는 코드는 아래에서 찾아볼 수 있다.<br>
`typescript/lib/_tsc.js > 36173 line`

```javascript
var libEntries = [
  ["lib name", ".d.ts file name"],
  ...
]
```

이를 기반으로 참조해주는 것 같다.
