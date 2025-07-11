# Variance Annotations (변성 어노테이션)

TypeScript의 Variance Annotations는 제네릭 타입 인자의 변성(variance)을 명시적으로 표현하는 기능으로, TypeScript 4.7부터 도입되었다.<br>
변성은 타입 계층에서 제네릭 타입이 어떻게 서브타입 관계를 유지하는지(또는 유지하지 않는지)를 설명하는 개념이다.

## Variance (변성)

- 공변성(Covariance): 타입이 변할 때, 제네릭 타입도 같은 방향으로 변하는 경우<br>
  예: `T<A>`가 `T<B>`에 할당 가능하려면 A가 B의 서브타입일 때 가능
- 반공변성(Contravariance): 타입이 변할 때, 제네릭 타입이 반대 방향으로 변하는 경우<br>
  예: 함수 인자의 타입이 반공변성을 가짐
- 불변성(Invariance): 변성이 적용되지 않아, 타입이 정확히 일치해야 하는 경우

## 변성의 종류

- 공변성 (Covariance) → `out` 키워드 사용
- 반공변성 (Contravariance) → `in` 키워드 사용
- 무공변성 (Invariant) → `in out` 키워드 사용

## Convariance (공변성)

- 공변성은 타입의 생산자(producer) 역할을 하는 경우 사용된다.
- 즉, 제네릭 타입이 리턴값에 사용될 때 적용된다.
- ex) A가 B 타입을 포함하면, `T<A>` 자리에 `T<B>`를 사용할 수 있음

## Contravariance (반공변성)

- 반공변성은 타입의 소비자(consumer) 역할을 하는 경우 사용된다.
- 즉, 제네릭 타입이 함수의 인자로 사용될 때 적용된다.
- ex) A가 B타입을 포함하면, `T<B>` 자리에 `T<A>`를 사용할 수 있음
