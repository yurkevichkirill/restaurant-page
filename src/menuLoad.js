function createMenu(){
    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.classList.add("activeBtn");

    const reserveBtn = document.querySelector(".reserveBtn");
    reserveBtn.classList.remove("activeBtn");

    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.classList.remove("activeBtn");

    const content = document.getElementById("content");
    content.innerHTML = '';
    
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Menu";
    content.appendChild(header);

    const left_sidebar = document.createElement("div");
    left_sidebar.className = "left-sidebar";
    content.appendChild(left_sidebar);

    const article = document.createElement("div");
    article.className = "article-menu";
    content.appendChild(article);

    const burgerMenu = document.createElement("div");
    burgerMenu.className = "burger-menu";
    article.appendChild(burgerMenu);

    const burgerHead = document.createElement("div");
    burgerHead.className = "menu-head";
    burgerHead.textContent = "BURGERS"
    burgerMenu.appendChild(burgerHead);

    const chickenB = document.createElement("div");
    chickenB.className = "chicken-b";
    chickenB.classList.add("menu-item");
    chickenB.textContent = "ChickenBurger..................................................5$";
    burgerMenu.appendChild(chickenB); 

    const cheeseB = document.createElement("div");
    cheeseB.className = "cheese-b";
    cheeseB.classList.add("menu-item");
    cheeseB.textContent = "CheeseBurger..................................................6$";
    burgerMenu.appendChild(cheeseB);

    const hamB = document.createElement("div");
    hamB.className = "ham-b";
    hamB.classList.add("menu-item");
    hamB.textContent = "HamBurger..................................................5$";
    burgerMenu.appendChild(hamB);

    const bbqB = document.createElement("div");
    bbqB.className = "bbq-b";
    bbqB.classList.add("menu-item");
    bbqB.textContent = "BBQBurger..................................................7$";
    burgerMenu.appendChild(bbqB);

    const snackMenu = document.createElement("div");
    snackMenu.className = "snack-menu";
    article.appendChild(snackMenu);

    const snackHead = document.createElement("div");
    snackHead.className = "menu-head";
    snackHead.textContent = "SNACKS";
    snackMenu.appendChild(snackHead);

    const friesItem = document.createElement("div");
    friesItem.className = "fries-item";
    friesItem.classList.add("menu-item");
    friesItem.textContent = "Fries..................................................3$";
    snackMenu.appendChild(friesItem);

    const nuggetsItem = document.createElement("div");
    nuggetsItem.className = "nuggets-item";
    nuggetsItem.classList.add("menu-item");
    nuggetsItem.textContent = "Nuggets..................................................7$";
    snackMenu.appendChild(nuggetsItem);

    const wingsItem = document.createElement("div");
    wingsItem.className = "wings-item";
    wingsItem.classList.add("menu-item");
    wingsItem.textContent = "Wings..................................................6$";
    snackMenu.appendChild(wingsItem);

    const onionRings = document.createElement("div");
    onionRings.className = "onionRings";
    onionRings.classList.add("menu-item");
    onionRings.textContent = "OnionRings..................................................5$";
    snackMenu.appendChild(onionRings);

    const drinkMenu = document.createElement("div");
    drinkMenu.className = "drink-menu";
    article.appendChild(drinkMenu);

    const drinkHead = document.createElement("div");
    drinkHead.className = "menu-head";
    drinkHead.textContent = "DRINKS";
    drinkMenu.appendChild(drinkHead);

    const cola = document.createElement("div");
    cola.className = "cola";
    cola.classList.add("menu-item");
    cola.textContent = "Cola..................................................2$";
    drinkMenu.appendChild(cola);

    const energy = document.createElement("div");
    energy.className = "energy";
    energy.classList.add("menu-item");
    energy.textContent = "Energy..................................................3$";
    drinkMenu.appendChild(energy);

    const beer = document.createElement("div");
    beer.className = "beer";
    beer.classList.add("menu-item");
    beer.textContent = "Beer..................................................5$";
    drinkMenu.appendChild(beer)

    const whiskey = document.createElement("div");
    whiskey.className = "whiskey";
    whiskey.classList.add("menu-item");
    whiskey.textContent = "Whiskey..................................................5$";
    drinkMenu.appendChild(whiskey);

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
    name.textContent = "FastFood Restaurant";
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

export {createMenu};