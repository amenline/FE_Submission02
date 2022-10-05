// console.log(document.querySelector('body'));
let access_token = null;

function setCookie(cookie_name, cookie_value, duration = 30, period = 'days') {
    const date = new Date();
    if (period == 'days') {
        date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
    } else {
        date.setTime(date.getTime() + 15 * 60 * 1000);
    }
    let expires = 'expires=' + date.toUTCString();
    document.cookie =
        cookie_name + '=' + cookie_value + ';' + expires + ';path=/';
}

function getCookie(cookie_name) {
    let name = cookie_name + '=';
    let cookie_array = document.cookie.split(';');
    for (let i = 0; i < cookie_array.length; i++) {
        let cookie = cookie_array[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

function refreshToken() {}

async function fetchData(url, method, payload = null) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('Error while fetching data', error);
    }
}

// function checkCookie() {
//     let user = getCookie('username');
//     if (user != '') {
//         alert('Welcome again ' + user);
//     } else {
//         user = prompt('Please enter your name:', '');
//         if (user != '' && user != null) {
//             setCookie('username', user, 365);
//         }
//     }
// }
