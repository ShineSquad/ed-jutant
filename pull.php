<?php
	exec("pwd", $out);
	$dir = $out[0];
	
	$files = scandir($dir);
	
	if (in_array(".git", $files)) {
		exec("cd $dir && git pull", $out);
		echo var_dump($out);
	} else {
		echo "Can't find git repository in $dir";
	}
?>