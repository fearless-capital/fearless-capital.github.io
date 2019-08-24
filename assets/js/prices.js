"use strict";

const prices = {
  mensual: {
    title: "Mensual",
    price: 150,
    items: ["Acceso al programa.", "Acceso a seminarios exclusivos en vivo."]
  },
  semestral: {
    title: "Semestral",
    price: 900,
    items: [
      "Acceso al programa.",
      "Acceso video seminario Bonos.",
      "Acceso archivo capacitacion exclusiva",
      "1 mes gratis!"
    ]
  },
  anual: {
    title: "Anual",
    price: 1500,
    items: [
      "Acceso al programa.",
      "Acceso video seminario Bonos.",
      "Acceso archivo capacitacion exclusiva",
      "2 meses gratis!"
    ]
  }
};

const Main = {
  init() {
    const href = window.location.href.split("#");
    const price = prices[href[1]];

    // const content = document.getElementById("content");

    console.log(price, href[1]);

    document.getElementById("title").innerHTML = price.title;
    // document.getElementById("description").innerHTML = price.price;
    const itemContainer = document.getElementById("content");

    price.items.map(item => {
      const p = document.createElement("p");
      p.innerHTML = item;
      itemContainer.appendChild(p);
    });
  }
};

Main.init();
