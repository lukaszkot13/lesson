function dodaj(arr, str) {
  if (arr.length === 0) {
    console.log(`Pusta tablica!`);
    return;
  }

  if (!["number", "string"].includes(str)) {
    console.log(`Drugi parametr jest nieprawidłowy!`);
  }

  let result = str === "string" ? "" : 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (str === "string") {
      result += value.toString();
    } else {
      result += +value;
    }
  }
  return result;
}

console.log(dodaj([1, 2, 3], "number"));
