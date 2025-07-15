# tsconfig.compilerOptions.module

```json
{
  "compilerOptions": {
    "module": "module system"
  }
}
```

위와 같은 형식으로 작성되고, 컴파일된 JavaScript 코드가 어떤 모듈 시스템을 사용할지를 결정한다.<br>
해당 app 의 경우 절대 경로를 사용하기 때문에 빌드 후 `tsc-alias` 를 사용해서 다시 상대 경로로 변경했다.
