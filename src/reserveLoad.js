function createReserve(){
    const reserveBtn = document.querySelector(".reserveBtn");
    reserveBtn.classList.add("activeBtn");

    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.classList.remove("activeBtn");

    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.classList.remove("activeBtn");

    const content = document.getElementById("content");
    content.innerHTML = '';

    const reserve = document.createElement("div");
    reserve.textContent = "It's reserve page";
    content.appendChild(reserve);
}

export {createReserve};