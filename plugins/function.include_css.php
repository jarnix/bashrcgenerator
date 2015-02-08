<?php

function smarty_function_include_css($params)
{
	$registry=\Nf\Registry::get('config');

	if(!empty($registry->css)) {
		$output='';
		foreach($registry->css as $css) {
			if(strpos($css, '.less')) {
				$output.='<link rel="stylesheet/less" type="text/css" href="' . $css . '">' . "\n";
			}
			else {
				$output.='<link rel="stylesheet" type="text/css" href="' . $css . '">' . "\n";
			}
		}
		return $output;
	}
}
