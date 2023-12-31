let form = document.getElementById("form");
let checkbox = document.getElementById("all-agree");
console.log(form);

const validate = (event) => {
    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let agree1 = document.getElementById("agree-1");
    let errors = document.getElementById("errors");
    console.log(errors);
    errors.innerHTML = "";

    if (inputName.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Wpisz Imię i Nazwisko";
        errors.appendChild(liError);
    }
    if (inputEmail.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Wpisz adres e-mail";
        errors.appendChild(liError);
    }
    if (!inputEmail.value.includes("@")) {
        let liError = document.createElement("li");
        liError.innerText = "Adres e-mail musi zawierać @";
        errors.appendChild(liError);
    }
    if (!agree1.checked) {
        let liError = document.createElement("li");
        liError.innerText = "Nie wyraziłeś zgody 1";
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
};

const allAgree = (event) => {
    let agree1 = document.getElementById("agree-1");
    let agree2 = document.getElementById("agree-2");

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
};

form.addEventListener("submit", validate);
checkbox.addEventListener("change", allAgree);
