
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
if (isset($_POST['btnSub'])) {
  $title = "Best Tour Plan subsribe";
  $body = "
  <h2>New subscriber</h2>
  <b>Email:</b> $email<br>
  "; 
} else if (isset($_POST['btnFoot'])) {
  $title = "New message Best Tour Plan";
  $body = "
  <h2>New message</h2>
  <b>Name:</b> $name<br>
  <b>Phone:</b> $phone<br>
  <b>Message:</b><br>$message
  ";
} else if (isset($_POST['btnMod'])) {
  $title = "New message Best Tour Plan";
  $body = "
  <h2>New message</h2>
  <b>Name:</b> $name<br>
  <b>Phone:</b> $phone<br>
  <b>Email:</b> $email<br>
  <b>Message:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'mail.levanboryan.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'besttour@levanboryan.ru'; // Логин на почте
  $mail->Password   = ''; // Пароль на почте
  $mail->SMTPAutoTLS = false;
  $mail->SMTPSecure = false;
  $mail->Port       = 25;
  $mail->setFrom('besttour@levanboryan.ru', 'Levan Boryan'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('boss.lary@mail.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

if (isset($_POST['btnSub'])) {
  header('Location: subscribe.html');
} else if (isset($_POST['btnFoot']) or isset($_POST['btnMod'])) {
  header('Location: thankyou.html');
}