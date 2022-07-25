var featureImg = 0;
var companyImg = 0;

function toggleMenu1(id) {
    const div = document.getElementById(id);
    div.classList.toggle("aparecer");
    document.querySelector("#companyDrop").classList.remove("aparecer");

    let imgC = document.getElementById("imgCompany");

    imgC.src = "./images/icon-arrow-down.svg";
    companyImg = 0;

    let img = document.getElementById("imgFeature");

    if (featureImg === 0) {
        img.src = "./images/icon-arrow-up.svg";
        featureImg++;
    } else {
        img.src = "./images/icon-arrow-down.svg";
        featureImg = 0;
    }
}

function toggleMenu2(id) {
    const div = document.getElementById(id);
    div.classList.toggle("aparecer");
    document.querySelector("#featuresDrop").classList.remove("aparecer");
    let imgF = document.getElementById("imgFeature");

    imgF.src = "./images/icon-arrow-down.svg";
    featureImg = 0;

    let img = document.getElementById("imgCompany");

    if (companyImg === 0) {
        img.src = "./images/icon-arrow-up.svg";
        companyImg++;
    } else {
        img.src = "./images/icon-arrow-down.svg";
        companyImg = 0;
    }
}