const uczniowie = [
  {
    name: "Mateusz",
    grade: 2,
    attempts: 1,
  },
  {
    name: "Patryk",
    grade: 4,
    attempts: 3,
  },
  {
    name: "Karol",
    grade: 1,
    attempts: 3,
  },
  {
    name: "Agnieszka",
    grade: 6,
    attempts: 2,
  },
  {
    name: "Kasia",
    grade: 6,
    attempts: 2,
  },
];

for (let i = 0; i < uczniowie.length; i++) {
  const uczen = uczniowie[i];
  sayHellow(uczen);
  // passed(uczen);
}

function sayHellowToTheClass(klasa, ocena, odKtoregoIndexu = 0) {
  for (let i = odKtoregoIndexu; i < klasa.length; i++) {
    const uczen = klasa[i];
    sayHellow(uczen, ocena);
    //passed(uczen);
  }
}

function passed(uczen) {
  if (uczen.grade <= 2 && uczen.attempts > 2) {
    console.log("Przykro mi, nie zdałeś ");
  } else if (uczen.grade > 2) {
    console.log("Zdałeś");
  } else {
    console.log("Spróbuje jeszcze raz");
  }
}

function sayHellow(uczen, ocena = 3) {
  let tekst = `Cześć ${uczen.name}`;
  if (uczen.grade >= ocena) {
    tekst += ", dobra robota !";
  }

  console.log(tekst);
}

// sayHellowToTheClass(uczniowie, 5, 2);

let str = "";
for (let i = 0; i < 10; i++) {
  str += "*";
  console.log(str);
}

for (let i = 0; i < 10; i++) {
  let row = "";
  for (let k = 0; k < 10; k++) {
    const liczba = (i + 1) * (k + 1);
    row = `${row} ${liczba} `;
  }
  console.log(row);
}

console.log(".....");

const uczniowie2 = [];
for (let i = 0; i < uczniowie.length; i++) {
  const uczen = uczniowie[i];
  uczniowie2.push({
    ...uczen,
    grade: uczen.grade + 1,
  });
}
console.log(uczniowie);
console.log(uczniowie2);
