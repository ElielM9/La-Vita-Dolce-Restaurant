const btnAll = document.querySelector(`.all`);
const btnSalads = document.querySelector(`.salads`);
const btnPasta = document.querySelector(`.pastas`);
const btnPizza = document.querySelector(`.pizzas`);
const btnPostres = document.querySelector(`.postres`);
const contentPlatillos = document.querySelector(`.platillos`);

const platillos = () => {
  let platillosArray = [];
  const platillos = document.querySelectorAll(`.platillo`);

  platillos.forEach(
    (platillo) => (platillosArray = [...platillosArray, platillo])
  );

  const salads = platillosArray.filter(
    (salad) => salad.getAttribute(`data-platillo`) === `salad`
  );
  const pastas = platillosArray.filter(
    (pasta) => pasta.getAttribute(`data-platillo`) === `pasta`
  );
  const pizzas = platillosArray.filter(
    (pizza) => pizza.getAttribute(`data-platillo`) === `pizza`
  );
  const postres = platillosArray.filter(
    (postre) => postre.getAttribute(`data-platillo`) === `postre`
  );
  showPlatillos(salads, pastas, pizzas, postres, platillosArray);
};

const showPlatillos = (salads, pastas, pizzas, postres, alls) => {
  btnSalads.addEventListener(`click`, () => {
    clear(contentPlatillos);
    salads.forEach((salad) => contentPlatillos.appendChild(salad));
  });
  btnPasta.addEventListener(`click`, () => {
    clear(contentPlatillos);
    pastas.forEach((pasta) => contentPlatillos.appendChild(pasta));
  });
  btnPizza.addEventListener(`click`, () => {
    clear(contentPlatillos);
    pizzas.forEach((pizza) => contentPlatillos.appendChild(pizza));
  });
  btnPostres.addEventListener(`click`, () => {
    clear(contentPlatillos);
    postres.forEach((postre) => contentPlatillos.appendChild(postre));
  });
  btnAll.addEventListener(`click`, () => {
    clear(contentPlatillos);
    alls.forEach((all) => contentPlatillos.appendChild(all));
  });
};

const clear = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
