document.addEventListener("DOMContentLoaded", function () {
    let luasSection = document.getElementById("luas");
    let kelilingSection = document.getElementById("keliling");
    let btnLuas = document.getElementById("btnLuas");
    let btnKeliling = document.getElementById("btnKeliling");

    // Tampilkan "Luas Persegi" secara default, sembunyikan "Keliling Persegi"
    luasSection.style.display = "block";
    kelilingSection.style.display = "none";

    btnLuas.addEventListener("click", function () {
        luasSection.style.display = "block";
        kelilingSection.style.display = "none";
    });

    btnKeliling.addEventListener("click", function () {
        kelilingSection.style.display = "block";
        luasSection.style.display = "none";
    });
});