type Material<in out T> = {
  get: () => T;
  set: (material: T) => void;
};

const material: Material<string> = {
  get: () => "material",
  set: (material) => {},
};

/**
 * string 타입이 완전히 동일하기 때문에 할당이 가능하다.
 */
const stringMaterial: Material<string> = material;

/**
 * string 이 string | number 의 서브 타입이여도 할당이 불가능하다.
 */
const stringNumberMaterial: Material<string | number> = material;

/**
 * material 이 string 의 서브 타입이여도 할당이 불가능하다.
 */
const stringLiteralMaterial: Material<"material"> = material;
