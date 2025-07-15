export function sum(...args: number[]) {
  return args.reduce((acc, current) => acc + current, 0);
}

type ErrorTrigger = {
  name: string;
  version: number;
};

const et: ErrorTrigger = {
  name: "123",
  version: "1.2.3",
};
