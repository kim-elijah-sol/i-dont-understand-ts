# Generic Conditional Type (제네릭 조건부 타입)

제네릭 타입을 기반으로 타입을 반환하는 방식이다.<br>

```typescript
T extends U ? X : Y
```

"T가 U에 할당될 수 있으면 타입은 X가 되고 그렇지 않다면 타입이 Y가 된다" 로 읽을 수 있다.
