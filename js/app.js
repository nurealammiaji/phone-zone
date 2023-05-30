let loadPhones = async() => {
    let url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    let res = await fetch(url);
    let data = await res.json();
    displayPhones(data);
}

let displayPhones = (phones) => {
    console.log(phones.data);
    phones.data.forEach(phone => {
        console.log(phone);
    })
}

loadPhones();