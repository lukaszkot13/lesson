// function obliczPoleProstokąta(a, b) {
//   return a * b;
// }

// function sumujPoleProstokątow(a, b) {
//   return a + b;
// }

// const pole1 = obliczPoleProstokąta(2, 5);
// const pole2 = obliczPoleProstokąta(3, 6);

// const suma = sumujPoleProstokątow(pole1, pole2);

// console.log(pole1);
// console.log(pole2);
// console.log(suma);

// function obliczPoleTrojkata(a, h) {
//   const pole = (1 / 2) * a * h;
//   return (
//     "Pole trójkąta o podstawie " + a + " i wysokości " + h + " wynosi " + pole
//   );
// }

// const wynik = obliczPoleTrojkata(10, 12);

// console.log(wynik);

// function czas(h, m, s) {
//   m = 60(s);
//   h = 60(m) * 60(s);
// }

// function czyMogeObejrzecFilm(wiek) {
//   if (wiek < 18) {
//     return "Nie możesz obejrzeć filmu";
//   } else {
//     return "Możesz obejrzeć film";
//   }
// }

// function czyMogeObejrzecFilm2(wiek) {
//   if (wiek < 18) {
//     return "Nie możesz obejrzeć filmu";
//   }
//   return "Możesz obejrzeć film";
// }

// function czyMogeObejrzecFilm3(wiek) {
//   let result = "Możesz obejrzeć film";
//   if (wiek < 18) {
//     result = "Nie możesz obejrzeć filmu";
//   }
//   return result;
// }

// function czyMogeObejrzecFilm4(wiek) {
//   return wiek < 18 ? "Nie możesz obejrzeć filmu" : "Możesz obejrzeć film";
// }

// const czyMoge = czyMogeObejrzecFilm(17);

// function obliczPoleProstokąta(a, b) {
//   return a * b;
// }

// function sumujPolaProstokatow(a, b) {
//   return a + b;
// }

// const pole1 = obliczPoleProstokąta(2, 5);
// const pole2 = obliczPoleProstokąta(3, 6);

// const suma = sumujPolaProstokatow(pole1, pole2);

// console.log(pole1);
// console.log(pole2);
// console.log(suma);

// function poleTrojkata(a, h) {
//   const pole = (1 / 2) * a * h;
//   return `Pole trójkąta o podstawie ${a} i wysokości ${h} wynisi ${pole}`;
// }

// const pole = poleTrojkata(10, 12);

// console.log(pole);

// let = 10;
// a = 10;

// a = 20;
// console.log(a);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(2, 5);

function czyMogeObejrzecFilm6(wiek) {
  if (wiek < 18) {
    return `nie możesz obejrzeć filmu`;
  } else {
    return `możesz obejrzeć film`;
  }
}
const czyMoge = czyMogeObejrzecFilm6(18);

console.log(czyMoge);

function canServeBeer(age, isDrunk) {
  const isDrank = true;
  if (age > 18 && isDrunk == true) {
    console.log(`Przykro mi, dzisiaj nie dostaniesz piwka`);
  } else if (age > 18 && isDrunk == false) {
    console.log(`Prosze oto Twoje piwko`);
  } else {
    console.log(`nie dostaniesz nic`);
  }
}

const canServe = canServeBeer(20, false);

console.log(canServe);

const queue = [];
const name2 = "test";
console.log(name2);
function orderCar(car, carQueue) {
  if (car && car.type) {
    carQueue.push(car);
  }
}

function produceCar(carQueue) {
  if (carQueue.lenght === 0) {
    console.log(`nie ma zadnych zamówień`);
    return;
  }
  const car = carQueue.pop();

  // car.lusterka = true
  // car.km = 20
  // car.engine = `v8`

  return {
    ...car,
    lusterka: true,
    km: 20,
    engine: `v8`,
  };
}

const ford = {
  type: "mustang",
  isDiesel: false,
};

const ford2 = {
  type: "mondeo",
  isDiesel: true,
};

orderCar(ford, queue);
orderCar(ford2, queue);
console.log("after", queue);

const myNewCar = produceCar(queue);
produceCar(queue);
produceCar(queue);
// console.log("my new car", myNewCar);
console.log("after production", queue);
