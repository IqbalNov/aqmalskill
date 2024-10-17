// Ambil elemen tombol menu dan navigasi
const menuBtn = document.querySelector(".box-menu");
const navigation = document.querySelector(".navigation");

// Tambahkan event listener untuk tombol menu
menuBtn.addEventListener("click", function () {
  // Toggle class 'active' untuk menampilkan atau menyembunyikan menu
  navigation.classList.toggle("active");
});
