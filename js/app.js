let loadPhones = async(value) => {

    let url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    let res = await fetch(url);
    let data = await res.json();

    displayPhones(data.data);
}

let displayPhones = (phones) => {

    let showAllDiv = document.getElementById("show-all-div");

    if (phones.length > 6) {
        phones = phones.slice(0, 6);
        showAllDiv.classList.remove("d-none");
    }
    else {
        showAllDiv.classList.add("d-none");
    }

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
                <button id="btn-details" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal" onclick="loadDetails('${phone.slug}')">Show Details</button>
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

let loadDetails = async(id) => {

    let url = `https://openapi.programming-hero.com/api/phone/${id}`;
    let res = await fetch(url);
    let data = await res.json();

    displayDetails(data.data);
}

let displayDetails = (details) => {
    console.log(details);
    let modalTitle = document.getElementById("modal-title");
    modalTitle.innerHTML = `${details.name}`;
    let modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <p>Release Date: ${details.releaseDate ? details.releaseDate : "Not Found"}</p>
    `;
}


loadPhones(value = 'iphone');