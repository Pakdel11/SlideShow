const slider = document.querySelectorAll(".slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

var slideIndex = 1;
showSlides(slideIndex);

prevBtn.addEventListener("click", function () {
    showSlides(slideIndex -= 1);
});
nextBtn.addEventListener("click", function () {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    let i;
    if (n > slider.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slider.length;
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex - 1].style.display = "block";
}