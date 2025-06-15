import burgerImgUrl from "./imgs/burger.png";
import nuggetsImgUrl from "./imgs/nuggets.png";
import friesImgUrl from "./imgs/fries.png";

function createJS(){
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Welcome to our Bear Restaurant";
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
    friesText.textContent = "Tasteful Fries";
    fries.appendChild(friesText);

    const about = document.createElement("div");
    about.className = "about";
    article.appendChild(about);

    const about_head = document.createElement("div");
    about_head.className = "about-head";
    about_head.textContent = "Some facts about";
    about.appendChild(about_head);

    const text_about = document.createElement("div");
    text_about.className = "text-about";
    text_about.textContent = "Nestled in the heart of Grove Street 69, our restaurant is a cozy den for food lovers with a taste for adventure. Inspired by the mighty bear—a symbol of strength, warmth, and hearty appetites—we serve up delicious, satisfying meals that’ll make you growl for more!";
    about.appendChild(text_about);

    const rigth_sidebar = document.createElement("div");
    rigth_sidebar.className = "right-sidebar";
    content.appendChild(rigth_sidebar);

    const footer = document.createElement("div");
    footer.className = "footer";
    content.appendChild(footer);

    const contact = document.createElement("div");
    contact.className = "contact";
    footer.appendChild(contact);
    
    const contact_head = document.createElement("div");
    contact_head.className = "contact-head";
    contact_head.textContent = "CONTACT";
    contact.appendChild(contact_head);

    const address = document.createElement("div");
    address.className = "address";
    address.innerHTML = "69-Grove Street<br>Madrid, Spain";
    contact.appendChild(address);
    
    const mail = document.createElement("div");
    mail.className = "mail";
    contact.appendChild(mail);

    const mailLink = document.createElement("a");
    mailLink.textContent = "kiril.iurkievich@mail.ru";
    mailLink.href = "#";
    mail.appendChild(mailLink);

    const phone = document.createElement("div");
    phone.classList = "phone";
    phone.textContent = "(8029)573-39-77";
    contact.appendChild(phone);

    const foot_head = document.createElement("div");
    foot_head.className = "foot-head";
    footer.appendChild(foot_head);

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = "Bear Restaurant";
    foot_head.appendChild(name);

    const hours = document.createElement("div");
    hours.className = "hours";
    footer.appendChild(hours);

    const hours_head = document.createElement("div");
    hours_head.className = "hours-head";
    hours_head.textContent = "HOURS";
    hours.appendChild(hours_head);

    const schedule = document.createElement("div");
    schedule.className = "schedule";
    schedule.innerHTML = "Mon-Fri 16-02<br>Sut-Sun 14-04";
    hours.appendChild(schedule);    
}

export {createJS};