<?php

$key = 'yzbqklnj';

$i = 1;
while (true) {
    $md = md5($key . $i);
    echo substr($md, 0, 5);
    if (substr($md, 0, 5) === '00000') {
        var_dump($i, $md);
        break;
    }
    $i++;
}

