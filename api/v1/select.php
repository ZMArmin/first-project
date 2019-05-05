<?php
//引入与数据库建立连接的config.php文件
  include("./config.php");
  $pageIndex = $_GET['pageIndex'];
  $countPages = $_GET['countPages'];

  //查询所有的数据，用来计算总共有多少页的数据
  $sqlAll = "select * from shop";
  $resAll = mysql_query($sqlAll);
  //显示数据的总的数
  $countAll = mysql_num_rows($resAll);
  $totalPages =ceil($countAll / $countPages);

  //sql数据库查询d当前页数据语句，(跳过当前页-1)*每一页索要显示的数据的条数，查询该页索要显示的数据的条数

  $start =($pageIndex-1)*$countPages;
  $sql = "select * from shop limit $start,$countPages";
  //执行查询语句，用一个变量接受查询的结果；此结果的数据类型为资源型的数据类型
  $res = mysql_query ($sql);
  //新建一个空数组
  $shop = array();
  //运用循环资源类型的这个结果，把循环遍历到的数据放入这个空数组中
  //$一个变量接受每次循环到的数据
  while($row = mysql_fetch_assoc($res)){
    //用数组的操作方式将每条数据放入到空数组中
    array_push($shop,$row);
  }
  
 $json = array(
   "res_code"=>1,
   "res_mesage"=> "查询成功",
   "res_body"=>array(
     "data"=>$shop,
     "totalPages"=>$totalPages
   )
   );

//将结果转化为json格式的数据
   echo json_encode($json);
   mysql_close();
?>
