<?php

namespace App\Home;

class ErrorController extends \App\Controller {

	function notFoundAction(){
		$lastError=\Nf\Error\Handler::getLastError();
		echo '404';
	}

	function forbiddenAction(){
		$lastError=\Nf\Error\Handler::getLastError();
		echo '403';
	}

	function errorAction(){
	    $lastError=\Nf\Error\Handler::getLastError();
		echo 'Ach !!! Grosse Error !!!<br>';
		echo '<pre>';
		print_r($lastError);
		echo '</pre>';
	}

}