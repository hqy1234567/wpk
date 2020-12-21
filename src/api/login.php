<?php
$tel =$_POST['tel'];
$password = $_POST['password'];

$con = mysqli_connect('localhost','root','123456','wpk');
// 先去数据库中对比这个手机号是否存在
$sql1 = "SELECT *  FROM `user` WHERE `tel` = '$tel'";
$res1 = mysqli_query($con,$sql1);

$row = mysqli_fetch_assoc($res1);
if(!$row){
    echo json_encode(array(
        "code" => 2,
        "message" => "该用户未注册"
    ));
}else{
    // 写查询数据的SQL语句
    $sql2 = "SELECT * FROM `user` WHERE `tel`='$tel' AND `password`='$password'";

    $res2 = mysqli_query($con,$sql2);
    $row2 = mysqli_fetch_assoc($res2);
    if($row2){
        echo json_encode(array(
            "code" => 1,
            "message" => "登录成功"
        ));
    }else{
        echo json_encode(array(
            "code" => 0,
            "message" => "用户名或密码错误"
        ));
    }
}
?>
