# tsconfig.compilerOptions.path

```json
{
  "compilerOptions": {
    "baseUrl": "base url path",
    "path": {
      "alias pattern": ["url path"],
      ...
    }
  }
}
```

위와 같은 형식으로 작성되고, `baseUrl` 을 기준으로 작성하면 된다.<br>
`baseUrl` 이 `./src` 라면 `url path` 에는 `src` 하위 폴더부터 작성하면 된다. 즉, `src` 는 제외한다.<br>
`alias pattern` 은 `import` 할 때 사용할 패턴을 작성한다.<br>
