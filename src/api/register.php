<?php
    # 获取前端传递过来的参数
    $tel = $_POST['tel'];
    $password = $_POST['password'];
    $con = mysqli_connect('localhost','root','123456','wpk');

    // 先去数据库中对比这个手机号是否存在
    $sql1 = "SELECT *  FROM `user` WHERE `tel` = '$tel'";
    $res1 = mysqli_query($con,$sql1);

    $row = mysqli_fetch_assoc($res1);
    if($row){
        echo json_encode(array(
            "code" => 2,
            "message" => "该手机号已注册"
        ));
    }else{
        // 写插入数据的SQL语句
        $sql2 = "INSERT INTO `user` VALUES (null,'$tel','$password')";

        $res2 = mysqli_query($con,$sql2);

        if($res2){
            echo json_encode(array(
                "code" => 1,
                "message" => "注册成功"
            ));
        }else{
            echo json_encode(array(
                "code" => 0,
                "message" => "注册失败"
            ));
        }
    }
?>