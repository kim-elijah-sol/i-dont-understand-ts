const value: string | null = "hello World!";

function printUpperCase(value: string | null) {
  if (typeof value === "string") {
    console.log("upperCase of value :", value.toUpperCase());
  } else {
    console.log("value is not string");
  }
}

printUpperCase(value);
