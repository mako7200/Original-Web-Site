<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "k168sa@gmail.com"; // ここに受信したいメールアドレスを入力
    $subject = "お問い合わせがありました";

    $body = "お名前: $name\n";
    $body .= "メールアドレス: $email\n\n";
    $body .= "お問い合わせ内容:\n$message";

    // メールを送信
    mail($to, $subject, $body);

    // 送信後の処理（例: ユーザーを別のページにリダイレクトするなど）
    header("Location:thank-you.html");
    exit();
}
?>