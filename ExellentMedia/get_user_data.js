let userEmail = getCookie('email');
let emailUser = {
    "email" : userEmail
}

ajax('./core/get_user_data.php', 'POST', getUserData, emailUser);

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for( let i = 0; i<ca.length; i++ ) {
        let c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if( c.indexOf(name) == 0 ) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(result) {
    console.log(result)
    result = JSON.parse(result);
    document.querySelector('h2').innerHTML = 'Вітаємо тебе : ' + result.name;
    document.title = 'Користувач: ' + result.name
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthdays').value = result.birthday;
}

document.querySelector('#signup-submit').onclick = function (e) {
    e.preventDefault();
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {      
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    
    let updateData = {
        "email" : userEmail,
        "name" : document.querySelector('#signup-name').value,
        "pass" : document.querySelector('#signup-pass').value,
        "birthday" : document.querySelector('#signup-birthdays').value,
        "sex" : sex
    };
    console.log(updateData);
    
    ajax('./core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
    if( result == 1 ) {
        alert('Ви успішно змінили свої данні!')
    }
    else {
        alert('Ви допустили помилку, повторіть знову!')
    }
}
