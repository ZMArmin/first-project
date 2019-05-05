## 我的商品管理系统

### 系统功能

* 登录功能
* 注册
* 商品展示
* 商品修改
* 商品删除
* 商品录入

### 使用技术

* HTML5
* CSS3
* Javarscript
* bootstrap
* php
* mysql
* ajax

### 接口文档

###### 查询当前页的数据

* url: api/v1/select.php

* method:get

* query:{pageIndex,countPages}

* data {

  res_code:1//代表成功

  res_mesage:网络错误，c查询失败，请重试

  res_body{

  ​	{id,name,price,num},

  ​	{id,name,price,num}

     }

  }

#### 添加商品的接口

* url:api/v1/add.php

* method:get;

* query:{name,price,num}

* data{

  res_code:1//添加成功

  res_mesage:"添加成功"||"网络错误，添加失败，请重试"

  res_body:{id,name,price,num}

  

#### 删除商品的接口

* url:api/v1/add.php

* method:get

* query:{id}//通过id来删除商品

* data{

  res_code:1//添加成功  0代表失败

  res_message:"删除成功"||"网络错误，删除失败，请重试"

  }

 #### 修改商品，编辑确定的接口

* url:api/v1/ok.php

* method:get

* query:{id,price,num}//通过id来删除商品

* data{

  res_code:1//添加成功  0代表失败

  res_message:"修改成功"||"网络错误，修改失败，请重试"

  }

#### 注册接口

- url:api/v1/register.php

- method:post

- query:{username,password}

- data{

  res_code:1//注册成功  0代表失败

  res_message:"注册成功"||"网络错误，注册失败，请重试"

  }



#### 登录接口

- url:api/v1/login.php

- method:post

- query:{username,password}

- data{

  res_code:1//登录成功  0代表失败

  res_message:"登录成功"||"用户名或密码错误，登录失败，请重试"

  }