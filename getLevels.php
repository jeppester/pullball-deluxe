<?php
	$levelFormats = array('lvl', 'js');

	$initDir = dirname(__FILE__) . '/levels';
	$folders = scandir($initDir);

	$ret = array();
	foreach ($folders as $folderName) {
		if (in_array($folderName, array('..', '.', '10_Custom levels')) || !is_dir("$initDir/$folderName")) {
			continue;
		}

		// Create folder object
		$folder = array(
			"folderName" => $folderName,
			"levels" => array(),
			"screenShot" => (file_exists("$initDir/$folderName.png") ? "$folderName.png" : false),
			"fId" => count($ret)
		);

		// Add levels to folder
		$levels = scandir($initDir . '/' . $folderName);
		foreach ($levels as $fileName) {
			if (in_array($fileName, array('..', '.'))) {
				continue;
			}

			// Check file extension to see if it is a level file
			preg_match('/(.*)\.([^.]*)$/', $fileName, $m);
			$name = $m[1];
			$extension = $m[2];

			if (in_array($extension, $levelFormats)) {
				// Add level to folder object
				$folder['levels'][] = array(
					"fileName" => $fileName,
					"screenShot" => (file_exists("$initDir/$folderName/$name.png") ? "$name.png" : false),
					"fId" => count($ret),
					"lId" => count($folder['levels'])
				);
			}
		}

		// Add folder to returned folder array
		$ret[] = $folder;
	}

	echo json_encode($ret);
?>
