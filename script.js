// Fungsi untuk menampilkan sapaan berdasarkan waktu
const greetUser = () => {
    const hour = new Date().getHours(); 
    let greeting = "";

    if (hour < 12) {
        greeting = "Selamat Pagi!";
    } else if (hour < 18) {
        greeting = "Selamat Siang!";
    } else if (hour < 21) {
        greeting = "Selamat Sore!";
    } else {
        greeting = "Selamat Malam!";
    }

    // Menampilkan sapaan ke elemen dengan id 'greeting'
    document.getElementById("greeting").innerText = greeting;
};

// Fungsi untuk menampilkan tahun saat ini di footer
const displayYear = () => {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) { 
        const year = new Date().getFullYear();
        yearElement.innerText = year;
    } else {
        console.warn('Elemen dengan id "currentYear" tidak ditemukan.');
    }
};

// Panggil fungsi setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    greetUser();
    displayYear();
});

// Fungsi untuk membuka modal
const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "flex"; 
    }
};

// Fungsi untuk menutup modal
const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none"; 
    }
};

// Fungsi untuk validasi formulir kontak
const validateForm = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi input kosong
    if (!name) {
        alert('Nama harus diisi.');
        return false;
    }
    if (!email) {
        alert('Email harus diisi.');
        return false;
    }
    if (!message) {
        alert('Pesan harus diisi.');
        return false;
    }

    // Validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Email tidak valid.');
        return false;
    }

    alert('Pesan berhasil dikirim!');
    return true;
};
