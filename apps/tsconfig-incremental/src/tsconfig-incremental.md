# tsconfig.compilerOptions.incremental

```json
{
  "compilerOptions": {
    "incremental": true
  }
}
```

위와 같은 형식으로 작성되고, 해당 옵션을 활성화시키면 증분 컴파일이 활성화되어,<br>
이전 컴파일 정보를 디스크에 저장해두고 캐시처럼 활용하여, 컴파일을 더 빠르게 진행할 수 있다.<br>
`dist/tsconfig.tsbuildinfo` 파일에 저장되어 있다.
