# tsconfig.compilerOptions.sourceMap

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

위와 같은 형식으로 작성되고, 해당 옵션을 활성화 시키면 `.js.map` 파일도 생성한다.<br>
`.js.map` 을 브라우저에서 읽게되면, 브라우저는 `.js` 파일이 아닌 `.ts` 파일을 인식한다.<br>
이를 통해 테스트 시 오류가 나는 지점을 난독화된 `.js` 파일이 아닌 `.ts` 파일에서 디버깅 할 수 있다.
