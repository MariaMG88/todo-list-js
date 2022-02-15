// input, boton +, ul, empty. 1º seleccionar lo que necesitamos.

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

// crear una función para pushear los elementos de la lista

addBtn.addEventListener("click", () => {
    const text = input.value;
    if (tex !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);    // hacemos hijos p de li
        ul.appendChild(li);  // hacemos hijos li de ul
    }
})
