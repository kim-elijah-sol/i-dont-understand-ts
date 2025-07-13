# tsconfig.compilerOptions.baseUrl

```json
{
  "compilerOptions": {
    "baseUrl": "base url path"
  }
}
```

위와 같은 형식으로 작성되고, baseUrl 에 따라 내부 모듈을 import 할 때 해당 경로를 절대 경로로 사용할 수 있다.<br>
단, tsconfig 는 에디터에서만 경로를 인식시켜줄 뿐 실제로 실행시키면 오류가 난다.<br>
이를 해결하기 위해 `webpack`, `vite` 등 번들러에서 별도의 설정이 필요하다.<br>
단순히 ts 파일만을 실행시키기 위해 `tsconfig-paths` 라이브러리를 설치해서 ts-node 실행 시 도움을 받는다.
