<?php
error_reporting(E_ALL ^ E_NOTICE);
mb_internal_encoding('UTF-8');
mb_regex_encoding('UTF-8');
date_default_timezone_set('Asia/Shanghai');
header('Content-Type: application/json; charset=UTF-8');

$rsp = array(
    'code' => 0,
    'msg' => '未登陆'
);
echo json_encode($rsp);
exit();
