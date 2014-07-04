<?php
// Establish database connection
require_once dirname(__FILE__)."/mysqli2.php";
require_once dirname(__FILE__)."/settings.php";
$db=new mysqli2($dbHost,$dbUser,$dbPass,$dbName);

// Check validity of the received data
$valid = true;

if ($_POST['data']) {
	$data = json_decode($_POST['data']);
}
else {
	//$data = json_decode('[[10610,10632,11001,16841,16841,17889,20492,20966,21065,21653,24825,32793,32815,33187,33207,36730,36843,39220,39532,49506,55070,58028,58116,60688,60794,62707,63314,76462],[20015,25712,37229,41642,49866,63144,63806],[33994,70661,78135],0,32000,"Awesome jesper!"]');
	//echo 0;
	//exit;
}

// First, check if a score with the exact same data has been submitted
if ($db->selRow("select * from score where data='" . json_encode($data) . "'")) {
	$valid = false;
}

$collects = $data[0];
$converts = $data[1];
$deaths = $data[2];
$penalty = $data[3];
$score = $data[4];
$name = $data[5];

if (count($deaths) !== 3) {
	$valid = false;
}

$events = array();
$increaser = 0;
foreach ($collects as $time) {
	// TODO
	while (isset($events[$time * 10 + $increaser])) {
		$increaser ++;
	}
	$events[$time * 10 + $increaser] = 'Collect';

	$increaser = 0;
}
foreach ($converts as $time) {
	while (isset($events[$time * 10 + $increaser])) {
		$increaser ++;
	}

	$events[$time * 10] = 'Convert';

	$increaser = 0;
}
foreach ($deaths as $time) {
	while (isset($events[$time * 10 + $increaser])) {
		$increaser ++;
	}

	$events[$time * 10] = 'Death';

	$increaser = 0;
}
ksort($events);

print_r($events);

// Calculate score based on data
$collected = 0;
$calcScore = 0;

foreach ($events as $type) {
	switch ($type) {
	case 'Collect':
		$collected ++;
		if ($collected > 6) {
			$valid = false;
		}
		break;
	case 'Convert':
		$calcScore += $collected * 1000;
		$calcScore += 500 * ($collected - 1) + ($collected === 6 ? 500 : 0);
		$collected = 0;
		break;
	case 'Death':
		$collected = 0;
		break;
	}
}

$calcScore -= $penalty;

if ($calcScore !== $score) {
	echo "$calcScore\n";
	echo "$score\n";
	$valid = false;
}

// If score is invalid, exit
if ($valid === false) {
	echo 0;
	exit;
}

// If score is valid, save it to database
$name = substr($name, 0, 20);
$name = $name !== '' ? $db->esc($name) : 'Anonymous';

$score = $db->esc($score);
$data = $db->esc(json_encode($data));

echo $db->ins("insert into score (name, score, data) values ('$name', '$score', '$data');");
?>