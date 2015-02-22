<?php
namespace App;

class Logger
{

    public static function log($log)
    {
        echo '<pre>';
        print_r($log);
        echo '</pre>';
    }
    
}