/// <reference types="../@types/jquery"  />  
function hideLoader() {
    $('.loader').addClass('d-none');
}
function displayLoader() {
    $('.loader').removeClass('d-none');
};
// open-close-icon
$('.open-close-icon')

$('.open-close-icon i').on('click', function () {

    toggleNav(1000);
})
function toggleNav(duration) {
    $('.side-nav').animate({ width: 'toggle' }, duration);
    $('.nav-header .open-close-icon i').toggleClass('d-none');
}
//------------------------------------------------------------------------------------------
//                      DISPLAY DEFAULT VAUES
//------------------------------------------------------------------------------------------
toggleNav(0);
getMoviData();
//------------------------------------------------------------------------------------------
//                      SEARCH FOR DATA INPUT
//------------------------------------------------------------------------------------------

async function searchData(searchKey) {
    $('.loader').removeClass('d-none');
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8edf7a2e66deea0bbb021d2fe176a974&query=${searchKey}`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    if (data.results.length == 0) {
        getMoviData();
    }
    else {
        displayData(data.results);
    }
}
//------------------------------------------------------------------------------------------
//                      GET MOVIE DATA FROM API
//------------------------------------------------------------------------------------------
async function getMoviData() {
    // displayLoader();
    $('.loader').removeClass('d-none');
    // let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    // console.log(data);
    // toggleNav();
    displayData(data.results);
}
function displayData(arr) {
    let container = "", title = "";
    for (let i = 0; i < arr.length; i++) {
        // if(arr[i].original_title== null)
        // {
        //     title=arr[i].name;
        //     if(arr[i].release_date==null){
        //         arr[i].release_date=arr[i].first_air_date;
        //     }
        // }
        container += `
            <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="cardContainer position-relative overflow-hidden">
                        <div class="card-img">
                            <img class="w-100" src="https://image.tmdb.org/t/p/original${arr[i].poster_path}" alt="">
                        </div>
                        <div class="imgLayer fs-5 text-white d-flex flex-column justify-content-between">
                            <h2 class="text-center card-title fw-bold">${arr[i].original_title}</h2>
                            <p class="layerParag">${arr[i].overview.split(" ").slice(0, 25).join(" ")}..</p>
                            <p class="">Realease Date:${arr[i].release_date} </p>
                            <p class="">${arr[i].vote_average}</p>
                        </div>
                    </div>
                </div>
        `;

    }
    document.querySelector('.rowData').innerHTML = container;

    // $('.rowData').html(container);
}
//------------------------------------------------------------------------------------------
//                      GET POPULAR DATA FROM API
//------------------------------------------------------------------------------------------
async function getPopular() {
    $('.loader').removeClass('d-none');
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    displayData(data.results);
}
//------------------------------------------------------------------------------------------
//                      GET POPULAR DATA FROM API
//------------------------------------------------------------------------------------------
async function getTopRated() {
    $('.loader').removeClass('d-none');
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    displayData(data.results);
}
//------------------------------------------------------------------------------------------
//                      GET TRENDING DATA FROM API
//------------------------------------------------------------------------------------------
async function getTrending() {
    $('.loader').removeClass('d-none');
    // let response = await fetch(`https://api.themoviedb.org/3/trending/movie/api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    displayData(data.results);
}
//------------------------------------------------------------------------------------------
//                      GET UPCOMING DATA FROM API
//------------------------------------------------------------------------------------------
async function getUpComing() {
    $('.loader').removeClass('d-none');
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8edf7a2e66deea0bbb021d2fe176a974`);
    let data = await response.json();
    $('.loader').addClass('d-none');
    displayData(data.results);
}
//------------------------------------------------------------------------------------------
//                      CONTACT US
//------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
window.onscroll = function () {
    scrollFun();
}
function scrollFun() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.scroll').removeClass('d-none');
    }
    else {
        $('.scroll').addClass('d-none');

    }
}
//------------------------------------------------------------------------------------------

function validateName(name) {
    // '+' equal {1,} equal one or more 
    let regex = /^[a-z]+$/ig;
    if (regex.test(name) || name == "") {
        $('#nameLabel').addClass('d-none');
    }
    else {
        $('#nameLabel').removeClass('d-none');

    }

}
// validateName();
//------------------------------------------------------------------------------------------
function validatEmail(email) {
    let regexEmail = /^[a-z]+[@][a-z]+\.com$/gi;
    if (regexEmail.test(email) || email == "") {
        $('#emailLabel').addClass('d-none');
    }
    else {
        $('#emailLabel').removeClass('d-none');
    }
}
//------------------------------------------------------------------------------------------
function validatNumber(number) {
    let phone = /^01[0125][0-9]{8}$/gi;
    if (phone.test(number) || number == "") {
        $('#phoneLabel').addClass('d-none');
    }
    else {
        $('#phoneLabel').removeClass('d-none');
    }
}

//------------------------------------------------------------------------------------------
function validatAge(age) {
    if (age > 15 || age == "") {
        $('#ageLabel').addClass('d-none');
    }
    else {
        $('#ageLabel').removeClass('d-none');

    }

}
//------------------------------------------------------------------------------------------
function validatPass(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (regex.test(password) || password == "") {
        $('#passwordLabel').addClass('d-none');
    }
    else {
        $('#passwordLabel').removeClass('d-none');
    }
}

//------------------------------------------------------------------------------------------

// function validatRePass(rePassword){
//     console.log($('#rePassword').value);
//     if(rePassword == $('#rePassword').value)
//     {
//         $('#rePasswordLabel').addClass('d-none');
//     }
//     else{
//         $('#rePasswordLabel').removeClass('d-none');
//     }
// }



//------------------------------------------------------------------------------------------
function contact() {
    let distance = document.getElementById('contact');
    $('body,html').animate({ scrollTop: distance.offsetTop }, 2000);
}

$('.scroll').on('click', function () {
    $('body,html').animate({ scrollTop: '0' }, 2000);
})