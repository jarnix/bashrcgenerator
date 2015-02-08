<?php

function smarty_function_include_scripts($params)
{
	$registry=\Nf\Registry::get('config');

	$section=null;

	if($params['where']=='head') {
		$section='head';
	}
	elseif($params['where']=='footer') {
		$section='footer';
	}
	if(!empty($section)) {
		if(isset($registry->javascript->$section)) {
			foreach($registry->javascript->$section as $script) {
				echo '<script src="' . $script . '"></script>' . "\n";
			}
		}
	}
}
