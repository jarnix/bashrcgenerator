<?php

ini_set('display_errors', 'on');

error_reporting(E_ALL|E_STRICT|E_NOTICE);
date_default_timezone_set('Europe/Paris');

/*********************************************************
* Includes
* *******************************************************/

$libraryPath = realpath(dirname(__FILE__) . '/../../library');
$applicationPath = realpath(dirname(__FILE__) . '/..');

/*********************************************************
* My application
* ********************************************************/
$applicationNamespace='App';

/*********************************************************
* Autoloader
* *******************************************************/
require(realpath($libraryPath . '/php/classes/Nf/Autoloader.php'));

$autoloader=new \Nf\Autoloader();
//$autoloader->setMap('path_to_map');
$autoloader->addNamespaceRoot('Nf', $libraryPath . '/php/classes/Nf');
$autoloader->addNamespaceRoot('', $libraryPath . '/php/classes');
$autoloader->addNamespaceRoot('', $libraryPath . '/php/models');
$autoloader->addNamespaceRoot($applicationNamespace, $applicationPath . '/models');
$autoloader->addNamespaceRoot('Library', $libraryPath . '/php/models');
$autoloader->register();
/******************************************************* */

$bootstrap=new \Nf\Bootstrap($libraryPath, $applicationPath);
\Nf\Error\Handler::setErrorHandler();
$bootstrap->setApplicationNamespace($applicationNamespace);

$bootstrap->go();