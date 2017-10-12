<?php
function primeFactors($n){
	$return = [];
    //Print the number of two's which divide n
    while ($n % 2 == 0) {
    	$return[] = 2;
    	$n = $n / 2;
    }
         
   	// n must be odd at this point
    // so a skip of 2 ( i = i + 2) can be used
    foreach (range(3, (int)sqrt($n) + 1, 2) as $i) {
    	//while i divides n , push i and divide n
    	while ($n % $i == 0) {
    		$return[] = $i;
    		$n = $n / $i;
    	}
    }

    //The last factor is prime
    if ($n > 2){
        $return[] = $n;
    }

    return $return;
}

$time_start = microtime(true); //Testing (execution time)

print_r(primeFactors(198273912));

$time_end = microtime(true);

//times 1000 gives time in ms
$execution_time = ($time_end - $time_start)*1000;


//On my PC its says .43 ms (average)
echo 'Total Execution Time: '.$execution_time.' ms'. "\n";
