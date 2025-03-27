window.addEventListener('scroll', function() {
    // parallax
    let welcome = document.getElementById("head");
    let intro = document.getElementById("intro");

    let value = window.scrollY;
    let scaleValue1 = Math.max(1 - value * 0.001, 0.3);
    welcome.style.bottom = value * 0.4 + 'px';
    welcome.style.transform = `scale(${scaleValue1})`;
    intro.style.bottom = value * 0.4 + 'px';
    intro.style.transform = `scale(${scaleValue1})`;
})
// hitung luas
function hitungluas() {
    var sisi = document.getElementById('luas-sisi').value;
    var luas = sisi * sisi;

    document.getElementById('luas').innerHTML = `L = ${sisi} x ${sisi}`;
    document.getElementById('hasil-luas').innerHTML = `L = ${luas}`;
}
// hitung keliling
function hitungkeliling() {
    var sisi = document.getElementById('keliling-sisi').value;
    var keliling = 4 * sisi;

    document.getElementById('keliling').innerHTML = `K = 4 x ${sisi}`;
    document.getElementById('hasil-keliling').innerHTML = `K = ${keliling}`;
}