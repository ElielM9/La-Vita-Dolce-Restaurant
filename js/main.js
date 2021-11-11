`use strict`;
const menu = document.querySelector(`.hamburguer`);
const nav = document.querySelector(`.nav`);
const images = document.querySelectorAll(`img`);
const btnAll = document.querySelector(`.all`);
const btnSalads = document.querySelector(`.salads`);
const btnPasta = document.querySelector(`.pastas`);
const btnPizza = document.querySelector(`.pizzas`);
const btnPostres = document.querySelector(`.postres`);
const contentPlatillos = document.querySelector(`.platillos`);

document.addEventListener(`DOMContentLoaded`, () => {
  events();
  platillos();
});
const events = () => {
  menu.addEventListener(`click`, () => {
    openMenu();
  });
};
const openMenu = () => {
  nav.classList.remove(`ocultar`);
  closeBtn();
};

const closeBtn = () => {
  const btnClose = document.createElement(`p`);
  const overlay = document.createElement(`div`);
  const body = document.querySelector(`body`);
  body.appendChild(overlay);
  if (document.querySelectorAll(`.full-screen`).length > 0) return;
  overlay.classList.add(`full-screen`);
  btnClose.textContent = `x`;
  btnClose.classList.add(`btnClose`);
  /*while (nav.children[5]) {
    nav.removeChild(nav.children[5]);
  }*/
  nav.appendChild(btnClose);
  closeMenu(btnClose, overlay);
};

const closeMenu = (btn, overlay) => {
  btn.addEventListener(`click`, () => {
    nav.classList.add(`ocultar`);
    overlay.remove();
    btn.remove();
  });

  overlay.onclick = function () {
    overlay.remove();
    nav.classList.add(`ocultar`);
    btn.remove();
  };
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => {
  observer.observe(img);
});

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
