// Menú móvil
const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Ficha de producto: rellena la página según ?id=
const PRODUCTS = {
  "lotus-97t": { name: "Lotus 97T", year: 1985, price: "189 €", img: "lotus-97t.jpg", alt: "Lotus 97T negro y dorado con el número 11 tomando una curva",
    text: "El coche negro y dorado de John Player Special, con motor Renault turbo. Una pieza imprescindible de los años 80.",
    specs: { Piloto: "Elio de Angelis (#11)", Motor: "Renault EF15 V6 turbo 1.5 L", Escala: "1:18", Material: "Metal fundido y resina" } },
  "renault-r25": { name: "Renault R25", year: 2005, price: "169 €", img: "renault-r25.jpg", alt: "Renault R25 azul y amarillo en clasificación en Indianápolis",
    text: "El monoplaza que dio a Renault y a Fernando Alonso el título mundial de 2005, con su inconfundible librea azul y amarilla.",
    specs: { Piloto: "Fernando Alonso (#5)", Motor: "Renault RS25 V10 3.0 L", Escala: "1:18", Material: "Metal fundido y resina" } },
  "ferrari-f2004": { name: "Ferrari F2004", year: 2004, price: "199 €", img: "ferrari-f2004.jpg", alt: "Ferrari F2004 roja en pista",
    text: "Uno de los coches más dominantes de la historia de la F1, con el que Michael Schumacher ganó su séptimo título.",
    specs: { Piloto: "Michael Schumacher (#1)", Motor: "Ferrari 053 V10 3.0 L", Escala: "1:18", Material: "Metal fundido y resina" } },
  "ferrari-f2012": { name: "Ferrari F2012", year: 2012, price: "179 €", img: "ferrari-f2012.jpg", alt: "Ferrari F2012 roja vista de perfil",
    text: "El coche con el que Fernando Alonso peleó el campeonato hasta la última carrera de 2012.",
    specs: { Piloto: "Fernando Alonso (#5)", Motor: "Ferrari 056 V8 2.4 L", Escala: "1:18", Material: "Metal fundido y resina" } },
  "mercedes-w07": { name: "Mercedes W07", year: 2016, price: "185 €", img: "mercedes-w07.jpg", alt: "Mercedes W07 plateado y negro rodando en Australia",
    text: "El monoplaza híbrido de Mercedes de 2016, ganador de 19 de las 21 carreras de la temporada.",
    specs: { Piloto: "Nico Rosberg (#6)", Motor: "Mercedes PU106C Hybrid V6 turbo 1.6 L", Escala: "1:18", Material: "Metal fundido y resina" } },
  "aston-martin-amr23": { name: "Aston Martin AMR23", year: 2023, price: "175 €", img: "aston-martin-amr23.jpg", alt: "Aston Martin AMR23 verde con el número 14 de frente",
    text: "El verde británico de Aston Martin en 2023, con Fernando Alonso subiendo al podio en ocho ocasiones.",
    specs: { Piloto: "Fernando Alonso (#14)", Motor: "Mercedes M14 E Performance V6 híbrido 1.6 L", Escala: "1:18", Material: "Metal fundido y resina" } }
};

const detail = document.getElementById("product-detail");
if (detail) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS[id];
  if (p) {
    document.title = `${p.name} ${p.year} · Paddock`;
    const img = detail.querySelector(".detail__img");
    img.src = `img/${p.img}`;
    img.alt = p.alt;
    detail.querySelector(".detail__title").textContent = `${p.name} (${p.year})`;
    detail.querySelector(".detail__price").textContent = p.price;
    detail.querySelector(".detail__text").textContent = p.text;
    const dl = detail.querySelector(".detail__specs");
    dl.replaceChildren();
    for (const [k, v] of Object.entries(p.specs)) {
      const dt = document.createElement("dt"); dt.textContent = k;
      const dd = document.createElement("dd"); dd.textContent = v;
      dl.append(dt, dd);
    }
  }
}

// Formulario de contacto (demostración, sin servidor)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelector(".form__status").textContent = "Mensaje enviado. Te responderemos en 24 horas.";
    form.reset();
  });
}
