# tsconfig.compilerOptions.noEmit

```json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

위와 같은 형식으로 작성되고, 해당 옵션을 활성화시키면 빌드를 실행해도 파일(`.js`, `.d.ts`)이 생성되지 않는다.<br>
이는 `tsc` 명령어에서 타입 체크만 해야하는 경우에 적합함
