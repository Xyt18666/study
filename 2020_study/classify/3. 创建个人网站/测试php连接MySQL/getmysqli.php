<?
// error_reporting(E_ALL ^ E_NOTICE); //设置当前脚本的错误报告等级
// mb_internal_encoding('UTF-8'); //设置/获取内部字符编码
// mb_regex_encoding('UTF-8');  //设置/获取多字节正则表达式的字符编码
// date_default_timezone_set('Asia/Shanghai'); //设置脚本中所有日期/时间函数使用的交替时区
// // header("Access-Control-Allow-Origin:*");//解决跨域请求问题
// header('Content-Type: application/json; charset=UTF-8'); //设置返回头
// ------以上是配置信息，具体不知道干啥---------------


$servername = "localhost";   //连接的服务器
$username = "xueyiten_use";  //数据库用户名
$password = "xyt456517.";   //密码
 
$conn = mysqli_connect($servername, $username, $password);  //连接
if(! $conn )
{
  die('连接错误: ' . mysqli_error($conn));
}
// echo '连接成功<br />';


// ----------------------------------------------------------------
// 这里我无法 创建库  ,应该是 我没有权限 ,因为我是 虚拟主机
// 创建库 
// $sql = 'CREATE DATABASE RUNOOB';
// $retval = mysqli_query($conn,$sql );
// if(! $retval )
// {
//     die('创建数据库失败: ' . mysqli_error($conn));
// }
// echo "数据库 RUNOOB 创建成功\n";
// mysqli_close($conn);

// 选择库 
// mysqli_select_db($conn, 'RUNOOB' );


// ----------------------------------------------------------------------------------

// 创建了 一个表
// $sql = "CREATE TABLE runoob_tbl( ".
        // "runoob_id INT NOT NULL AUTO_INCREMENT, ".
        // "runoob_title VARCHAR(100) NOT NULL, ".
        // "runoob_author VARCHAR(40) NOT NULL, ".
        // "submission_date DATE, ".
        // "PRIMARY KEY ( runoob_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

// mysqli_select_db( $conn, 'xueyiten_test' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('数据表创建失败: ' . mysqli_error($conn));
// }
// echo "数据表创建成功\n";
// mysqli_close($conn);

// --------------------下面是自己的练习--------------------------------
// $sql = "CREATE TABLE my_test( ".  // 创建表 CREATE TABLE 表名
//         "my_id INT NOT NULL AUTO_INCREMENT, ".    //表的属性
//         "my_name VARCHAR(100) NOT NULL, ".
//         "my_age VARCHAR(40) NOT NULL, ".
//         "my_sex VARCHAR(40) NOT NULL, ";

// mysqli_select_db( $conn, 'xueyiten_test' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('数据表创建失败: ' . mysqli_error($conn));
// }
// echo "数据表创建成功\n";
// mysqli_close($conn);


// ------------------------------------------------------------------------------

// 插入数据
// $runoob_title = '学习 ';
// $runoob_author = 'RUNOOB.COM';
// $submission_date = '2020';
 
// $sql = "INSERT INTO runoob_tbl ".
//         "(runoob_title,runoob_author, submission_date) ".
//         "VALUES ".
//         "('$runoob_title','$runoob_author','$submission_date')";
 
 
// mysqli_select_db( $conn, 'xueyiten_test' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//   die('无法插入数据: ' . mysqli_error($conn));
// }
// echo "数据插入成功\n";
// mysqli_close($conn)

// --------------------下面是自己的练习--------------------------------

// $my_name = '鬼吞';
// $my_age = '18';
// $my_sex = '男';
 
// $sql = "INSERT INTO my_test ".   // 插入数据到某个表  INSERT INTO 表名
//         "(my_name,my_age,my_sex) ". //属性
//         "VALUES ".
//         "('$my_name','$my_age','$my_sex')";//对应的值
 
 
// mysqli_select_db( $conn, 'xueyiten_test' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//   die('无法插入数据: ' . mysqli_error($conn));
// }
// echo "数据插入成功\n";
// mysqli_close($conn)
// ------------------------------------------------------------------------------
// 查询数据


 
// $sql = 'SELECT runoob_id, runoob_title, 
//         runoob_author, submission_date
//         FROM runoob_tbl';
 
// mysqli_select_db( $conn, 'xueyiten_test' );

// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('无法读取数据: ' . mysqli_error($conn));
// }
// echo '<h2>菜鸟教程 mysqli_fetch_array 测试</h2>';
// echo '<table border="1"><tr><td>教程 ID</td><td>标题</td><td>作者</td><td>提交日期</td></tr>';
// while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
// {
//     echo "<tr><td> {$row['runoob_id']}</td> ".
//          "<td>{$row['runoob_title']} </td> ".
//          "<td>{$row['runoob_author']} </td> ".
//          "<td>{$row['submission_date']} </td> ".
//          "</tr>";
// }
// echo '</table>';
// mysqli_close($conn)

// --------------------下面是自己的练习--------------------------------
// $sql = 'SELECT my_name, my_age,  
//         my_sex FROM my_test';//查询xx数据在 某个表     SELECT xx  FROM 表名
 
// mysqli_select_db( $conn, 'xueyiten_test' );

// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('无法读取数据: ' . mysqli_error($conn));
// }
// echo '<h2>查询成功 my_test </h2>';
// echo '<table border="1"><tr><td>姓名 ID</td><td>年龄</td><td>性别</td></tr>';
// while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
// {
//     echo "<tr><td> {$row['my_name']}</td> ".
//          "<td>{$row['my_age']} </td> ".
//          "<td>{$row['my_sex']} </td> ".
//          "</tr>";
// }
// echo '</table>';
// mysqli_close($conn)
// --------------------------------------------------------------------------

// 删除表
// $sql = "DROP TABLE runoob_tbl";
// mysqli_select_db( $conn, 'xueyiten_test' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//   die('数据表删除失败: ' . mysqli_error($conn));
// }
// echo "数据表删除成功\n";
// mysqli_close($conn);


// ----------------------------------------------------------

// 返回一个json 


// function decodeUnicode($str){ //中文转码
//   return preg_replace_callback('/\\\\u([0-9a-f]{4})/i',
//     create_function(
//       '$matches',
//       'return mb_convert_encoding(pack("H*", $matches[1]), "UTF-8", "UCS-2BE");'
//     ),
//     $str);
// }



$sql = 'SELECT my_id,my_name, my_age,  
        my_sex FROM my_test';//查询xx数据在 某个表     SELECT xx  FROM 表名

mysqli_select_db( $conn, 'xueyiten_test' );
 
$result = mysqli_query( $conn, $sql );

if(! $result )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) 
{//遍历表
$rsp = array(
    'code' => 0,
    "data"=>array(//返回对象
        "name"=>$row['my_name'],
        "age"=>$row['my_age'],
        "sex"=>$row['my_sex'], 
    ),
    "arr"=>array("Volvo","BMW","Toyota") //返回数组
);
}


echo json_encode($rsp);  //转json ,并返回

//   $json = json_encode($data);
//   echo decodeUnicode($json);//对变量进行JSON编码


mysqli_close($conn)  //关闭先前打开的数据库连接
// exit(); //函数输出一条消息，并退出当前脚本

?>