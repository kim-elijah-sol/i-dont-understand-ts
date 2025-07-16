# Distributive Conditional Type (분산 조건부 타입)

조건부 타입(Conditional Type)이 제네릭 타입에 유니언 타입이 사용될 때<br>
자동으로 유니언의 각 원소별로 타입 검사가 분산되어 적용되는 동작 방식이다.<br>
<br>
유니온 타입으로 A | B | C 가 주어진다면 아래와 같은 식으로 분해되어 검사가 진행된다.<br>

```typescript
(A extends U ? X : Y) ∣
(B extends U ? X : Y) ∣
(C extends U ? X : Y)
```
