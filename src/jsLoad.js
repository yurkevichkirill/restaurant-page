import burgerImgUrl from "./imgs/burger.png";
import nuggetsImgUrl from "./imgs/nuggets.png";
import friesImgUrl from "./imgs/fries.png";

function createJS(){
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.className = "header";
    content.appendChild(header);

    const left_sidebar = document.createElement("div");
    left_sidebar.className = "left-sidebar";
    content.appendChild(left_sidebar);

    const article = document.createElement("div");
    article.className = "article";
    content.appendChild(article);

    const meals = document.createElement("div");
    meals.className = "meals";
    article.appendChild(meals);

    const meal_head = document.createElement("div");
    meal_head.className = "meal-head";
    meals.appendChild(meal_head);

    const burger = document.createElement("div");
    burger.className = "burger";
    meals.appendChild(burger);

    const burgerImg = document.createElement("img");
    burgerImg.src = burgerImgUrl;
    burgerImg.alt = "Burger";
    burger.appendChild(burgerImg);

    const burgerText = document.createElement("div");
    burgerText.textContent = "Tastyyy ChickenBurger";
    burger.appendChild(burgerText);

    const nuggets = document.createElement("div");
    nuggets.className = "nuggets";
    meals.appendChild(nuggets);

    const nuggetsImg = document.createElement("img");
    nuggetsImg.src = nuggetsImgUrl;
    nuggetsImg.alt = "Nuggets";
    nuggets.appendChild(nuggetsImg);

    const nuggetsText = document.createElement("div");
    nuggetsText.textContent = "Juicy Nuggggets";
    nuggets.appendChild(nuggetsText);

    const fries = document.createElement("div");
    fries.className = "fries";
    meals.appendChild(fries);

    const friesImg = document.createElement("img");
    friesImg.src = friesImgUrl;
    friesImg.alt = "Nuggets";
    fries.appendChild(friesImg);

    const friesText = document.createElement("div");
    friesText.textContent = "Juicy Nuggggets";
    fries.appendChild(friesText);
}

export {createJS};

{/* <div id="content">
        <div class="header">Welcome to our Bear Restaurant</div>
        <div class="left-sidebar"></div>
        <div class="article">
            <div class="meals">
                <div class="meal-head"> Our popular meals</div>
                <div class="burger">
                    <img src="imgs/burger.png" alt="Burger">
                    <div>Tastyyy ChickenBurger</div>
                </div>
                <div class="nuggets">
                    <img src="imgs/nuggets.png" alt="Nuggets">
                    <div>Juicy Nuggggets</div>
                </div>
                <div class="fries">
                    <img src="imgs/fries.png" alt="Fries">
                    <div>Tasteful Fries</div>
                </div>
            </div>
            <div class="about">
                <div class="about-head">Some facts about</div>
                <div class="text-about">Nestled in the heart of Grove Street 69, our restaurant is a cozy den for food lovers with a taste for adventure. Inspired by the mighty bear—a symbol of strength, warmth, and hearty appetites—we serve up delicious, satisfying meals that’ll make you growl for more! </div>
            </div>
            <div class="work-time"></div>
            <div class="location"></div>
        </div>
        <div class="right-sidebar"></div>
        <div class="footer">
            <div class="contact">
                <div class="contact-head">CONTACT</div>
                <div class="address">
                    69-Grove Street<br>
                    Madrid, Spain
                </div>
                <div class="mail">
                    <a href="#">kiril.iurkievich@mail.ru</a>
                </div>
                <div class="phone"> (8029)573-39-77</div>
            </div>
            <div class="foot-head">
                <div class="name">Bear Restaurant</div>
                <div class="social"></div>
            </div>
            <div class="hours">
                <div class="hours-head">HOURS</div>
                <div class="schedule">
                    Mon-Fri 16-02<br>
                    Sut-Sun 14-04
                </div>
            </div>
        </div>
    </div> */}