<?php

namespace App\Home;

class ErrorController extends \App\Controller {

	function notFoundAction(){
		$lastError=\Nf\Error\Handler::getLastError();
		echo '404';
		if(!empty($lastError['string'])) {
			echo $lastError['string'];
		}
	}

	function forbiddenAction(){
		$lastError=\Nf\Error\Handler::getLastError();
		echo '403 Verboten';
		if(!empty($lastError['string'])) {
			echo $lastError['string'];
		}
	}

	function errorAction(){
		$lastError=\Nf\Error\Handler::getLastError();
		echo 'Ach !!! Grosse Error !!!' . $this->response->cr();
		echo '<pre>';
		print_r($lastError);
		// debug_backtrace();
		echo '</pre>';
	}

}