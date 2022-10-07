/**
 * This script handles authorization,
 * it checkes if the user has an access token
 * It is used in both the dashboard and orders page
 */

document.querySelector('body').onload = function () {
    authenticate();
};

function logout() {
    console.log('logout');
    setCookie('access_token', '');
    setCookie('refresh_token', '');
    window.location.replace('../index.html');
}

function authenticate() {
    const refresh_token = getCookie('refresh_token');
    const access_token = getCookie('access_token');
    if (refresh_token === '') {
        window.location.replace('../index.html');
    } else if (access_token === '') {
        refreshToken(refresh_token);
    }
}
