<?php

  include("./config.php");
//$几个变量用哟接受前端传过来的数据
  $name = $_GET['name'];
  $price = $_GET['price'];
  $num = $_GET['num'];


  $sql = "insert into shop (name,price,num) values ('$name',$price,$num)";

  $res = mysql_query($sql);
  if($res){
    echo json_encode(array(
      "res_code" => 1,
      "res_message" => "添加成功"
    ));
  }else{
      echo json_encode(array(
        "res_code" => 0,
        "res_message" => "网络错误，添加失败，请重试"
       
    ));
  }
?>