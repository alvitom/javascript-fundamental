// Cara membuat object pada javascript :
// 1. Object Literal
// let mahasiswa = {
//     nama: 'Muhammad Alvito M',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hello ${this.nama}, selamat makan`);
//         return 'Energi : ' + this.energi;
//     },
//     olahraga: function(jam) {
//         this.energi -= jam;
//         console.log(`Hello ${this.nama}, salam olahraga`);
//         return 'Energi : ' + this.energi;
//     }
// };
// console.log(mahasiswa.makan(1));
// console.log(mahasiswa.olahraga(2));

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hello ${this.nama}, selamat makan`);
//     return "Energi : " + this.energi;
//   };
//   mahasiswa.olahraga = function (jam) {
//     this.energi -= jam;
//     console.log(`Hello ${this.nama}, salam olahraga`);
//     return "Energi : " + this.energi;
//   };
//   return mahasiswa;
// }
// console.log(Mahasiswa('Muhammad Alvito M', 10));

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Hello ${this.nama}, selamat makan`);
//     return "Energi : " + this.energi;
//   };
//   Mahasiswa.prototype.olahraga = function(jam) {
//     this.energi -= jam;
//     console.log(`Hello ${this.nama}, salam olahraga`);
//     return "Energi : " + this.energi;
//   };
//   Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     console.log(`Hello ${this.nama}, selamat malam :)`);
//     return "Energi : " + this.energi;
//   }
// }
// let mahasiswa = new Mahasiswa('Muhammad Alvito M', 10);
// console.log(mahasiswa);

// 3.1 versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     console.log(`Hello ${this.nama}, selamat makan`);
//     return "Energi : " + this.energi;
//   }
//   olahraga(jam) {
//     this.energi -= jam;
//     console.log(`Hello ${this.nama}, salam olahraga`);
//     return "Energi : " + this.energi;
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     console.log(`Hello ${this.nama}, selamat malam :)`);
//     return "Energi : " + this.energi;
//   }
// }
// let mahasiswa = new Mahasiswa('Muhammad Alvito M', 10);
// console.log(mahasiswa);

// 4. Object.create()
// const methodMhs = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hello ${this.nama}, selamat makan`);
//     return "Energi : " + this.energi;
//   },
//   olahraga: function (jam) {
//     this.energi -= jam;
//     console.log(`Hello ${this.nama}, salam olahraga`);
//     return "Energi : " + this.energi;
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hello ${this.nama}, selamat malam :)`);
//     return "Energi : " + this.energi;
//   }
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMhs);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// console.log(Mahasiswa("Muhammad Alvito M", 10).tidur(5));

// 2.1 Execution Context, Hoisting & Scope
// var nama = 'Alvito';
// console.log(nama);
// Creation phase pada global context
// nama var = undefined
// nama function = fn()
// HOISTING
// window = global object
// this = window

// Execution phase
// console.log(myFunction());
// var nama = 'Alvito';
// var umur = 20;

// function myFunction() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function satu() {
//     var nama = 'Alvito';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Viero';
// satu();
// dua('Wahyu');
// console.log(nama);

// function init() {
//     let nama = 'Alvito';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// let waktu = (function myFunction(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan :)`);
//     }
// })();
// waktu('Alvito');

// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Alvito'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Alvito', 'Pagi'));

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mhs = ['Alvito', 'Wahyu', 'Viero'];
// let jumlahHuruf = mhs.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let mhs = ['Alvito', 'Wahyu', 'Viero'];
// let jumlahHuruf = mhs.map(nama => nama.length);
// console.log(jumlahHuruf);

// let mhs = ['Alvito', 'Wahyu', 'Viero'];
// let jumlahHuruf = mhs.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// Konsep this pada arrow function
// function Mahasiswa() {
//     this.nama = 'Alvito';
//     this.umur = 20;
//     console.log(this);
// }

// const alvito = new Mahasiswa();

// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     this.classList.toggle('size');
//     setTimeout(() => {
//         this.classList.toggle('caption');
//     }, 600);
// });

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3

// const newAngka = [];
// for(let i = 0; i<angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// method chaining
// cari angka > 5
// kali 3
// jumlah
// const hasil = angka.filter(a => a > 5)
// .map(a => a * 3)
// .reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(hasil);

// // ambil semua elemen video
// const videos = Array.from(document.querySelectorAll('ul li[data-duration]'));

