<?php
//Խնդիր 1
$price = 12.36654;
$rounded = round($price,2);
$ceiled = ceil($price);
$floored = floor($price);

echo $rounded ;
echo "\n",$ceiled;
echo "\n",$floored,"\n";

//Խնդիր2
$randInt = rand(1,100);
$randFloat = mt_rand() / mt_getrandmax();
$numbers = [];
for($i = 0; $i <5;$i++) {
    $numbers[] = rand(1,100);
}

$max = max($numbers);
$min = min($numbers);

echo $randInt,"\n",$randFloat,"\n",$max,"\n",$min,"\n";

//Խնդիր 3
$num2 = 8.3;
$num1 = -15.7;

echo(abs($num1) . "\n");
echo(abs($num2) . "\n");
echo(pow($num1,2) . "\n");
echo(sqrt($num2) . "\n");
echo(pow($num1,$num2) . "\n");

//Խնդիր 4
$text = " Hello World ";
$trimed = trim($text);
$upper = strtoupper($text);
$lower = strtolower($text);
$length = strlen($text);

echo "$trimed\n";
echo "$upper\n";
echo "$lower\n";
echo "$length\n";

#խնդիր 5
$sentence = "I love JavaScript, JavaScript is great";
echo str_replace("JavaScript","PHP",$sentence) . "\n";
echo strpos($sentence,"JavaScript") . "\n";
echo str_contains($sentence,"love") . "\n";
echo substr_count($sentence,"JavaScript") . "\n";

#Խնդիր 6 
$email = "user@example.com";
$parts = explode("@",$email);
echo "$parts[0]" . "\n" . "$parts[1]". "\n";
$combined = $parts[0] . "at" . $parts[1];
echo $combined . "\n";
echo strrev($email) . "\n";
echo substr($email,-4);

#Խնդիր 7

?>