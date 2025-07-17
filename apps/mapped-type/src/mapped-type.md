# Mapped Type

기존의 타입을 바탕으로 새로운 타입을 생성할 수 있게 해주는 고급 타입 기능이다.<br>
객체 타입의 프로퍼티(속성)를 반복(순회)하면서 각 속성에 대해 변환을 적용하고, 그 결과로 원하는 형태의 새 타입을 얻을 수 있다.

- 기존 타입의 키(속성)를 "맵(map)"처럼 처리하여 변환
- 각 프로퍼티에 수정, 추가, 삭제, 변경 등의 가공을 적용 가능
- 대표적으로 use-case가 많은 예시: Partial, Readonly, Record, Pick 등 유틸리티 타입이 모두 mapped type의 일종

```typescript
type MyMappedType<T> = {
  [P in keyof T]: /* 변경하거나 변환할 타입 */
}
```

위와 같은 형태로 작성한다.
