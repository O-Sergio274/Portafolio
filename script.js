/* ************** MENU ************ */
/*((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);*/
/*--------------------------------------------------------------------*/
// Seleccionamos el botón del menú y el menú en sí
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#main-menu');

// Verificamos que ambos elementos existan antes de agregar el evento
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    // Alternamos la clase 'is-active' en el menú
    menu.classList.toggle('is-active');

    // Actualizamos el atributo aria-expanded para accesibilidad
    const expanded = menu.classList.contains('is-active');
    menuBtn.setAttribute('aria-expanded', expanded);
  });
}


/* ****************** CONTACTACFORM ****************** */
((d) => {
  const $form = d.querySelector(".contact-form");
  $loader = d.querySelector(".contact-form-loader");
  $response = d.querySelector(".contact-form-response");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/so281297@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#Gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status} : ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
