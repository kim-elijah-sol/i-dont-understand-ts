type Foo = {
  foo: string;
  name: string;
};

type Bar = {
  bar: string;
  name: string;
};

function isFoo(value: Foo | Bar): value is Foo {
  // in 연산자를 활용해서 value 의 타입이 Foo 인지 확인
  return "foo" in value;
}

function doStuff(value: Foo | Bar) {
  console.log(value.name);
  if (isFoo(value)) {
    // isFoo 를 통과한 if 문의 내부는 value 를 Foo 로 타입을 추론함
    console.log(value.foo);
  } else {
    // 자동으로 value 의 타입이 Bar 로 좁혀짐
    console.log(value.bar);
  }
}

doStuff({ name: "foo", foo: "hello" });
doStuff({ name: "bar", bar: "world!" });
