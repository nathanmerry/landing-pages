const mediaTablet = window.matchMedia("(max-width: 850px)");
const navToogle = document.getElementById("js-navToggle");
const navItems = document.getElementById("js-navItems");

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const hideShowNavItems = () => {
  if (mediaTablet.matches) {
    if (navItems.classList.contains("no-show")) {
      switchClass(navItems, "show", "no-show");
    } else {
      switchClass(navItems, "no-show", "show");
    }
  } else {
    switchClass(navItems, "show", "no-show");
  }
};


navToogle.addEventListener("click", hideShowNavItems);

if (mediaTablet.matches) {
  switchClass(navItems, "no-show", "show");
} else {
  switchClass(navItems, "show", "no-show");
}

mediaTablet.addListener(hideShowNavItems);
