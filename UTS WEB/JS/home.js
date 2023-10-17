const film1 = document.querySelector(".film1");
const film2 = document.querySelector(".film2");
const film3 = document.querySelector(".film3");
const film4 = document.querySelector(".film4");
const film5 = document.querySelector(".film5");
film1.addEventListener('click', function() {
    var sinopsis = document.createElement('div');
    sinopsis.className = 'sinopsis';
    sinopsis.innerHTML = 'Seorang manusia baru, Connect, yang memiliki tubuh abadi, diculik oleh organisasi perdagangan organ. Di tengah operasi, dia tiba-tiba terbangun di meja operasi dan berhasil melarikan diri dengan satu matanya yang tersisa.'
    film1.parentNode.insertBefore(sinopsis, film1.nextSibling);
});

film1.addEventListener('mouseout', function() {
    var sinopsis = document.querySelector('.sinopsis');
    if (sinopsis) {
        sinopsis.parentNode.removeChild(sinopsis);
    }
});
film2.addEventListener('click', function() {
    var sinopsis = document.createElement('div');
    sinopsis.className = 'sinopsis';
    sinopsis.innerHTML = 'Doctor John is a South Korean medical drama television series that aired on SBS from July 19 to September 7, 2019.The show is based on the Japanese novel "On Hand of God" by Yo Kusakabe. The series follows the story of Cha Yo-han, a doctor of anesthesiology who is a genius at his work but acts strange sometimes. He works with Kang Shi-young, a resident of anesthesiology who is smart, warm and listens carefully to her patients. The show recurring theme is the debate over euthanasia'
    film2.parentNode.insertBefore(sinopsis, film2.nextSibling);
});


film2.addEventListener('mouseout', function() {
    var sinopsis = document.querySelector('.sinopsis');
    if (sinopsis) {
        sinopsis.parentNode.removeChild(sinopsis);
    }
});
film3.addEventListener('click', function() {
    var sinopsis = document.createElement('div');
    sinopsis.className = 'sinopsis';
    sinopsis.innerHTML = 'Reply 1988 ini bercerita tentang 5 orang sahabat yang hidup dalam satu gang yang sama bernama Ssangmundong di tahun 1988. Mereka adalah siswa SMA yang sedang menapaki jalan mewujudkan mimpi menuju masa depan Ada Sung Deok Sun, anak kedua dari 3 bersaudara yang tumbuh dalam keluarga miskin'
    film3.parentNode.insertBefore(sinopsis, film3.nextSibling);
});

film3.addEventListener('mouseout', function() {
    var sinopsis = document.querySelector('.sinopsis');
    if (sinopsis) {
        sinopsis.parentNode.removeChild(sinopsis);
    }
});
film4.addEventListener('click', function() {
    var sinopsis = document.createElement('div');
    sinopsis.className = 'sinopsis';
    sinopsis.innerHTML = 'Grey’s Anatomy adalah serial televisi Amerika Serikat bertema dunia medis yang tayang sejak 2005. Serial ini menceritakan kehidupan dr. Meredith Grey, putri ahli bedah umum terkemuka bernama Ellis Grey, semenjak menjadi dokter residen hingga akhirnya lulus sebagai dokter bedah. Dr. Meredith bekerja di sebuah rumah sakit fiksi bernama Grace yang berlokasi di Seattle, Amerika Serikat. '
    film4.parentNode.insertBefore(sinopsis, film4.nextSibling);
});

film4.addEventListener('mouseout', function() {
    var sinopsis = document.querySelector('.sinopsis');
    if (sinopsis) {
        sinopsis.parentNode.removeChild(sinopsis);
    }
});
film5.addEventListener('click', function() {
    var sinopsis = document.createElement('div');
    sinopsis.className = 'sinopsis';
    sinopsis.innerHTML = ' Hospital Playlist adalah sebuah drama tentang chemistry persahabatan lima karakter yang saling memahami hanya melalui tatapan mata. Mereka menjalani hidup dengan cara sederhana tetapi istimewa dan menjadi saksi kelahiran serta kematian dari banyak nyawa di sebuah rumah sakit.'
    film5.parentNode.insertBefore(sinopsis, film5.nextSibling);
});

film5.addEventListener('mouseout', function() {
    var sinopsis = document.querySelector('.sinopsis');
    if (sinopsis) {
        sinopsis.parentNode.removeChild(sinopsis);
    }
});