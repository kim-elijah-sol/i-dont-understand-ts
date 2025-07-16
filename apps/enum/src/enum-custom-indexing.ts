/**
 * 중간에 숫자로 index 를 매긴다면,
 * 다음 값 부터는 해당 index 부터 다시 1씩 증가하며 설정된다.
 */
enum CustomIndex {
  A, // 0
  B = 10, // 10
  C, // 11
  D, // 12
  E, // 13
}

console.log(CustomIndex.A); // 0
console.log(CustomIndex.B); // 10
console.log(CustomIndex.C); // 11
console.log(CustomIndex[13]); // 'E'
console.log(CustomIndex[9]); // undefined
