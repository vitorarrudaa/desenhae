const clear_btn = document.querySelector("#clear_btn");
const color_btn = document.querySelector("#color_btn");
const size_btn = document.querySelector("#size_btn");
const screen = document.querySelector(".screen");

let screen_size;

function screenGrid (screen_size){
    for (let i=0; i<screen_size; i++){//creates a number of columns based on the input of the user
        let col = document.createElement("div");
        col.classList.add("screen_column");
        for (let j=0; j<screen_size; j++){//creates a number of lines inside the columns
            let block = document.createElement("div");
            block.classList.add("screen_square");

            colorBlock(block); //call a function to add an event listener to every block created
            col.appendChild(block);
        }
        screen.appendChild(col);
    }
}

function colorBlock (block){
    block.addEventListener ("mouseenter", () => {
        block.style.background = ("yellow");
    })
}

size_btn.addEventListener ("click", () => {
    screen_size = parseInt(prompt("Qual o tamanho desejado?"));
    screenGrid(screen_size);
});

clear_btn.addEventListener ("click", () =>{
    
})