// // pilih hanya yang 'JAVASCRIPT LANJUTAN'
// let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// // ambil durasi masing2 video
// .map(item => item.dataset.duration)

// // ubah durasi menjadi int, lalu ubah menit menjadi detik
// .map(waktu => {
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return parts[0] * 60 + parts[1];
// })

// // jumlahkan semua detik
// .reduce((total, detik) => total + detik);

// // ubah format kembali menjadi jam menit detik
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;

// // simpan di DOM
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// const jmlVideo = videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN')).length;
// const pJmlVideo = document.querySelector('.jumlah-video').innerHTML = `${jmlVideo} Video`;

// Template Literals / Template String
// const mhs = {
//     nama: 'Muhammad Alvito',
//     npm: 10121784,
//     jurusan: 'Sistem Informasi'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="npm">${mhs.npm}</span>
// </div>`;
// console.log(el);

// console.log(`Nama = ${mhs.nama}.
// NPM = ${mhs.npm}.
// Jurusan = ${mhs.jurusan}.`);

// const angka = 15;
// console.log(`${(angka % 2 === 0) ? 'genap' : 'ganjil'}`)

// const mhs = [
//   {
//     nama: "Muhammad Alvito",
//     npm: 10121784,
//     jurusan: "Sistem Informasi",
//     semester: 5,
//     matkul: ['Pemrograman Web', 'OOP', 'IMK']
//   },
//   {
//     nama: "Viero Virgiawan",
//     npm: 11223344,
//     jurusan: "Sistem Informasi",
//     matkul: ['Pemrograman Web', 'OOP', 'IMK']
//   },
//   {
//     nama: "Wahyu",
//     npm: 12345678,
//     jurusan: "Sistem Informasi",
//     matkul: ['Pemrograman Web', 'OOP', 'IMK']
//   },
//   {
//     nama: "Silvester",
//     npm: 10113456,
//     jurusan: "Sistem Informasi",
//     matkul: ['Pemrograman Web', 'OOP', 'IMK']
//   },
//   {
//     nama: "Alfi",
//     npm: 10125634,
//     jurusan: "Sistem Informasi",
//     matkul: ['Pemrograman Web', 'OOP', 'IMK']
//   },
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.npm}</li>
// <li>${m.jurusan}</li>
// </ul>`).join('')}
// </div>`;

// const lagu = [
//   {
//     judul: "Arjuna",
//     band: "Dewa 19",
//     feat: "Virzha",
//   },
//   {
//     judul: "Dan Lagi",
//     band: "Lyla",
//   },
// ];

// const el = `<div class="lagu">
// ${lagu.map(l => `<ul>
// <li>${l.band}</li>
// <li>${l.judul} ${l.feat ? `(feat. ${l.feat})` : ""}</li>
// </ul>`).join('')}
// </div>`;

// const mhs = {
//   nama: "Muhammad Alvito",
//   npm: 10121784,
//   jurusan: "Sistem Informasi",
//   semester: 5,
//   matkul: ["Pemrograman Web", "OOP", "IMK"]
// };

// function cetakMatkul(matkul) {
//   return `
//     <ol>
//     ${matkul.map((mk) => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="npm">${mhs.npm}</span>
//     <h4>Mata Kuliah : </h4>
//     ${cetakMatkul(mhs.matkul)}
// </div>`;

// document.body.innerHTML = el;



// const nama = 'Muhammad Alvito';
// const umur = '21';

// function myFunction(strings, ...values) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = myFunction `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// const nama = 'Muhammad Alvito';
// const umur = '21';

// function myFunction(strings, ...values) {
//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = myFunction `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// document.body.innerHTML = str;



// Destructuring Variable / Assignment

// Destructuring Array
// const infoMhs = ['Muhammad Alvito M', 10121784, 'Sistem Informasi', 'Semester 5'];
// // const [nama, npm, jurusan, semester] = infoMhs;
// const [nama, , , semester] = infoMhs;
// console.log(nama);

// swap items
// let a = 5;
// let b = 8;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function myFunction() {
//   return [5, 8];
// }
// const [a, b] = myFunction();
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5
// }

// const {nama, npm, jurusan, semester} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, npm, jurusan, semester} = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5
// });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5
// }

// const {nama: name, npm, jurusan, semester} = mhs;
// console.log(name);

// Memberikan Default Value
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5,
//   fakultas: 'FIKTI'
// }

