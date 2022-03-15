//DOM Selection
//document.getElementById -> element

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';


//document.getElementsByTagName() -> HTMCollections
//Code bawah ini pakai index satusatu
//const p = document.getElementsByTagName('p');
//p[2].style.backgroundColor = 'lightblue';
//DiaHarusMakai[]masukkanIndexnyaBiarBerubahHitungDari0

//hanyaBisaDiKasihPerIndex Kalau mau semua bisa pakai looping
//Codebawahpakailooping
const p = document.getElementsByTagName('p');
for ( let i=0; i< 4; i++){
    p[i].style.backgroundColor = 'black';
}
//4 diatas bisa diganti dengan p.length jumlah semua indexnya

const h1 = document.getElementsByTagName('h1');
//karena dia tetap dalam HTMCollection walaupun tag nya hanya satu maka masukkan indexnya 0
h1[0].style.fontSize = '50px';

//document.getElementsByClassName() dan sama juga mengembalikan -> HTMCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ganti isi paragraf ni yeee';

const p2 = document.getElementsByClassName('p2');
p2[0].innerHTML = 'Paragraf 2 jdi Rizka Wahyuni';
