function createMenu(){
    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.classList.add("activeBtn");

    const reserveBtn = document.querySelector(".reserveBtn");
    reserveBtn.classList.remove("activeBtn");

    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.classList.remove("activeBtn");

    const content = document.getElementById("content");
    content.innerHTML = '';

    const menu = document.createElement("div");
    menu.textContent = "It's menu page";
    content.appendChild(menu);
}

export {createMenu};