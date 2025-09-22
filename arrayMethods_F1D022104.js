// Data array: nama teman sekelas
const namaTeman = [
	"Aldi",
	"Rafi",
	"Ajim",
	"Naufal",
	"Aryan",
	"Dzaki",
	"Zidan",
	"Ario",
	"Indra",
	"Holil",
];

// 1. map() → Ubah semua nama menjadi huruf besar
const namaUpper = namaTeman.map((nama) => nama.toUpperCase());
console.log("Nama huruf besar:", namaUpper);
// 2. filter() → Ambil nama yang panjangnya lebih dari 5 huruf
const namaLebih5 = namaTeman.filter((nama) => nama.length > 5);
console.log("Nama > 5 huruf:", namaLebih5);
// 3. reduce() → Hitung total panjang semua nama
const totalPanjang = namaTeman.reduce((total, nama) => total + nama.length, 0);
console.log("Total panjang semua nama:", totalPanjang);
// 4. find() → Cari nama dengan huruf depan sama dengan huruf depan nama Anda
const hurufDepanSaya = "A";
const namaHurufDepan = namaTeman.find((nama) => nama[0] === hurufDepanSaya);
console.log(
	`Nama pertama dengan huruf depan '${hurufDepanSaya}':`,
	namaHurufDepan
);
// 5. some() → Cek apakah ada nama dengan panjang lebih dari 10 huruf
const adaNamaLebih10 = namaTeman.some((nama) => nama.length > 10);
console.log("Ada nama > 10 huruf:", adaNamaLebih10);
// 6. every() → Cek apakah semua nama memiliki panjang lebih dari 3 huruf
const semuaNamaLebih3 = namaTeman.every((nama) => nama.length > 3);
console.log("Semua nama > 3 huruf:", semuaNamaLebih3);
