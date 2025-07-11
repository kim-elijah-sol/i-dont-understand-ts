type Application = {
  name: string;
  port: number;
};

function runApplication(application: Application) {
  console.log(`[${application.name}] is Running :: ${application.port}`);
}

/**
 * 온전히 Application Type 의 데이터만을 넘기기에 오류가 발생하지 않는다.
 */
runApplication({
  name: "Heurm",
  port: 5173,
});

/**
 * 아래 객체 리터럴은 Application Type 에서 허용하지 않는 `type` 필드를 가지기에 오류가 발생한다.
 * Object literal may only specify known properties, and 'type' does not exist in type 'Application'.
 *
 * 아래와 같은 오류가 발생하지 않는다면,
 * 타 개발자들은 runApplication 함수를 들여다보기 전에는,
 * `type` 값이 필요하다고 인식할 것이다.
 */
runApplication({
  name: "Colour",
  port: 3000,
  type: "front-end",
});

/**
 * type 필드가 존재하는 신선한 객체 리터럴은
 * Application 타입 데이터를 허용하는 application1 심볼에 할당될 수 없다.
 * Object literal may only specify known properties, and 'type' does not exist in type 'Application'.
 */
const application1: Application = {
  name: "I'm I",
  port: 5175,
  type: "back-end",
};

/**
 * 신선한 객체 리터럴을 application2 심볼에 할당하고,
 * type assertion 을 통해 Application 타입이라고 표명하는 것은
 * 신선함이 사라졌기 때문에 가능하다.
 */
const application2 = {
  name: "I'm I",
  port: 5175,
  type: "back-end",
} as Application;

runApplication(application2);

/**
 * IIFE 를 통해 생성된 객체 리터럴은 fresh 하지 않기에, 오류가 발생하지 않는다.
 */
runApplication(
  (() => {
    return {
      name: "Colour",
      port: 3000,
      type: "front-end",
    };
  })()
);

/**
 * 아래 객체 리터럴은 application3 심볼에 할당 되고 fresh 하지 않기 때문에 오류가 발생하지 않는다.
 */
const application3 = {
  name: "Colour",
  port: 3000,
  type: "front-end",
};

runApplication(application3);
