document.getElementById("judul").innerHTML = "JavaScript";

let desc = document.getElementById("deskripsi");
desc.innerHTML = "Belajar DOM, variable, perulangan";

let nama = document.getElementById("nama")
let btnSimpan = document.getElementById("simpan");
let data = []; //array

btnSimpan.addEventListener('click', function () {
    console.log("Tombol ditekan");
    data.push(nama.value);
    console.log(data);

    document.getElementById("list").innerHTML = "";
    // clear element list 
     for(const [index,value] of data.entries()) {
        console.log(value);
        document.getElementById("list").innerHTML += 
        `<li>${value}</li>`;
     }
});