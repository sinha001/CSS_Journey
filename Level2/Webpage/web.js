const url = "../NavbarAmazon/navbar.html";
const header = document.querySelector("header");


const getNavbar = async () => {
    let response = await fetch(url);
    let data = await response.text();
    header.innerHTML = data;
};

getNavbar();

//this is the way of fetching navbar from another folder..
//or second way of fetching same navbar using iframe..