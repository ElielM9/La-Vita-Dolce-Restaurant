const menu = document.querySelector(`.hamburguer`);
const nav = document.querySelector(`.nav`);

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