// const {nama, npm, jurusan, semester, fakultas = 'FTI'} = mhs;
// console.log(fakultas);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5,
//   fakultas: 'FIKTI'
// }

// const {nama: n, npm, jurusan: jur, semester, fakultas: fak = 'FTI'} = mhs;
// console.log(fak);

// Rest Parameter
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5,
//   fakultas: 'FIKTI'
// }

// const {nama, ...values} = mhs;
// console.log(values);

// Mengambil field / properti pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 23,
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5,
//   fakultas: 'FIKTI'
// }

// function getIdMhs({id, ...values}) {
//   return values;
// }

// console.log(getIdMhs(mhs));

// problem : variabel harus urut
// function operasiMatematika(a, b) {
//   return [a+b, a-b, a*b, a/b, a%b];
// }

// const [jumlah, kurang, kali, bagi, sisa] = operasiMatematika(200, 30);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);
// console.log(sisa);

// solusi : return berbentuk object
// function operasiMatematika(a, b) {
//   return {
//     jumlah: a + b, 
//     kurang: a - b,
//     kali: a * b, 
//     bagi: a / b,
//     sisa: a % b
//   };
// }

// const {kurang, jumlah, kali, bagi, sisa} = operasiMatematika(200, 30);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);
// console.log(sisa);

// Destructuring function arguments
// const mhs = {
//   id: 23,
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5,
//   fakultas: 'FIKTI',
//   nilai: {
//     tugas: 90,
//     uts: 85,
//     uas: 80
//   }
// }

// function infoMhs({id, nama, npm, jurusan, semester, fakultas, nilai: {tugas, uts, uas}}) {
//   return `Halo, nama saya ${nama}, npm saya ${npm}. Saya dari jurusan ${jurusan}. Nilai UTS saya adalah ${uts}`;
// }

// console.log(infoMhs(mhs));



// for..of
// const mhs =['Alvito', 'Viero', 'Bima', 'Adam', 'Daffa'];
// for(i=0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }
// mhs.forEach(m => console.log(m));
// for(const m of mhs) {
//   console.log(m);
// }

// String
// const nama = 'Muhammad Alvito M';
// for(const n of nama) {
//   console.log(n);
// }

// const mhs =['Alvito', 'Viero', 'Bima', 'Adam', 'Daffa'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa dengan urutan ke ${i+1}`);
// });

// for(const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa dengan urutan ke ${i+1}`);
// }

// Nodelist
// const daftarMhs = document.querySelectorAll('.nama');
// // daftarMhs.forEach(nama => console.log(nama.innerHTML));
// for(const nama of daftarMhs) {
//   console.log(nama.innerHTML);
// }

// Arguments
// function operasiMatematika() {
//   // return arguments.reduce((acc, curr) => acc + curr); 
//   // let jumlah = 0;
//   // arguments.forEach(a => jumlah += a);
//   // return jumlah;
//   let jumlah = 0;
//   for(const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(operasiMatematika(1, 2, 3, 4, 5));


// for..in
// const mhs = {
//   nama: 'Muhammad Alvito M',
//   npm: 10121784,
//   jurusan: 'Sistem Informasi',
//   semester: 5
// }

// for(const m in mhs) {
//   console.log(mhs[m]);
// }



// Spread Operator
// memecah iterables menjadi single element
// const mahasiswa = ['Alvito', 'Viero', 'Adam'];
// console.log(...mahasiswa[0]);

// Menggabungkan 2 array
// const mahasiswa = ['Alvito', 'Viero', 'Adam'];
// const dosen = ['Yuli', 'Maria', 'Bayu'];
// const gabung = [...mahasiswa, 'Ricky', ...dosen];
// // const gabung = mahasiswa.concat(dosen);
// console.log(gabung);

// // copy array
// const mhs = ['Alvito', 'Viero', 'Adam'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[2] = 'Bima';
// console.log(mhs);

// const daftarMhs = document.querySelectorAll('.nama');
// // const mhs = [];
// // daftarMhs.forEach(nama => {
// //   mhs.push(nama.innerHTML);
// // });

// // console.log(mhs);

// const mhs = [...daftarMhs].map(nama => nama.innerHTML);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const letter = [...nama.innerHTML].map(l => `<span>${l}</span>`).join('');
// nama.innerHTML = letter;



