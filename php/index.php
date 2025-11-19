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

function getInitials($fullName) {
    $parts = explode(" ", trim($fullName));

    $initials = "";
    foreach ($parts as $part) {
        if ($part !== "") {
            $initials .= strtoupper($part[0]) . ".";
        }
    }

    return $initials;
}

echo getInitials("john smith"); 

?>


<form>
    <h2>Registration Form</h2>

    <label>First Name</label>
    <input type="text" name="first_name" required>

    <label>Last Name</label>
    <input type="text" name="last_name" required>

    <label>Email</label>
    <input type="email" name="email" required>

    <label>Password</label>
    <input type="password" name="password" required>

    <label>Confirm Password</label>
    <input type="password" name="confirm_password" required>

    <label>Username</label>
    <input type="text" name="username">

    <label>Phone</label>
    <input type="tel" name="phone">

    <label>Birth Date</label>
    <input type="date" name="birthdate">

    <label>Gender</label>
    <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <label>Address</label>
    <textarea name="address"></textarea>

    <button type="submit">Register</button>
</form>
