import "./styles.css";
import { createHome } from "./homeLoad.js"
import { createMenu } from "./menuLoad.js";
import { createReserve } from "./reserveLoad.js";

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const reserveBtn = document.querySelector(".reserveBtn");

createHome();

homeBtn.addEventListener("click", () => {
    createHome();
});

menuBtn.addEventListener("click", () => {
    createMenu();
});

reserveBtn.addEventListener("click", () => {
    createReserve();
});