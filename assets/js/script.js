function gebi(s) {
    return document.getElementById(s);
}

// const imageClick = gebi("imageClick");
// const slideOutElement = document.querySelector('.animated-element');

document.addEventListener("DOMContentLoaded", function () {
    // Call changeScene(2) when the page loads to start with scene2
    changeScene(2);

    const image = document.getElementById("qrImage");
    const finishButton = document.getElementById("finishButton");

    function toggleButtonVisibility() {
        if (finishButton.style.display === "block") {
            finishButton.style.display = "none";
        }
    }

    // Add an event listener to the image's onload event
    image.onload = function () {
        // Image has loaded, display the Finish button
        finishButton.style.display = "block";
        finishButton.addEventListener("click", toggleButtonVisibility);
    };
});

var firsttap = 1;
var currscene = 1;
var currsubscene = 1;
var audio = gebi("clickSound");

function dotap() {
    timeout = 0;
    firsttap = 1;
}

document.getElementById("body").addEventListener("click", playSound);


// Define a function to play the click sound
function playSound() {

    audio.play();
}

// function onAnimationEnd() {
//     slideOutElement.removeEventListener('animationend', onAnimationEnd);
//     slideOutElement.style.animation = '';
//     changeScene(3);
//     changeSubScene(1);

// }

// // Add an event listener to the button to trigger the animation
// document.getElementById("imageClick").addEventListener("click", () => {
//     // Your animation code here
//     slideOutElement.style.animation = 'slideToRight 1s ease-in-out forwards';
//     slideOutElement.addEventListener('animationend', onAnimationEnd);
// });

function dosound() {
    if (document.getElementById('vid1') != null) {
        document.getElementById('vid1').muted = false;
    }
}

function checktap() {
    if (firsttap == 1) {
        dosound();
        // console.log('tap');
    }
    setTimeout("checktap()", 100);
}
setTimeout("checktap()", 100);

function dosound() {
    if (document.getElementById('vid1') != null) {
        document.getElementById('vid1').muted = false;
        // document.getElementById('vidAds').play();
    }
}

function changeScene(n) {
    currscene = n;
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'none';
    document.getElementById('scene3').style.display = 'none';
    document.getElementById('scene4').style.display = 'none';
    document.getElementById('scene' + n).style.display = '';

    if (n != 1) {
        document.getElementById('scene1').innerHTML = '';
    }
    else {
        document.getElementById('scene1').innerHTML = " <video id='vid1' width='1080' height='1920' autoplay loop muted><source src='images/sample2.mp4' type='video/mp4'></video>";
    }

    //only uncommented if want to jump straight to scene3
    // if (n === 2) {
    //     setTimeout(function () {
    //         changeScene(3);
    //     }, 4000); // 3000 milliseconds (3 seconds)
    // }

    if(n == 1){
        document.getElementById("finishButton").style.display = 'none';
    }
}

function changeSubScene(n) {
    currsubscene = n;
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'none';
    document.getElementById('section' + n).style.display = '';

    if (n == 2) {
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            Keyboard.open(element.value, currentValue => {
                element.value = currentValue;
            });
        });
    } else {
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            Keyboard.close();
        });
    }
}

var timeout = 0;
var maxtime = 5;

function timer1s() {
    timeout++;
    if (timeout > maxtime && currscene != 1) {
        /*alert('timeout');changescene(1);*/
    }
    setTimeout("timer1s()", 1000);
}
setTimeout("timer1s()", 1000);

document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("qrImage");
    const finishButton = document.getElementById("finishButton");

    function toggleButtonVisibility() {
        if (finishButton.style.display === "block") {
            finishButton.style.display = "none";
        }
    }

    // Add an event listener to the image's onload event
    image.onload = function () {
        // Image has loaded, display the Finish button
        finishButton.style.display = "block";
        finishButton.addEventListener("click", toggleButtonVisibility);
    };
});

