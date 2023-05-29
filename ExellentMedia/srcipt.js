
if(document.querySelector('#signup-submit')) {
    document.querySelector('#signup-submit').onclick = function (e) {
        e.preventDefault();
        let name = document.querySelector('#signup-name').value;
        let pass = document.querySelector('#signup-pass').value;
        let email = document.querySelector('#signup-email').value;
        let birthday = document.querySelector('#signup-birthdays').value;
        let sex = document.querySelectorAll('.sex');

        for (let i = 0; i < sex.length; i++) {
            if (sex[i].checked) {
                sex = sex[i].value;
                break;
            }
        }
        let data = {
            "name": name,
            "pass": pass,
            "email": email,
            "birthday": birthday,
            "sex": sex
        }

        ajax('./core/signup.php', 'POST', signup, data);

        function signup(result) {
            if (result == 2) {
                Swal.fire({
                    icon: 'error',
                    title: 'Поля не заповнені',
                    text: 'Будь ласка, заповніть усі поля коректно',
                })
            }
            else if (result == 1) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                }).then(e => {
                    let resetVal = document.querySelectorAll('.reset');
                    for( let i = 0; i<resetVal.length; i++ ) {
                        resetVal[i].value = '';
                    }
                    window.location.href = "/login.html";
                })

            }
        }
    }
}

if(document.querySelector('#login-submit')) {
    document.querySelector('#login-submit').onclick = function (e) {
        e.preventDefault();
        let pass = document.querySelector('#login-pass').value;
        let email = document.querySelector('#login-email').value;
        let data = {
            "pass": pass,
            "email": email
        }
        ajax('./core/login.php', 'POST', login, data);

        function login(result) {
            if (result == 2) {
                Swal.fire(
                    'Помилка',
                    'Заповніть поля вірно',
                    'warning'
                )
            }
            else if (result == 0) {
                Swal.fire(
                    'Помилка',
                    'Такого користувача не знайдено',
                    'question'
                )
            }
            else {
                let timerInterval
                Swal.fire({
                    title: 'Автоматичний перехід',
                    html: 'Залишайтесь з нами <b></b> мілісекунд.',
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((r) => {
                    /* Read more about handling dismissals below */
                    if (r.dismiss === Swal.DismissReason.timer) {
                        let d = new Date();
                        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
                        let expires = d.toUTCString();

                        result = JSON.parse(result);
                        document.cookie = `email=${result.email}; expires=${expires}; path=/`;
                        window.location.href = "./cabinet.php";
                    }
                })

            }
        }
    }
}


