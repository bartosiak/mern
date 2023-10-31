const btnGetData = document.getElementById("btnGetData");

btnGetData.addEventListener("click", getData);

function getData() {
    fetch("https://akademia108.pl/api/ajax/get-post.php")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let newDiv = document.createElement("div");
            document.body.appendChild(newDiv);
            newDiv.innerHTML = `
                User-Id: ${data.userId}<br>
                Id: ${data.id}<br>
                Title: ${data.title}<br>
                Body: ${data.body}<br>
                <hr>
             `;
        })
        .catch((error) => {
            console.error(error);
        });
}
