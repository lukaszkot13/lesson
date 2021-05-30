// function obliczCene(name2, price, vat) {
//   const totalPrice = price + (price * vat) / 100;
//   return `Cena produktu ${name2} to ${totalPrice} PLN`;
// }

// console.log(obliczCene("Książka Js", 100, 23));
// console.log(obliczCene("Książka Recta", 80, 15));
// console.log(obliczCene("Książka odkurzacz", 1000, 23));
// console.log(obliczCene("Książka komputer", 10000, 23));

// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// //{name, type, price}

// const stawkiVat = {
//   ksiazka: 8,
//   szkolenie: 23,
//   hotel: 20,
// };

// function obliczCene1({ name, type = "ksiazka", price }) {
//   const stawkaVat = stawkiVat[type];
//   const totalPrice = price + (price * stawkaVat) / 100;
//   return `Cena produktu ${type} o nazwie ${name} to ${totalPrice} PLN `;
// }

// const produkt = {
//   name: "Paradise",
//   type: "hotel",
//   price: 100,
// };
// const produkt2 = {
//   name: "mazowsze",
//   type: "hotel",
//   price: 1000,
// };
// const produkt3 = {
//   name: "Mariot",
//   type: "hotel",
//   price: 1600,
// };
// const produkt4 = {
//   name: "Hilton",
//   price: 1600,
// };

// console.log(obliczCene1(produkt));
// console.log(obliczCene1(produkt2));
// console.log(obliczCene1(produkt3));
// console.log(obliczCene1(produkt4));

// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);
// console.log(`................`);

function licznik() {
  const stan = {
    ile: 0,
  };

  function zwieksz() {
    stan.ile = stan.ile + 1;
  }

  function zmniejsz() {
    stan.ile = stan.ile - 1;
  }

  function sekretneDodanie() {
    stan.ile = stan.ile + 10;
  }

  function pokazLicznik() {
    console.log(stan.ile);
  }

  sekretneDodanie();

  return {
    ile: stan.ile,
    stan,
    show: pokazLicznik,
    increase: zwieksz,
    decrease: zmniejsz,
  };
}

const counter = licznik();
counter.show();
counter.decrease();
counter.decrease();
counter.increase();
counter.show();
console.log(counter);

console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);
console.log(`................`);

// function licznik() {
//   const stan = {
//     ile: 10,
//   };
//   function zwieksz() {
//     stan.ile = stan.ile + 1;
//   }
//   function pokazLicznik() {
//     console.log(stan.ile);
//   }
//   return {
//     ile: stan.ile,
//     zwieksz,
//     pokazLicznik,
//   };
// }
// const counter = licznik();
// counter.zwieksz();
// counter.pokazLicznik();
// counter.zwieksz();
// counter.pokazLicznik();

const zmienna1 = "test";

function licznik() {
  const zmienna2 = "wSrodkuFunkcji";
  console.log(zmienna1);
  console.log(zmienna2);
}

console.log(zmienna1);
licznik();
