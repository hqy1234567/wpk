<?php
    // 获取传递过来的用名 和 商品id
    $tel = $_GET['tel'];
    $goodsid = $_GET['goodsid'];

    $con = mysqli_connect('localhost','root','123456','wpk');

    $sql = "DELETE FROM `car` WHERE `car`.`goodsid` = '$goodsid' AND `tel` = '$tel'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        echo json_encode(array("code"=>false,"msg"=>"删除数据失败"));
    }else{
        echo json_encode(array("code"=>$res,"msg"=>"删除数据成功"));
    }
?>