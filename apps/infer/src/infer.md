# Infer (조건부 타입)

infer 키워드는 주로 extends 키워드와 함께 쓰이며,<br>
조건부 타입으로써 동적으로 TS 에서 타입을 동적으로 추론할 수 있게 돕는다.

```typescript
T extends infer(U) ? U : E
```

과 같은 형태로 작성되며,
`T` 타입이 `(U)` 타입의 형태라면 해당 타입에서의 U 타입을 반환하고 아니라면 E 타입을 반환한다.
