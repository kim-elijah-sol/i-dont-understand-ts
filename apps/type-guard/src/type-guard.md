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

## in 연산자

객체 내 특정 필드가 존재하는지 확인하고, 이를 기반으로 타입을 좁힌다.

```typescript
"field" in symbol;
```

과 같은 문법으로 사용되며 in 을 기준으로 좌측 항에는 찾을 필드명을,<br>
우측 항에는 필드명을 찾을 심볼을 대입할 수 있다.

## 사용자 정의 Type Guard

타입 가드 함수를 만들어, 인자로 넘어온 심볼이 어떤 타입인지 좁힐 수 있다.

```typescript
function fx(value: unknown): value is string;
```

과 같은 문법으로 함수를 작성하며, 반환 영역에 is 를 기준으로 좌측에는 인자명을,<br>
우측 항에는 좁힐 타입을 대입할 수 있다.
