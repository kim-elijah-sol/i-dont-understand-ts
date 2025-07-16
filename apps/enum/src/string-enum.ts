/**
 * 값을 문자열로 지정할 수 있다.
 * 단, 문자열로 지정될 시 숫자형 enum 과 다르게
 * value 를 대입해서 key 를 유추할 수 없다.
 */
enum Weather {
  Sun = "sunny",
  Cloud = "cloudy",
  Rain = "rainy",
}

console.log(Weather.Sun); // sunny
console.log(Weather.Cloud); // cloudy
console.log(Weather.Rain); // rainy
