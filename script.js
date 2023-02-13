// const total =["yusuf",123,true];

//total.push('elang'); //untuk menambahkan elemen di akhir kalimat
//total.pop();        //untuk menghapus/mengeluarkan elemen di akhir kalimat

// total.unshift('Garuda');//untuk menambahkan elemen di awal kalimat
// total.shift();//untuk menghapus/mengeluarkan elemen di awal kalimat

// delete total[1]; //untuk mengahapus data elemen

// total.splice(2,); // untuk menghapus elemen di index 2 sebanyak 1 elemen


// console.log(total);

// struktu r data untuk menyimpan nilai lebih dari satu nilai di javascript diantara lain:
// ada 4 :
// array
// object
// map
// set


const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


const hamburgerMenu = document.querySelector('#hamburger-menu')
    document.addEventListener('click', function (e){
        if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
navbarNav.classList.remove('active');
        } 
    });

