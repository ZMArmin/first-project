<?php
  include("./config.php");
  $username =$_POST['username'];
  $password =$_POST['password'];
  $sql = "select * from user where username='$username' and password='$password'";
  //由于查询结果是一个资源类型的数据直接放在if条件中结果始终为真，所以应该判断数据查询结果的条数
  $res = mysql_query($sql);
  //的到查询结果数据中的行数
  $rows = mysql_num_rows($res);
  if($rows > 0){
    echo json_encode(array(
      "res_code"=>1,
      "res_message"=>"登录成功"
    ));
  }else{
    echo json_encode(array(
      "res_code"=>0,
      "res_message"=>"用户名或密码错误，登录失败，请重试！"
    ));
  }
?>