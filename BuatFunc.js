// 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
// 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
//    "Halo! Nama saya (name). Saya tinggal di (origin)."
// 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
function hello(name, origin = "Bandung") {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
  }
  
  // 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
  //    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
  const rahmat = hello("Rahmat", "Semarang");
  
  // 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
  //    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
  const indra = hello("Indra");
  
  // Menampilkan hasil
  console.log(rahmat); // Output: "Halo! Nama saya Rahmat. Saya tinggal di Semarang."
  console.log(indra);  // Output: "Halo! Nama saya Indra. Saya tinggal di Bandung."