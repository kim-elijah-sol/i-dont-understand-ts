"use strict";
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
    Animal[Animal["Pig"] = 2] = "Pig";
})(Animal || (Animal = {}));
/**
 * mapped-type 을 사용하여 타입 가드를 설정할 수 있다.
 * Animal enum 에 새로운 값이 생긴다면, 알아서 오류가 발생한다.
 */
const animalSound = {
    [Animal.Dog]: "멍멍",
    [Animal.Cat]: "먀아옹",
    [Animal.Pig]: "꿀꿀",
};
const crying = (animal) => console.log(animalSound[animal]);
crying(Animal.Dog); // '멍멍'
crying(Animal.Cat); // '먀아옹'
crying(Animal.Pig); // '꿀꿀'
