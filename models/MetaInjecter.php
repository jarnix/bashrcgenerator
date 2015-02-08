<?php

namespace App;

class MetaInjecter {

	private static $metas=array();

	public static function addMeta($meta) {
		self::$metas[]=$meta;
	}

	public static function getMetas() {
		return array_merge(self::$metas, self::getMetasFromConfig());
	}

	public static function getMetasFromConfig() {
		if(!empty(\Nf\Registry::get('config')->metas)) {
			return (array)\Nf\Registry::get('config')->metas;
		}
		else {
			return array();
		}
	}

}
