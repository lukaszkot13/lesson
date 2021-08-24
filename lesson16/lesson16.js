// // FOR IN

// const samochod = {
//   marka: "lambo",
//   model: "urus",
//   kolor: "fioletowy",
//   km: "640",
// };
// const samochod2 = {
//   marka: "BMW",
//   model: "x6",
//   kolor: "złoty",
//   km: "281",
//   przglady: {
//     pierwszy: "data",
//   },
// };

// const samochody = [samochod, samochod2];

// for (let i = 0; i < samochody.length; i++) {
//   console.log("\n");

//   const samochod = samochody[i];
//   for (let klucz in samochod) {
//     console.log(`${klucz}: ${samochod[klucz]}`);
//   }
//   console.log("\n");
// }

//FOR OF
// nie urzywa sie praktycznie

// Pętla while i do ... while! - tylko na obiektach

// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(numbers[i]);
// } while (i < 0);

// WAŻNE   map() - metoda na tablicach!

// najczęściej używany sposób
const numbers = [1, 5, 8, 110, 20];
const samochod = {
  marka: "lambo",
  model: "urus",
  kolor: "fioletowy",
  km: "640",
};
const samochod2 = {
  marka: "BMW",
  model: "x6",
  kolor: "złoty",
  km: "281",
};
const samochod3 = {
  marka: "dode",
  model: "challenger",
  kolor: "czarny",
  km: "750",
};

const samochody = [samochod, samochod2, samochod3];

function funkcjaMapujacaSamochody(elemencik) {
  return {
    model: elemencik.model,
    km: +elemencik.km + 300,
  };
}

// function funkcjaMapujacaSamochody(elemencik) {
//   return {
//     ...elemencik,
//     km: +elemencik.km + 100,
//     isNew: true,
//   };
// }

function filtrujaca(element) {
  console.log("element", element);
  if (element.km > 750) {
    return true;
  }
  return false;
}

const samochodyPrzefiltrowaneIPodrasowane = samochody

  .map(funkcjaMapujacaSamochody)
  .filter(filtrujaca);

// const samochoduPodrasowane = samochody.map(funkcjaMapujacaSamochody);
// console.log("samochody podrasowana", samochoduPodrasowane);

// const samochodyPrzefiltrowane = samochoduPodrasowane.filter(filtrujaca);
console.log(
  "samochodyPrzefiltrowaneIPodrasowane",
  samochodyPrzefiltrowaneIPodrasowane
);

// function funkcjaMapujaca(element) {
//   return element * 2;
// }

// const numbersDoubled = numbers.map(funkcjaMapujaca);

// console.log("numbers", numbers);

// console.log("numbersDoubled", numbersDoubled);

// function funkcjaMapujaca(element, index, tablica) {
//   console.log("element", element);
//   console.log("index", index);
//   console.log("tablica", tablica);

//   return element * 2;
// }

// const doubled = numbers.map(funkcjaMapujaca);

// console.log("doubled", doubled);
// console.log("doubled", doubled);
