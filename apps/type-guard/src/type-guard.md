# Type Guard (타입 가드)

타입 가드를 이용해 심볼의 타입을 좁혀(narrowing)나갈 수 있다.

## typeof 연산자

primitive 타입 구분 시 사용된다.

```typescript
typeof symbol === "type";
```

과 같은 문법으로 사용되며 우측 항에는 아래와 같은 데이터가 사용될 수 있다.

- number
- string
- function
- object
- boolean
- bigint
- symbol
- undefined
