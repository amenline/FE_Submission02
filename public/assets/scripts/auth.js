document.querySelector('form').addEventListener("submit", login);

document.querySelector('body').onload = function () {
    const refresh_token = getCookie('refresh_token');
    const access_token = getCookie('access_token');
    if (refresh_token !== '') {
        if (access_token === '') {
            refreshToken(refresh_token);
        }

        window.location.replace('../public/dashboard.html');
    }
};

function login(_event) {
    _event.preventDefault();

    const username = document.getElementsByName("username")[0].value.trim();
    const password = document.getElementsByName("password")[0].value.trim();

    const payload = {
        username,
        password
    };

    if (username !== '' && password !== '') (
        fetchData(login_url, null, method = 'POST', payload).then(data => {
            console.log(data.msg)
            if (data.msg == 'Bad credentials') {
                const notfication = document.querySelector('.notification');
                notfication.classList.remove("hide");
                setTimeout(function () {
                    notfication.classList.add("hide");
                }, 4000);
            } else if (data.access_token) {
                setCookie('access_token', data.access_token, 15, 'mins');
                setCookie('refresh_token', data.refresh_token);
                window.location.replace('../public/dashboard.html');
            }
        })
    )
}