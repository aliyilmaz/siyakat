<?php

/**
 *
 * @package    siyakat
 * @version    Release: 1.0.0
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   Encryption Algorithm
 * @link       https://github.com/aliyilmaz/siyakat/php
 *
 */

class Siyakat 
{
    /**
     * siyakat_encode
     * @param string $siyakat
     * @param array $miftah
     * @return string
     */
    public function siyakat_encode($siyakat, $miftah){
        if(empty($miftah)){
            return '';
        }
        
        for ($i=0; $i < count($miftah); $i++) { 
            $siyakat = bin2hex($siyakat); // 1
            $siyakat = $this->morse_encode($siyakat, $miftah[$i]); // 2
        }
        return $siyakat;
    }

    /**
     * siyakat_decode
     * @param string $siyakat
     * @param array $miftah
     * @return string
     */
    public function siyakat_decode($siyakat, $miftah){
        if(empty($miftah)){
            return '';
        }
        $miftah = array_reverse($miftah);
        for ($i=0; $i < count($miftah); $i++) { 
            $siyakat = $this->morse_decode($siyakat, $miftah[$i]);
            $siyakat = $this->hexToBinary($siyakat);           
        }
        return $siyakat;
    }

    /**
     * hexToBinary
     * @param string $hexstr
     * @return string
     */
    public function hexToBinary($hexstr) { 
		$n = strlen($hexstr); 
		$sbin="";   
		$i=0; 
		while($i<$n){       
			$a = substr($hexstr,$i,2);           
			$c = pack("H*",$a); 
			if ($i==0){
				$sbin=$c; 
			} else {
				$sbin.=$c;
			} 
		$i+=2; 
		} 
		return $sbin; 
	}

    /**
     * morsealphabet
     * @param array|null $morseDictionary
     * @return array
     */
    public function morsealphabet($morseDictionary = array()){
        if(!empty($morseDictionary)){
            return $morseDictionary;
        }
        return array(
             'a' => '.-', 'b' => '-...', 'c' => '-.-.', 'ç' => '-.-..', 'd' => '-..', 'e' => '.', 'f' => '..-.', 'g' => '--.', 'ğ' => '--.-.', 'h' => '....', 'ı' => '..', 'i' => '.-..-', 'j' => '.---', 'k' => '-.-', 'l' => '.-..', 'm' => '--', 'n' => '-.', 'o' => '---', 'ö' => '---.', 'p' => '.--.', 'q' => '--.-', 'r' => '.-.', 's' => '...', 'ş' => '.--..', 't' => '-', 'u' => '..-', 'ü' => '..--', 'v' => '...-', 'w' => '.--', 'x' => '-..-', 'y' => '-.--', 'z' => '--..', '0' => '-----', '1' => '.----', '2' => '..---', '3' => '...--', '4' => '....-', '5' => '.....', '6' => '-....', '7' => '--...', '8' => '---..', '9' => '----.', '.' => '.-.-.-', ',' => '--..--', '?' => '..--..', '\'' => '.----.', '!'=> '-.-.--', '/'=> '-..-.', '(' => '-.--.', ')' => '-.--.-', '&' => '.-...', ':' => '---...', ';' => '-.-.-.', '=' => '-...-', '+' => '.-.-.', '-' => '-....-', '_' => '..--.-', '"' => '.-..-.', '$' => '...-..-', '@' => '.--.-.', '¿' => '..-.-', '¡' => '--...-', ' ' => '/',
        );
     }

     /**
     * Morse encode
     * @param string $str
     * @param array|null $morseDictionary
     * @return string
     */
    public function morse_encode($str, $morseDictionary=array()){
 
        $output = '';    
        if(empty($morseDictionary)){
            $morseDictionary = $this->morsealphabet();
        } else {
            $morseDictionary = $this->morsealphabet($morseDictionary);
        }

        $str = mb_strtolower($str);        
        for ($i = 0; $i < mb_strlen($str); $i++) {
            $key = mb_substr($str, $i, 1);
            if(isset($morseDictionary[$key])){
                $output .= $morseDictionary[$key].' ';
            } else {
                $output .= '# ';
            }
        }
        return trim($output);
    }

    /**
     * Morse decode
     * @param string $morse
     * @param array|null $morseDictionary
     * @return string
     */
    public function morse_decode($morse, $morseDictionary=array()){
 
        $output = '';

        if($morse === ' '){
            return '/';
        }

        if(empty($morseDictionary)){
            $morseDictionary = array_flip($this->morsealphabet());
        } else {
            $morseDictionary = array_flip($this->morsealphabet($morseDictionary));
        }
        
        foreach (explode(' ', $morse) as $value) {
            if(isset($morseDictionary[$value])){
                $output .= $morseDictionary[$value];
            } else {
                $output .= '#';
            }
        }
        return $output;
    }   
}