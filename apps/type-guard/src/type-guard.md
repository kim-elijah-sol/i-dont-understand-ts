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

## instanceof 연산자

class 구분 시 사용된다.

```typescript
instance instanceof Class;
```

과 같은 문법으로 사용되며 instanceof 를 기준으로 좌측 항에는 인스턴스 값을,<br>
우측 항에는 비교할 클래스를 대입할 수 있다.
