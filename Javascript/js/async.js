document.querySelector("#klik").addEventListener("click", tampil);

async function tampil() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);

    const data = await res.json();

    let out = "<ul>";
    data.forEach(el => {
        out += `<li>${el.name}</li>`
    });
    out += "</ul>";
    document.querySelector("#isi").innerHTML = out;


}