import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnscroll from "./modules/RevealOnScroll";
new RevealOnscroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnscroll(document.querySelectorAll(".testimonial"), 50);

let mobileMenu = new MobileMenu();
if (module.hot) {
    module.hot.accept();
}