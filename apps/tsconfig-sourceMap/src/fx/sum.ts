export function sum(...args: number[]) {
  return args.reduce((acc, current) => acc + current, 0);
}
