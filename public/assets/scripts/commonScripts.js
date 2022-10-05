document.querySelector('body').onload = function () {
    const refresh_token = getCookie('refresh_token');
    console.log('vlaueslulkdjaf', access_token);
    if (refresh_token === null) {
        window.location.replace('/public/');
    } else if (access_token === null) {
        refreshToken();
    }
};