// Rest Parameter
// function myFunction() {
//   // return `a = ${a}, b = ${b}, args = ${args}`;
//   // return args;
//   // return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunction(1, 2, 3, 4, 5));

// function operasiMatematika(...angka) {
//   // let total = 0;
//   // for(const a of angka) {
//   //   total += a;
//   // }
//   // return total;
//   return angka.reduce((acc, curr) => acc + curr);
// }
// console.log(operasiMatematika(1, 2, 3, 4, 5));

// array destructuring
// const kel3 = ['Daniel', 'Dhias', 'Indira', 'Muh Alvito', 'Rimba'];
// const [ketua, wakil, ...anggota] = kel3;
// console.log(anggota.join(', '));

// object destructuring
// const team = {
//   pm: 'Alvito',
//   frontend1: 'Silvester',
//   frontend2: 'Alfi',
//   backend1: 'Alex',
//   backend2: 'Rafli',
//   design: 'Arrozan',
//   qa: 'Viero',
//   devOps: 'Bima'
// };
// const {...myTeam} = team;
// console.log(myTeam);

// filtering
// function myFunction(type, ...values) {
//   // return `${type} = ${values.filter(v => typeof v === type)}`;
//   // let dataType = [];
//   // for(let i = 0; i < values.length; i++) {
//   //   if(typeof values[i] === type) {
//   //     dataType.push(values[i]);
//   //   }
//   // }
//   // return dataType;
//   // const dataType = [];
//   // values.forEach(v => {
//   //   if(typeof v === type) {
//   //     dataType.push(v);
//   //   }
//   // });
//   // return dataType;
//   const dataType = [];
//   for(const v of values) {
//     if(typeof v === type) {
//       dataType.push(v);
//     }
//   }
//   return dataType;
// }
// console.log(myFunction('number', 1, 2, 'Alvito', false, '5', 'Viero'));




// Callback
// Synchronous
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "id": 1,
//         "nama": "Muhammad Alvito Madisyahputra",
//         "npm": "10121784",
//         "jurusan": "Sistem Informasi",
//         "email": "muhammadalvito23@gmail.com"
//     },
//     {
//         "id": 2,
//         "nama": "Adhimas Abiyasa Pradipta",
//         "npm": "10121357",
//         "jurusan": "Sistem Informasi",
//         "email": "abiiy203@gmail.com"
//     },
//     {
//         "id": 3,
//         "nama": "Viero Virgiawan Andromedo",
//         "npm": "10114287",
//         "jurusan": "Sistem Informasi",
//         "email": "viero52@gmail.com"
//     },
//     {
//         "id": 4,
//         "nama": "Silvester Bambang Priambodo",
//         "npm": "10125785",
//         "jurusan": "Sistem Informasi",
//         "email": "silvester311@gmail.com"
//     },
//     {
//         "id": 5,
//         "nama": "Maulana Yusuf",
//         "npm": "10124052",
//         "jurusan": "Sistem Informasi",
//         "email": "ucup405@gmail.com"
//     }
// ];
// console.log('Start');
// mhs.forEach(m => console.log(m.nama));
// console.log('End');

// Asynchronous
// function getDaftarMhs(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('Start');
// getDaftarMhs('data/daftarMhs.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
    
// });
// console.log('End');



// AJAX (Asynchronous Javascript And XML)
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=cfdf2551&s=avengers',
//     success: movies => console.log(movies.Search)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=cfdf2551&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=cfdf2551&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));


// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const promise1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// promise1
// .then(response => console.log('OK : ' + response))
// .catch(response => console.log('NOT OK : ' + response));

// contoh 2
// let ditepati = true;
// const promise2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 3000);
//     }
// });
// console.log('Start');
// console.log(promise2
//     .then(() => console.log(promise2)));
// console.log('End');



// const test = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('End');
//     }, 3000);
// });
// console.log(test);
// test.then(() => console.log(test));

// function testPromise() {
//     return new Promise((resolve, reject) => {
//         const waktu = 5000
//         if(waktu < 5000) {
//             setTimeout(() => {
//                 resolve('End');
//             }, waktu);
//         } else {
//             reject('Too Long!!!');
//         }
//     });
// }

// // const test = testPromise();
// // test
// //     .then(() => console.log(test))
// //     .catch(() => console.log(test));


// async function testAsync() {
//     try {
//         const test = await testPromise();
//         console.log(test);
//     } catch(err) {
//         console.log(err);
//     }
// }

// testAsync();