<?php
// Establish database connection
require_once dirname(__FILE__)."/mysqli2.php";
require_once dirname(__FILE__)."/settings.php";
$db=new mysqli2($dbHost,$dbUser,$dbPass,$dbName);

echo json_encode($db->sel('select name, score from score
		order by score desc, sid
		limit 10'));
?>