function toggleTab(newState) {
    const designImage = document.querySelector('#tab-nav img:nth-child(1)');
    const textImage = document.querySelector('#toggleText');
    const tabImageContainer = document.getElementById('tab-image-container');
    const textholderImage = document.getElementById('textholder');
    const sliderbgElements = document.querySelectorAll('.sliderbg'); // Select all elements with the .sliderbg class
    const rangetextElements = document.querySelectorAll('.rangetext'); // Select all elements with the .rangetext class

    if (newState === 'blue') {
        designImage.src = 'images/button/designblue.jpg';
        textImage.src = 'images/button/textblue.jpg';

        // Show the tab images and textholder
        tabImageContainer.style.display = 'block';
        textholderImage.style.display = 'block';

        // Show all .sliderbg elements
        sliderbgElements.forEach(function (sliderbg) {
            sliderbg.style.display = 'block';
        });

        // Show all .rangetext elements
        rangetextElements.forEach(function (rangetext) {
            rangetext.style.display = 'block';
        });

        // Additional actions when toggling to blue state
        changeSubScene(2);
    } else {
        designImage.src = 'images/button/designpink.jpg';
        textImage.src = 'images/button/textpink.jpg';

        // Hide the tab images and textholder
        tabImageContainer.style.display = 'none';
        textholderImage.style.display = 'none';

        // Hide all .sliderbg elements
        sliderbgElements.forEach(function (sliderbg) {
            sliderbg.style.display = 'none';
        });

        // Hide all .rangetext elements
        rangetextElements.forEach(function (rangetext) {
            rangetext.style.display = 'none';
        });

        // Additional actions when toggling to pink state
        changeSubScene(1);
    }
}

// Usage example:
// To toggle to the blue state, call toggleTab('blue');
// To toggle to the pink state, call toggleTab('pink');


// function toggleTab(newState) {
//     const designImage = document.querySelector('#tab-nav img:nth-child(1)');
//     const textImage = document.querySelector('#toggleText');
//     const tabImageContainer = document.getElementById('tab-image-container');
//     const textholderImage = document.getElementById('textholder');
//     const sliderbgElements = document.querySelectorAll('.sliderbg'); // Select all elements with the .sliderbg class
//     const rangetextElements = document.querySelectorAll('.rangetext'); // Select all elements with the .rangetext class

//     if (textImage.src.endsWith('textpink.jpg')) {
//         designImage.src = 'images/button/designblue.jpg';
//         textImage.src = 'images/button/textblue.jpg';
//         changeSubScene(2);
//         // Hide the tab images and textholder
//         tabImageContainer.style.display = 'block';
//         textholderImage.style.display = 'block';

//         // Show all .sliderbg elements
//         sliderbgElements.forEach(function (sliderbg) {
//             sliderbg.style.display = 'block';
//         });

//         // Show all .rangetext elements
//         rangetextElements.forEach(function (rangetext) {
//             rangetext.style.display = 'block';
//         });
//     } else {
//         designImage.src = 'images/button/designpink.jpg';
//         textImage.src = 'images/button/textpink.jpg';
//         changeSubScene(1);
//         // Show the tab images and textholder
//         tabImageContainer.style.display = 'none';
//         textholderImage.style.display = 'none';

//         // Hide all .sliderbg elements
//         sliderbgElements.forEach(function (sliderbg) {
//             sliderbg.style.display = 'none';
//         });

//         // Hide all .rangetext elements
//         rangetextElements.forEach(function (rangetext) {
//             rangetext.style.display = 'none';
//         });
//     }
// }

function showTextEdit(index) {
    // Hide all textedit divs
    var textEditDivs = document.querySelectorAll('.text-edit');
    textEditDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // Show the selected textedit div
    var selectedDiv = document.getElementById('textedit' + index);
    selectedDiv.style.display = 'block';

    // Update button states (image sources)
    var buttons = document.querySelectorAll('.image-container img');
    buttons.forEach(function(button, i) {
        if (i + 1 === index) {
            // Set the source for the clicked button to its active state
            button.src = button.src.replace("1.png", "2.png");
        } else {
            // Set the source for other buttons to their inactive state
            button.src = button.src.replace("2.png", "1.png");
        }
    });
}

function itemChanged(event) {
    var currentItem = event.item.index;
    
    // Remove active class from all items
    $("#owl-demo .item").removeClass("active");
    
    // Add active class to the current item
    $("#btn" + (currentItem + 1)).parent().addClass("active");
}

$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation: false,
        dots: false
    });
});
