# tsconfig.compilerOptions.declaration

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

위와 같은 형식으로 작성되고, `declaration` 이 활성화되면 빌드 시<br>
각 소스 파일에 해당하는 타입 정보만 담긴 `.d.ts` 파일을 생성해준다.<br>
라이브러리, 패키지를 배포하는 경우에는 필수라고 보면 된다.
