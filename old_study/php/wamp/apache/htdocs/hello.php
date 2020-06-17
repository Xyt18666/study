
<?php
    echo "hello , word !";
    echo date("Y-m-d H:i:s");

    echo "</br>";

    
    
    try {
        $conn = new PDO("mysql:host=localhost:3001;dbname=root", "root", "123456");
        echo "连接成功"; 
    }
    catch(PDOException $e)
    {
        echo "连接失败";
    }

?>