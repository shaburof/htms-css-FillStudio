import "../css/servizi/servizi.scss";

// querySelector short function
function qs(selector) {
  return document.querySelector(selector);
}
// select elements
const headerDesktopNav = qs(".header__desktop-nav");
const headerDesktopNavItems = qs(".header__desktop-nav--items");
const logoWhite = qs("#logo-white");
const logoBlack = qs("#logo-black");

const headeHamburgerButton = qs(".header__hamburger");
const mobileNav = qs(".mobile-nav");


// another color for active link in desktop navigation bar
  highlightActiveLink("big");

// listenet for scroll for show/hide diferent nav bars
document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 100) showSmallNav();
  else if (scrollPosition <= 0) showBigNav();
});

// toggle mobile navigation bar
let mobileNovigationBarShow = false;
headeHamburgerButton.addEventListener("click", () => {
  console.log();
  if (!mobileNovigationBarShow) {
    setTimeout(() => (mobileNav.style.transform = "translateX(0)"), 0);
  } else {
    mobileNav.style.transform = "translateX(100%)";
  }
  mobileNovigationBarShow = !mobileNovigationBarShow;
});

// show small nav bar
function showSmallNav() {
  headerDesktopNavItems.style.fontSize = "1.2em";
  headerDesktopNavItems.style.marginRight = "2.8rem";
  headerDesktopNavItems.style.color = "black";
  headerDesktopNav.style.alignItems = "center";
  headerDesktopNav.style.height = "78px";
  headerDesktopNav.style.borderBottom = "solid 1px rgb(224,224,224)";
  setTimeout(() => {
    headerDesktopNav.style.background = "white";
  }, 0);

  logoWhite.style.transform = "translateY(-80px)";
  logoBlack.style.transform = "translateY(0)";
  logoBlack.style.opacity = "1";

  highlightActiveLink('small');
}

//show big nav bar
function showBigNav() {
  headerDesktopNav.style.background = "";
  headerDesktopNav.style.alignItems = "space-between";
  headerDesktopNav.style.height = "130px";

  headerDesktopNavItems.style.fontSize = "1.35em";
  headerDesktopNavItems.style.marginRight = "3.8rem";
  headerDesktopNavItems.style.color = "white";
  headerDesktopNav.style.borderBottom = "none";

  logoBlack.style.transform = "translateY(80px)";
  logoBlack.style.opacity = "0";
  logoWhite.style.transform = "translateY(0)";

  highlightActiveLink("big");
}

function highlightActiveLink(navType) {
  const navActiveLink = qs('.header__desktop-nav--item--active');
  navActiveLink.style.transition = "color 1s";
  if(navType==='big') navActiveLink.style.color = "#e88c8c";
  else if(navType==='small')  navActiveLink.style.color = "gray";
}
