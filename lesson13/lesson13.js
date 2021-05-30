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
    // stan,
    show: pokazLicznik,
    increase: zwieksz,
    decrease: zmniejsz,
  };
}

const counter = licznik();

const licznikV2 = {
  ile: 0,
  increase: function () {
    this.ile++;
  },
  decrease() {
    this.ile -= 1;
  },
  show() {
    console.log(this.ile);
  },
};

const licznikV3 = {
  ...licznikV2,
};

licznikV2.increase();
licznikV2.increase();

licznikV2.show();
licznikV3.show();

const pralka = {
  jestWlaczona: true,
  wlaczPranie() {
    if (this.jestWlaczona) {
      console.log("pierz");
    }
  },
};

pralka.wlaczPranie();
