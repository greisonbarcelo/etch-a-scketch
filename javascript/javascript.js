let sketchpad = document.querySelector(".sketchpad");



let container = document.querySelector(".container");
// select all buttons
let buttons = document.querySelectorAll(".resoChoice>button");


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
        container.innerHTML += `<div class="box"></div>`;
    }
    
    // Dynamically set the flex property
    let box = document.querySelectorAll(".box");
    let certainAmount = 100 / num + '%'; // Calculate the width percentage

    box.forEach(b => {
        b.style.flex = `1 0 ${certainAmount}`;
        b.style.overflow = 'hidden';
        // b.style.width = `calc(50% / ${certainAmount})`; /* Each box takes up 1/32 of the container's width */
        b.style.height = `calc(50% / ${certainAmount})`; /* Set the height to match the width */
        // b.style.backgroundColor = 'white';
    });

    // evenrt for hovering to draw
    box.forEach(div => {
        div.addEventListener('mousedown', handleMouseDown);
        div.addEventListener('mouseover', handleMouseOver);
    });
    
    function handleMouseDown(event) {
        // console.log('Mouse down on:', event.target.textContent);
        // Add your custom logic here
    }
    
    function handleMouseOver(event) {
        // console.log('Mouse over on:', event.target.textContent);
        // Add your custom logic here
        // event.target.style.backgroundColor = `${currentColor}`;

        if (currentColor === 'rainbow') {
            event.target.style.backgroundColor = rainbowColors[rainbowIndex];
            rainbowIndex = (rainbowIndex + 1) % rainbowColors.length;
        } else {
            event.target.style.backgroundColor = `${currentColor}`;
        }
    }
}

// // test run generate sketchpad
// generateResolution(8);


let pickerButtons = document.querySelectorAll(".colorPicker>button");
let currentColor;
let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let rainbowIndex = 0;

function getColor(button) {
    if (button.classList.contains('white')) {
        return currentColor = 'white';
    } else if (button.classList.contains('red')) {
        return currentColor = 'red';
    } else if (button.classList.contains('blue')) {
        return currentColor = 'blue';
    } else if (button.classList.contains('green')) {
        return currentColor = 'green';
    } else if (button.classList.contains('eraser')) {
        return currentColor = 'black';
    } else if (button.classList.contains('rainbow')) {
        return currentColor = 'rainbow';
    }
}
pickerButtons.forEach(button => {
    button.addEventListener('click', () => {
    currentColor = getColor(button); 
    });
});


// Erase all divs by setting their background color to black
document.querySelector('.eraseAll').addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'black';
    });
});
