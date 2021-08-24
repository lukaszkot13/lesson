const { listaAllegro, students, rentalCarCompany } = require("./data");

// const laptopy = [];
// for (let i = 0; i < listaAllegro.length; i++) {
//   const produkt = listaAllegro[i];
//   if (produkt.category === "laptopy") {
//     laptopy.push(produkt);
//   }
// }

// function filter(funkcjaFiltrujaca) {
//   const tablica = [];
//   for (let i = 0; i < listaAllegro.length; i++) {
//     const product = listaAllegro[i];
//     const dodajElement = funkcjaFiltrujaca(product, i, listaAllegro);
//     if (dodajElement) {
//       tablica.push(product);
//     }
//   }

//   return tablica;
// }

// const funkcja = function (product, index) {
//   if (index % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// const laptopy2 = listaAllegro.filter(funkcja);
// //const laptopy = filter(funkcja);

// console.log("laproty", laptopy);

// const lista = listaAllegro.filter(function (product) {
//   if (
//     product.price > 500 &&
//     product.rating > 5 &&
//     product.category == "odkurzacze"
//   ) {
//     return true;
//   }
//   return false;
// });

// console.log(lista);

// const lista2 = listaAllegro.filter(function ({ price, rating, category }) {
//   if (price <= 500) {
//     return false;
//   }

//   if (rating <= 5) {
//     return false;
//   }

//   if (category !== "odkurzacz") {
//     return false;
//   }
//   return true;
// });

// console.log(lista2);

// const discount10 = function (product, index, tablica) {
//   return {
//     ...product,
//     price: product.price * 0.9,
//   };
// };

// const laptopy = function (product) {
//   return product.category === "laptopy";
// };

// const produktyZeZnizka10 = listaAllegro.filter(laptopy).map(discount10);

// console.log(produktyZeZnizka10);

//FUNKCJA REDUCE()
function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
  let wartosc = wartoscPoczatkowa;
  for (let i = 0; i < listaAllegro.length; i++) {
    const item = listaAllegro[i];

    wartosc = funkcjaRedukujaca(wartosc, item);
  }
  return wartosc;
}

function redukcja(acc, { price, soldProducts }) {
  return acc + soldProducts;
}

const result = reduce(redukcja, 0);

const result2 = listaAllegro.reduce(redukcja, 0);

const discount10 = function (product, index, tablica) {
  return {
    ...product,
    price: product.price * 0.9,
  };
};

const laptopy = function (product) {
  return product.category === "laptopy";
};

const kolejneMapowanie = function ({ name, price, soldProducts }) {
  return {
    name,
    price,
    soldProducts,
  };
};

const kolejneFiltrowanie = function (item) {
  return item.price > 500;
};

const wynikKoncowy = function (sum, item) {
  sum.push(item.soldProducts);
  return sum;
};

const produktyZeZnizka10 = listaAllegro
  .map(discount10)
  .map(kolejneMapowanie)
  .filter(kolejneFiltrowanie)
  .reduce(wynikKoncowy, []);

console.log(produktyZeZnizka10);

// Przynajmniej jeden element tablicy musi spełnić warunek wtedy da TRUE
//. Jak żaden nie spałnia daje FALSE

const value = function (item) {
  return item.price > 5000;
};

const petlaSome = listaAllegro.some(value);

console.log(petlaSome);

// Każdy element tablicy mysi spełnić warunek wtedy daje TRUE
//Jak jeden nie spełnia daje FALSE

const value2 = function (item) {
  return item.price > 120;
};

const petlaEvery = listaAllegro.every(value2);

console.log(petlaEvery);

const grades = students.reduce(
  function (grades, student) {
    student.grades.forEach(function ({ rate }) {
      const key = `rate ${rate}`;
      grades[key]++;
    });
    return grades;
  },
  {
    rate1: 0,
    rate2: 0,
    rate3: 0,
    rate4: 0,
    rate5: 0,
    rate6: 0,
  }
);

console.log(grades);
