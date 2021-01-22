document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            let out = "<ul>";
            data.forEach(el => {
                out += `<li>${el.title}</li>`
                //console.log(el.title);
            });
            out += "</ul>";
            document.querySelector("#isi").innerHTML = out;
        })
}