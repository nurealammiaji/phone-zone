let loadPhones = async(value) => {
    let url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    let res = await fetch(url);
    let data = await res.json();
    displayPhones(data.data);
}

let displayPhones = (phones) => {
    phones = phones.slice(0, 6);
    let phonesContainer = document.getElementById("phones-container");
    phonesContainer.innerText = "";
    let warning = document.getElementById("warning");
    if (phones.length === 0) {
        warning.classList.remove("d-none");
        toggleLoader(false);
    }
    else {
        warning.classList.add("d-none");
    }
    phones.forEach(phone => {
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
        <div class="card col">
            <img src="${phone.image}"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6>Brand: ${phone.brand}</h6>
                <p class="card-text"></p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
        toggleLoader(false);
    })
}

let searchPhone = () => {
    toggleLoader(true);
    let searchField = document.getElementById("search-field").value;
    loadPhones(searchField);
}

let toggleLoader = isLoading => {
    let spinner = document.getElementById("spinner");
    if (isLoading) {
        spinner.classList.remove("d-none");
    }
    else {
        spinner.classList.add("d-none");
    }
}

loadPhones(value = 'iphone');