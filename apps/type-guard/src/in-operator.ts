type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    // 자동으로 Fly 타입으로 좁혀짐
    animal.fly();
  }
}

const fish: Fish = {
  swim: () => {
    console.log("swimming");
  },
};

const bird: Bird = {
  fly: () => {
    console.log("flying");
  },
};

move(fish);
move(bird);
