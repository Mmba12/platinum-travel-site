import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import Modal from "./modules/Modal";
import RevealOnscroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/stickyHeader";
import ClientArea from "./modules/ClientArea";

//End React-tai holbootoi koduud baina
import React from "react";
import ReactDOM from "react-dom";

//Uursdiin bichij ugsun React compontent-iig import hiih
import MyReactComponent from "./modules/MyReactComponent";
ReactDOM.render(
    <MyReactComponent />,
    document.querySelector("#my-react-example"))

new ClientArea();
new StickyHeader();
new RevealOnscroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnscroll(document.querySelectorAll(".testimonial"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal"*/ "./modules/Modal").then(x => {
                modal = new x.default();
                setTimeout(() => modal.openModal(), 20)
            })
                .catch(() => console.log("Failig duudahad aldaa garlaa"));
        } else {
            modal.openModal();
        }
    })
});

if (module.hot) {
    module.hot.accept();
}