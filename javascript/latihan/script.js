let nama = document.getElementById("nama");
let instansi = document.getElementById("instansi");
let btnSimpan = document.getElementById("simpan");
let list = document.getElementById("list");

let data = []; //array data

btnSimpan.addEventListener("click", function () {
    console.log("tombol ditekan");
    // simpan data ke dalam array
    data.push({nama: nama.value, instansi: instansi.value});
    console.log(data);

    document.getElementById("list").innerHTML =""; //clear element list
    for (const [index, value] of data.entries()) {
        console.log(value);
        document.getElementById(
            "list"
        ).innerHTML += `<tr><td>${value.nama}</td><td>${value.instansi}</td></tr>`
    }
});