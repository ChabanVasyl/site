<?php
if( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) == '' ) {
    header("Location: index.html");
    exit;
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="materialize.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Особистий кабінет</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
                <h2></h2>
                <button class="waves-light waves-effect btn" id="logout">Завершити сесію</button>
            </div>
        </div>
        <div class="row inp">
            <div class="col l12 center-align">
                <form class="login">
                    <div>Ім'я: <input type="text" name="name" class="reset" id="signup-name"></div>
                    <div>Пароль: <input type="password" name="pass" class="reset" id="signup-pass"></div>
                    <div>Дата народження: <input type="text" name="birthday" class="reset" id="signup-birthdays"></div>
                    <div>
                        <label>
                            <input type="radio" value="male" checked name="sex" class="sex with-gap">
                            <span>Чоловік</span>
                        </label>
                        <label>
                            <input type="radio" value="female" name="sex" class="sex with-gap">
                            <span>Жінка</span>
                        </label>
                        <label>
                            <input type="radio" value="other" name="sex" class="sex with-gap">
                            <span>Інше:)</span>
                        </label>
                    </div>
                    <input class="waves-light waves-effect btn" type="submit" value="Змінити" id="signup-submit">
                </form>
            </div>
        </div>
    </div>
    <script src="./logout.js"></script>
    <script src="./ajax.js"></script>
    <script src="./get_user_data.js"></script>
    <script src="./materialize.min.js"></script>
</body>

</html>