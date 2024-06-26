const clear_btn = document.querySelector("#clear_btn");
const color_btn = document.querySelector("#color_btn");
const size_btn = document.querySelector("#size_btn");
const canvas = document.querySelector(".canvas");

let canvas_size;

size_btn.addEventListener ("click", () => {
    canvas_size = parseInt(prompt("Qual o tamanho desejado?"));
    alert (canvas_size);
});

