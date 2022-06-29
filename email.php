<?php

$errors = [];

if (!empty($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = null;
    $errors[] = "<p>Please Enter Your Name</p>";
};

if (!empty($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $email = null;
    $errors[] = "<p>Please Enter Your Email</p>";
};

if (!empty($_POST['message'])) {
    $message = $_POST['message'];
} else {
    $message = null;
    $errors[] = "<p>Please Enter A Message</p>";
}

if ($_POST['bots'] === "m" || $_POST['bots'] === "M") {
    $bots = $_POST['bots'];
} else {
    $bots = null;
    $errors[] = "<p>Please Enter a Valid Answer</p>";
}

$destination = "info@andrewdinsmore.ca";
$subject = "Inquiry";
$formcontent = "From: $name \n Email: $email \n Message: $message";
$mailheader  = "From: $email \r\n";

if (count($errors) == 0) {
    $result = true;
    if ($result) {
        mail(
            $destination,
            $subject,
            $formcontent,
            $mailheader


        );
        header("Location: index.html");
    }
} else {
    foreach ($errors as $error) {
        echo $error;
    }
};
