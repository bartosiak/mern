let preloading = false;

const showPreloader = () => {
    let preloader = document.getElementById("preloader");
    console.log("showPreloader()");
    preloader.style.display = "block";
    preloading = true;
};

const hidePreloader = () => {
    let preloader = document.getElementById("preloader");
    console.log("hidePreloader()");
    preloader.style.display = "none";
    preloading = false;
};

const getData = () => {
    if (!preloading) {
        showPreloader();
        fetch("https://akademia108.pl/api/ajax/get-users.php")
            .then((res) => res.json())
            .then((data) => {
                let hr = document.createElement("hr");
                document.body.appendChild(hr);
                for (let user of data) {
                    let pId = document.createElement("p");
                    let pName = document.createElement("p");
                    let pWebsite = document.createElement("p");

                    pId.innerHTML = `User ID: ${user.id}`;
                    pName.innerHTML = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br>--------`;

                    document.body.appendChild(pId);
                    document.body.appendChild(pName);
                    document.body.appendChild(pWebsite);
                }

                hidePreloader();
            });
    }
};

const scrollToEndOfPage = () => {
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    if (sumScrollTopClientHeight >= scrollHeight) {
        getData();
    }
};

window.addEventListener("scroll", scrollToEndOfPage);
