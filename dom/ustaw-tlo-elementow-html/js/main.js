console.log("Hello");
let btn = document.querySelector("button");
const setBackground = () => {
    let paragraph1 = document.querySelector(".first");
    let paragraph2 = document.querySelector(".last");
    paragraph1.classList.toggle("red");
    paragraph2.classList.toggle("yellow");
};

console.log(btn);
btn.addEventListener("click", setBackground);
