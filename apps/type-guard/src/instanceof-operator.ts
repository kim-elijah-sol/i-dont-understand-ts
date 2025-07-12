class FrontendEngineer {
  name = "kimelijahsol";
  doReact() {
    console.log("react programming");
  }
}

class BackendEngineer {
  name = "unknown";
  doNest() {
    console.log("nest programming");
  }
}

function doProgramming(engineer: FrontendEngineer | BackendEngineer) {
  // name 속성은 FrontendEngineer, BackendEngineer 모두 가지고 있음
  console.log(engineer.name);

  if (engineer instanceof FrontendEngineer) {
    engineer.doReact();
  } else {
    // 자동으로 BackendEngineer 로 타입이 좁혀짐
    engineer.doNest();
  }
}

const feEngineer = new FrontendEngineer();
const beEngineer = new BackendEngineer();

doProgramming(feEngineer);
doProgramming(beEngineer);
