function handleRoute(route) {
    const contenedorEl = document.querySelector(".contenedor");
  const routes = [
    {
      path: "/sit-1",
      handler: () => (contenedorEl.textContent = "Sit 1"),
    },
    {
      path: "/sit-2",
      handler: () => (contenedorEl.textContent = "Sit 2"),
    },
    {
      path: "/search/termo",
      handler: () => (contenedorEl.textContent = "termo"),
    },
  ];
  for (const r of routes) {
    if (r.path == route) {
       r.handler();
    }
  }
}

function goTo(path) {
  /*
    /sit-1
    /sit-2
    /logout
    */
  console.log(path);
  history.pushState({}, "", path);
  handleRoute(path);
}

(function () {
  const sit1ButtonEl = document.querySelector(".sit-1");
  const sit2ButtonEl = document.querySelector(".sit-2");
  const sit3ButtonEl = document.querySelector(".sit-3");

  sit1ButtonEl.addEventListener("click", () => {
    goTo("/sit-1");
  });
  sit2ButtonEl.addEventListener("click", () => {
    goTo("/sit-2");
  });
  sit3ButtonEl.addEventListener("click", () => {
    goTo("/search/termo");
  });
  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
