let loadPhones = async() => {
    let url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    let res = await fetch(url);
    let data = await res.json();
    displayPhones(data);
}

let displayPhones = (phones) => {
    console.log(phones.data);
    let phonesContainer = document.getElementById("phones-container");
    phones.data.forEach(phone => {
        console.log(phone);
        let phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
        <div class="card col">
            <img src="${phone.image}"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6>Brand: ${phone.brand}</h6>
                <p class="card-text"></p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${phone.phone_name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        Brand:
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })
}

loadPhones();