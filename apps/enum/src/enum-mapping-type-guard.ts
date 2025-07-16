enum Animal {
  Dog,
  Cat,
  Pig,
}

/**
 * mapped-type 을 사용하여 타입 가드를 설정할 수 있다.
 * Animal enum 에 새로운 값이 생긴다면, 알아서 오류가 발생한다.
 */
const animalSound: { [key in Animal]: string } = {
  [Animal.Dog]: "멍멍",
  [Animal.Cat]: "먀아옹",
  [Animal.Pig]: "꿀꿀",
};

const crying = (animal: Animal) => console.log(animalSound[animal]);

crying(Animal.Dog); // '멍멍'
crying(Animal.Cat); // '먀아옹'
crying(Animal.Pig); // '꿀꿀'
