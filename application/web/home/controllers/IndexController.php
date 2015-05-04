<?php
namespace App\Home;

class IndexController extends \App\Controller
{

    function indexAction()
    {
        $this->view->render('index2');
    }

    function index2Action()
    {
        $this->view->render('index');
    }

    function imgAction()
    {
        echo '<html><body><style>body { line-height:8px; }</style>';
        $imageFullPath = '/var/www/bashrcgenerator/html/Untitled-1.png';
        $image = imagecreatefrompng($imageFullPath);
        list ($width, $height) = getimagesize($imageFullPath);
        $colors = array();
        $h = 0;
        $vArr = [0, 16, 52, 88, 124, 160, 196, 232];
        $v = 0;
        for ($y = 37; $y < $height; $y += 32) {
            $h=0;
            $colors[$v]=array();
            $vColor = $vArr[$v];
            for ($x = 45; $x < $width; $x += 24) {
                $vColor = $vArr[$v];
                $hColor = $h;
                $rgb = imagecolorat($image, $x, $y);
                $hexCode = sprintf('#%06x', $rgb);
                if(!($hexCode == '#000000' && !($h==0))) {
                    echo '<div title="' . ($hColor + $vColor) . '" style="width:8px; height:8px; margin-right:1px; float:left; background-color:' . $hexCode . '"></div>';
                    $colors[$v][$h]=[$hColor + $vColor, $hexCode];
                }
                $h++;
            }
            $v++;
            echo '<br style="clear:both;">';
        }
        echo '<br><img src="/Untitled-1.png"><pre>';
        $jsColorsArr = array();
        foreach($colors as $colorLine) {
            $jsColorsArr[]='[';
            $jsColorLineArr = array();
            foreach($colorLine as $colorEntry) {
                $jsColorLineArr[] = '[' . $colorEntry[0] . ', \'' . $colorEntry[1] . '\']';
            }
            reset($colorLine);
            unset($colorEntry);
            $jsColorsArr[]= implode(',', $jsColorLineArr)  . ']<br/>';
        }
        echo implode(',', $jsColorsArr);
        echo '</pre></body></html>';
    }
}
