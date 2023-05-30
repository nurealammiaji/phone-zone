let loadPhones = async() => {
    let url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}