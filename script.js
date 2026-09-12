if (window.innerWidth > 1024) {
    new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
}

function page4Animation() {
    if (window.innerWidth <= 600) return;

    const elemC = document.querySelector("#elem-container");
    const fixed = document.querySelector("#fixed-img");
    const elems = document.querySelectorAll(".elem");

    elemC.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", () => {
        fixed.style.display = "none";
    });

    elems.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            fixed.style.backgroundImage = `url(${elem.dataset.img})`;
        });
    });
}

function swiperAnimation() {
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
    });
}

function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const full = document.querySelector(".full-scr");
    const navImg = document.querySelector("nav img");
    const close = document.querySelector("#close");

    let flag = false;

    menu.addEventListener("click", () => {
        full.style.top = "0";
        navImg.style.opacity = "0";
        flag = true;
    });

    close.addEventListener("click", () => {
        full.style.top = "-100%";
        navImg.style.opacity = "1";
        flag = false;
    });
}

function loader() {
    const loader = document.querySelector("#loader");

    if (!loader) return;

    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4000);
}

swiperAnimation();
page4Animation();
menuAnimation();
loader();