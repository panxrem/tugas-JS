// DOM : Document Object Model
// penghubung antara dokumen html dan js
// 1. getlemenetById()
// memilih element berdasarkan ID
//
// memilih element html untuk dimanipulasi
const header = document.getElementById("header")            

// mengubah isi teks dari h1
header.textcontent = "ridwan keren"
console.log(header)
leadheader[0].style.color="pink"
leadheader[1].style.color="red"
console.log(leadheader[0])
console.log(leadheader[1])

// queryselector dan queryselectorall
// queryselectorall memilih element berdasarkan css selector
// mengembalikan hasil dalam bentuk nodelist
// (ada index saat harus di manipulasi)
// contoh :
const div = document.querySelector("div")
console.log(div)
