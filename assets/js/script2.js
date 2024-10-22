function gebi(s) {
    return document.getElementById(s);
}

const btnDesign = gebi("btnDesign");
const btnText = gebi("btnText");
const btnNext = gebi("next");
const btnFinish = gebi("finish");
const btnBack = gebi("btnBack");
const sectionA = gebi("sectionA");
const sectionB = gebi("sectionB");
const sectionC = gebi("sectionC");
const imageClick = gebi("imageClick");
// const confirmBtn = gebi("downloadButton");


const slideOutElement = document.querySelector('.animated-element');

function onAnimationEnd() {
    slideOutElement.removeEventListener('animationend', onAnimationEnd);
    showIndex();
}

function intro() {
    imageClick.addEventListener("click", () => {
        slideOutElement.style.animation = 'slideToRight  1s ease-in-out forwards';
        slideOutElement.addEventListener('animationend', onAnimationEnd);
    });
}

function showHomePage() {
    $("#home").fadeIn();
    $("#ads").fadeOut();
    intro();
}

function showIndex() {
    $("#home").fadeOut();
    $("#index").fadeIn();
}

// confirmBtn.addEventListener("click", () =>{
//     $("#index").fadeOut();
//     $("#confirm").fadeIn();
//     // dopull();
// })


btnDesign.addEventListener("click", () => {
    // Show section A and hide section B
    sectionA.style.display = "block";
    sectionB.style.display = "none";
    sectionC.style.display = "none";

    document.querySelectorAll(".use-keyboard-input").forEach(element => {
        Keyboard.close();
    });
});

btnText.addEventListener("click", () => {
    // Show section B and hide section A
    sectionA.style.display = "none";
    sectionB.style.display = "block";
    sectionC.style.display = "none";

    document.querySelectorAll(".use-keyboard-input").forEach(element => {
        Keyboard.open(element.value, currentValue => {
            element.value = currentValue;
        });
    });
});

btnNext.addEventListener("click", () => {
    // Show section B and hide section A
    sectionA.style.display = "none";
    sectionB.style.display = "block";
    sectionC.style.display = "none";

    document.querySelectorAll(".use-keyboard-input").forEach(element => {
        Keyboard.open(element.value, currentValue => {
            element.value = currentValue;
        });
    });
});

btnFinish.addEventListener("click", () => {
    sectionA.style.display = "none";
    sectionB.style.display = "none";
    sectionC.style.display = "block";
    btnDesign.style.display = "none";
    btnText.style.display = "none";
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
        Keyboard.close();
    });
});

btnBack.addEventListener("click", () => {
    sectionA.style.display = "block";
    sectionB.style.display = "none";
    sectionC.style.display = "none";
    btnDesign.style.display = "block";
    btnText.style.display = "block";
});

