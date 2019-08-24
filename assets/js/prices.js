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
  },
  basico: {
    title: "Basico",
    price: 300,
    items: ["Acceso a seminario de opciones.", "Soporte por email"]
  },
  profesional: {
    title: "Profesional",
    price: 700,
    items: [
      "Acceso a seminario de opciones.",
      "Acceso a seminario de opciones avanzado.",
      "Soporte por email",
      "Acceso a proximos webinars de opciones."
    ]
  },
  avanzado: {
    title: "Avanzado",
    price: 2000,
    items: [
      "Acceso a seminario de opciones.",
      "Acceso a seminario de opciones avanzado.",
      "Soporte por email",
      "Acceso a proximos webinars de opciones."
    ]
  },

  analista: {
    title: "Analista",
    price: 300,
    items: [
      "Acceso a seminario de analisis tecnico.",
      "Acceso a proxima edicion en vivo."
    ]
  },
  analista_avanzado: {
    title: "Analista Avanzado",
    price: 700,
    items: [
      "Acceso a seminario de analisis tecnico.",
      "Acceso a seminario de analisis tecnico avanzado.",
      "Soporte por email",
      "Acceso a proximos webinars de opciones."
    ]
  },
  analista_profesional: {
    title: "Analista Profesional",
    price: 2000,
    items: [
      "Incluye todo el material del nivel avanzado.",
      "Acceso a seminario de manejo del dinero."
    ]
  }
};

const Main = {
  init() {
    const href = window.location.href.split("#");
    const price = prices[href[1]];

    const validSections = Object.keys(prices);

    if (!href[1] || !validSections.includes(href[1])) {
      window.location = "/";
    }

    document.getElementById("title").innerHTML = price.title;
    const itemContainer = document.getElementById("content");

    price.items.map(item => {
      const p = document.createElement("p");
      p.innerHTML = item;
      itemContainer.appendChild(p);
    });
  }
};

Main.init();
