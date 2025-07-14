# tsconfig.files

```json
{
  "files": ["file name"]
}
```

위와 같은 형식으로 작성되고, 해당 `files` 배열에 존재하는 파일만 빌드를 진행한다.<br>
`exclude` 보다 우선 순위가 높기 때문에, `exclude` 에 매칭되는 파일이여도 `files` 내에 존재한다면 빌드에 포함된다.<br>
`include` 없이 `files` 만 존재한다면 해당 파일들만 빌드한다.
