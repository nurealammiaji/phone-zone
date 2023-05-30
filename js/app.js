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
        phoneDiv.classList.add("Col");
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })
}

loadPhones();