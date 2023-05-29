document.querySelector('#logout').onclick = function () {
    let d = new Date();
    d.setTime(d.getTime() - (24 * 60 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `email=; expires=${expires}; path=/`;
    location.reload()
}