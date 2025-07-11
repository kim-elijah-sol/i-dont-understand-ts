# Freshness (신선도)

TypeScript에서 Freshness(신선도)란, 객체 리터럴(Object Literal)이 타입 검사 과정에서 “얼마나 원본에 가까운 상태인지”를 나타내는 개념이다.

- 모든 객체 리터럴은 생성 시점에 Fresh 하다고 간주한다.
- 이 신선한 객체 리터럴이 함수의 인자로 직접 전달되거나 변수에 바로 할당될 때, TypeScript는 해당 객체에 정의되지 않은 속성(excess property)이 있으면 에러가 발생된다.
- 반면, 이미 변수에 할당된 객체나 타입 단언(type assertion)을 거친 객체는 “신선도”가 사라지며, 이 경우에는 excess property 검사(excess property checks)가 완화되어 추가 속성이 있어도 에러가 발생하지 않는다.

## 도입 이유

- Freshness는 구조적 타입 시스템의 유연함 때문에 발생할 수 있는 실수를 방지하기 위해 도입되었다.
- 즉, 개발자가 실수로 잘못된 속성을 객체 리터럴에 추가했을 때, 타입 시스템이 이를 잡아내어 코드의 안정성을 높인다.

## 예외 허용 방법

- 만약 함수 매개변수 타입에 index signature를 추가하면, excess property 체크를 우회할 수 있다.

```typescript
type Type = {
  name: string;
  value: number;
  [key in string]: any;
};
```

## For Me

어쩐지 react 에서 form 데이터를 만들고, api 함수로 넘길 때 필요하지 않은 요청 데이터가 필요한 경우에도 오류가 발생하지 않고<br>
solid js 에서 api 함수로 데이터를 넘길 때, Accessor 데이터를 하나 하나 객체에 담는 과정에서 오타가 나서 불필요한 필드가 생겼을 때 오류가 발생하더라.
