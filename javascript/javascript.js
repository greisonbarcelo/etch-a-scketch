let container = document.querySelector(".container");
// select all buttons
let buttons = document.querySelectorAll(".choices>button");


function getResolution(button) {
    if (button.classList.contains('eight')) {
        return 8;
    } else if (button.classList.contains('sixteen')) {
        return 16;
    } else if (button.classList.contains('thirtytwo')) {
        return 32;
    }
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
    num = getResolution(button);
    container.innerHTML = '';
    // test run generate sketchpad
    generateResolution(num);  


    });
});


// set dimension of sketchpad
function generateResolution(num) {
    let reso = num * num;
    for (let i = 1; i <= reso; i++) {
        container.innerHTML += `<div class="box">${i}</div>`;
    }
    
    // Dynamically set the flex property
    let box = document.querySelectorAll(".box");
    let certainAmount = 100 / num + '%'; // Calculate the width percentage

    box.forEach(b => {
        b.style.flex = `1 0 ${certainAmount}`;
        b.style.overflow = 'hidden';
        // b.style.width = `calc(50% / ${certainAmount})`; /* Each box takes up 1/32 of the container's width */
        b.style.height = `calc(50% / ${certainAmount})`; /* Set the height to match the width */
    });
}

// // test run generate sketchpad
// generateResolution(8);

