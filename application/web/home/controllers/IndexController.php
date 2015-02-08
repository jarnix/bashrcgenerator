<?php

namespace App\Home;

class IndexController extends \App\Controller {

	function indexAction(){
		$this->view->render('index');
	}
	
	function index2Action(){
	    $this->view->render('index2');
	}

}
