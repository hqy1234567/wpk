<?php
    $tel = $_GET['tel'];
    // $goodsid = $_GET['goodsid'];

    #链接数据库
    $con = mysqli_connect('localhost','root','123456','wpk');

    # 设置SQL语句
    $sql = "SELECT * FROM `car` WHERE `tel`='$tel'";
    $res = mysqli_query($con,$sql);
    
    if(!$res){
        die('error for mysql' . mysqli_error());
    }

    # 数据的处理
    $arr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }

    // 返回tel，和goodsid给前端
    echo json_encode(array(
        "list" => $arr,
        "code" => 1,
        "message" => "获取列表数据成功"
      ));
?>