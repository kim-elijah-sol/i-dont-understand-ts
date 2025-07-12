# tsconfig.compilerOptions.outDir

```json
{
  "compilerOptions": {
    "outDir": "build path"
  }
}
```

위와 같은 형식으로 작성되고, outDir 에 따라 빌드 파일이 생성되는 지점이 바뀐다.<br>
단 `/dist` 와 같이 작성하면, `/` 를 시스템의 루트 폴더로 인지하기에,<br>
`dist`, `./dist` 와 같이 작성해주어야 한다.
