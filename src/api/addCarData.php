<?php
    # 手机号 商品id
    $tel = $_GET['tel'];
    $goodsid = $_GET['goodsid'];
    
    $con = mysqli_connect('localhost','root','123456','wpk');

    $sql = "SELECT * FROM `car` WHERE `tel`='$tel' AND `goodsid`='$goodsid'";
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('error for mysqli'.mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);
     # 如果购物车表中存在该条数据，让这个条数据中的goods_num 值加 1
    if($row){
        $goodsNum = $row['goodsnum']+1;
       $res2= mysqli_query($con,"UPDATE `car` SET `goodsnum` = '$goodsNum'  WHERE `tel`='$tel' AND `goodsid`='$goodsid'");
    }else{
        # 如果不存在，就往car表中 添加数据
        $res2= mysqli_query($con,"INSERT INTO `car` (`goodsid`, `tel`, `goodsnum`) VALUES ($goodsid, '$tel', '1')");
    }
    if($res2){
        echo json_encode(array("code"=>true,"msg"=>"添加数据成功"));
    }

?>