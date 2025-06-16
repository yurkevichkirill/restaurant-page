import reserveImgUrl from "./imgs/reserve.jpeg";

function createReserve(){
    const reserveBtn = document.querySelector(".reserveBtn");
    reserveBtn.classList.add("activeBtn");

    const menuBtn = document.querySelector(".menuBtn");
    menuBtn.classList.remove("activeBtn");

    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.classList.remove("activeBtn");

    const content = document.getElementById("content");
    content.innerHTML = '';

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Reserve rigth now";
    content.appendChild(header);

    const left_sidebar = document.createElement("div");
    left_sidebar.className = "left-sidebar";
    content.appendChild(left_sidebar);

    const article = document.createElement("div");
    article.className = "article";
    content.appendChild(article);

    const formDiv = document.createElement("div");
    formDiv.className = "form-div";
    article.appendChild(formDiv);

    const form = document.createElement("form");
    formDiv.appendChild(form);

    const sizeDiv = document.createElement("div");
    form.appendChild(sizeDiv);

    const sizeLabel = document.createElement("label");
    sizeLabel.for = "size";
    sizeLabel.textContent = "Party size";
    sizeDiv.appendChild(sizeLabel);

    const select = document.createElement("select");
    select.name = "size";
    select.id = "size";
    sizeDiv.appendChild(select);

    for(let i = 1; i < 5; i++){
        const guest = document.createElement("option");
        guest.textContent = (i === 1)?`${i} guest`:`${i} guests`;
        select.appendChild(guest);
    }

    const dateDiv = document.createElement("div");
    form.appendChild(dateDiv);

    const dateLabel = document.createElement("label");
    dateLabel.for = "date";
    dateLabel.textContent = "Date";
    dateDiv.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.id = "date";
    dateInput.type = "date";
    dateDiv.appendChild(dateInput);

    const timeDiv = document.createElement("div");
    form.appendChild(timeDiv);

    const timeLabel = document.createElement("label");
    timeLabel.for = "time";
    timeLabel.textContent = "Time";
    timeDiv.appendChild(timeLabel);

    const timeInput = document.createElement("input");
    timeInput.id = "time";
    timeInput.type = "time";
    timeDiv.appendChild(timeInput);

    const bookBtn = document.createElement("button");
    bookBtn.className = "book";
    bookBtn.textContent = "BOOK NOW";
    formDiv.appendChild(bookBtn);

    const imgDiv = document.createElement("div");
    imgDiv.className = "img-div";
    article.appendChild(imgDiv);

    const reserveImg = document.createElement("img");
    reserveImg.className = "reserve-img";
    reserveImg.src = reserveImgUrl;
    imgDiv.appendChild(reserveImg);

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

export {createReserve};