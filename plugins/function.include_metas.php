<?php

function smarty_function_include_metas($params)
{
	$metas=\App\MetaInjecter::getMetas();
	$html='';
	foreach($metas as $meta) {
		$html.=$meta . "\n";
	}
	return $html;
}
