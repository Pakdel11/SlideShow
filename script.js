const slider = document.querySelectorAll(".slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let bullets = document.querySelectorAll(".navBullets span");
var slide = 1;
counter(slide);
prevBtn.addEventListener("click", () => {
    counter(slide -= 1);
});
nextBtn.addEventListener("click", () => {
    counter(slide += 1);
});

for (let j = 0; j < bullets.length; j++) {
    bullets[j].addEventListener('click', (function (j) {
        return function () {
            counter(slide = j + 1);
        };
    }(j)));
};

function counter(n) {
    let navBullets = document.querySelectorAll(".navBullets span");
    if (n > slider.length) {
        slide = 1;
    }
    if (n < 1) {
        slide = slider.length;
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }

    for (i = 0; i < navBullets.length; i++) {
        navBullets[i].classList.remove('active');
    }
    slider[slide - 1].style.display = "block";
    navBullets[slide - 1].classList.add('active');
}



// del 2

// jag lagde