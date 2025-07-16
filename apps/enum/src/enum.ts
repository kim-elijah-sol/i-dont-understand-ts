/**
 * enum 은 아래와 같이 각 멤버에 값을 설정하지 않았다면, 0부터 값이 시작된다.
 */
enum Week {
  Sun, // 0
  Mon, // 1
  Tue, // 2
  Wed, // 3
  Thu, // 4
  Fri, // 5
  Sat, // 6
}

console.log(Week.Sun); // 0
console.log(Week.Wed); // 3
console.log(Week[6]); // 'Sat'
console.log(Week[7]); // undefined
