var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroperasi && angkot !== 5) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik");
  } else if (angkot === 8 || angkot === 10 || angkot === 5) {
    console.log("Angkot No. " + angkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + angkot + " sedang rusak");
  }
}

// function cubeVolume(sisi) {
//   return sisi**3;
// }

// console.log(cubeVolume(8)+cubeVolume(3));

// function addition(x, y) {
//   return x + y;
// }

// function substraction(x, y) {
//   return x - y;
// }

// function multiplication(x, y) {
//   return x * y;
// }

// function division(x, y) {
//   return x / y;
// }

// function remainder(x, y) {
//   return x % y;
// }

// var angka1 = parseInt(prompt('Masukkan Angka 1 : '));
// var operator = prompt('Masukkan Operator : ');
// var angka2 = parseInt(prompt('Masukkan Angka 2 : '));

// if(operator == '+') {
//   console.log(addition(angka1, angka2));
// } else if(operator == '-') {
//   console.log(substraction(angka1, angka2));
// } else if(operator == '*') {
//   console.log(multiplication(angka1, angka2));
// } else if(operator == '/') {
//   console.log(division(angka1, angka2));
// } else if(operator == '%') {
//   console.log(remainder(angka1, angka2));
// } else {
//   alert('Masukkan Operator dengan benar');
// }

// function addition() {
//   var total = 0;
//   for(var x in arguments) {
//     total += arguments[x];
//   }
//   return total;
// }

// console.log(addition(10, 20, 30, 40));

// var x = 10;
// if(x % 2 === 0) {
//   var genap = true;
// }

// if(genap) {
//   console.log('Genap!');
// }

// function myFunction(x) {
//   console.log(x);
// }

// myFunction(5);

// function myFunction(x) {
//   if(x < 2 ) {
//     return x;
//   } else {
//     return myFunction(x - 1) + myFunction(x - 2);
//   }
// }

// console.log(myFunction(5));

// var arr = [];
// arr = ['Muhammad', 'Alvito', 'Madisyahputra'];

// for(var i = 0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// var arr = ['Muhammad', 'Alvito', 'Madisyahputra'];
// arr.splice(2, 0, 'Viero');
// arr.forEach(function(e, i) {
//   console.log((i+1) + '. ' + e);
// });

// var angka = [3, 5, 2, 1, 7, 4, 10];
// angka.sort(function(a, b) {
//   return a-b;
// });
// angka.forEach(function(e) {
//   console.log(e);
// });

// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//   if(penumpang.length == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for(var i = 0; i < penumpang.length; i++) {
//       if(penumpang[i] == undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if(penumpang[i] == namaPenumpang) {
//         console.log(namaPenumpang + ' sudah ada di dalam angkot!');
//         return penumpang;
//       } else if(i == penumpang.length - 1) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// }

// var hapusPenumpang = function(namaPenumpang, penumpang) {
//   if(penumpang.length == 0) {
//     console.log('Tidak ada penumpang di dalam angkot!');
//     return penumpang;
//   } else {
//     for(var i = 0; i < penumpang.length; i++) {
//       if(penumpang[i] == namaPenumpang) {
//         penumpang[i] = undefined;
//         return penumpang;
//       } else if(i == penumpang.length - 1) {
//         console.log(namaPenumpang + ' tidak ada di dalam angkot!');
//         return penumpang;
//       }
//     }
//   }
// }

// console.log(tambahPenumpang('Alvito', penumpang));
// console.log(tambahPenumpang('Viero', penumpang));
// console.log(tambahPenumpang('Wahyu', penumpang));
// console.log(hapusPenumpang('Alvito', penumpang));
// console.log(hapusPenumpang('Wahyu', penumpang));
// console.log(tambahPenumpang('Bima', penumpang));
// console.log(tambahPenumpang('Abi', penumpang));
// console.log(tambahPenumpang('Afif', penumpang));
// console.log(hapusPenumpang('Wahyu', penumpang));

// var mahasiswa1 = {
//   nama : 'Muhammad Alvito Madisyahputra',
//   npm : '10121784',
//   email : 'muhammadalvito23@gmail.com',
//   kelas : '3KA17',
//   jurusan : 'Sistem Informasi'
// };

// function Mahasiswa(nama, npm, email, kelas, jurusan) {
//   var mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.npm = npm;
//   mahasiswa.email = email;
//   mahasiswa.kelas = kelas;
//   mahasiswa.jurusan = jurusan;
//   return mahasiswa;
// }

// function Mahasiswa(nama, npm, email, kelas, jurusan) {
//   this.nama = nama;
//   this.npm = npm;
//   this.email = email;
//   this.kelas = kelas;
//   this.jurusan = jurusan;
// }

// var mahasiswa2 = new Mahasiswa('Viero Virgiawan Andromedo', '12345678', 'viero23@gmail.com', '3KA17', 'Sistem Informasi');

// console.log(mahasiswa2.kelas);

// function Angkot(sopir, trayek, penumpang, kas) {
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;

//   this.penumpangNaik = function (namaPenumpang) {
//     this.penumpang.push(namaPenumpang);
//     return this.penumpang;
//   };

//   this.penumpangTurun = function (namaPenumpang, bayar) {
//     if (this.penumpang.length === 0) {
//       console.log("Tidak ada penumpang di dalam angkot!");
//       return this.penumpang;
//     } else {
//       for (var i = 0; i < this.penumpang.length; i++) {
//         if (this.penumpang[i] == namaPenumpang) {
//           this.penumpang[i] = undefined;
//           this.kas += bayar;
//           return this.penumpang;
//         } else if (i == this.penumpang.length - 1) {
//           console.log(namaPenumpang + " tidak ada di dalam angkot!");
//           return this.penumpang;
//         }
//       }
//     }
//   }
// }

// var angkot1 = new Angkot("Alvito", ["Cileungsi", "Rambutan"], [], 0);
// var angkot2 = new Angkot("Viero", ["Lewinanggung", "Auri"], [], 0);
// var angkot3 = new Angkot("Gifar", ["Kranggan", "Pondok Gede"], [], 0);
// var angkot4 = new Angkot("Bima", ["Cileungsi", "Uki"], [], 0);
// var angkot5 = new Angkot("Ariq", ["Cikeas", "Junction"], [], 0);

// console.log(angkot3.penumpangNaik("Wahyu"));
// console.log(angkot3.penumpangTurun('Wahyu', 10000));
// console.log(angkot3);


