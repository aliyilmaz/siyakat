/**
 *
 * @package    siyakat.js
 * @version    Release: 1.0.0
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   Encryption Algorithm
 * @link       https://github.com/aliyilmaz/siyakat/javascript
 *
 */

function array_flip( trans ){
    var key, tmp_ar = {};

    for ( key in trans )
    {
        if ( trans.hasOwnProperty( key ) )
        {
            tmp_ar[trans[key]] = key;
        }
    }

    return tmp_ar;
}

function morsealphabet(morseDictionary = []) {
    if (morseDictionary.length !== 0) {
        return morseDictionary;
    }
    return {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'ç': '-.-..', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'ğ': '--.-.', 'h': '....', 'ı': '..', 'i': '.-..-', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'ö': '---.', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 'ş': '.--..', 't': '-', 'u': '..-', 'ü': '..--', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', '¿': '..-.-', '¡': '--...-', ' ': '/',
    };
}

function morse_encode(str, morseDictionary = []) {
    str = str.toLowerCase();
    if (morseDictionary.length !== 0) {
        morseDictionary = morsealphabet(morseDictionary);
    } else {
        morseDictionary = morsealphabet();
    }
    let output = '';
    for (let index = 0; index < str.length; index++) {
        if (isset(morseDictionary[str[index]])) {
            output += morseDictionary[str[index]]+' ';
        } else {
            output += '# ';
        }
    }
    return output.trim();
}

function morse_decode(morse, morseDictionary = []) {
    let output = '';

    if (morse === ' ') {
        return '/';
    }
    if (morseDictionary.length !== 0) {
        morseDictionary = morsealphabet(morseDictionary);
    } else {
        morseDictionary = morsealphabet();
    }
    morseDictionary = array_flip(morseDictionary);
    morse = morse.split(' ');

    for (let index = 0; index < morse.length; index++) {
        if (isset(morseDictionary[morse[index]])) {
            output += morseDictionary[morse[index]];
        } else {
            output += '#';
        }
    }
    return output;
}

function bin2hex(str, hex) {
    try{
        hex = encodeURIComponent(str)
            .split('').map(function (v) {
                return v.charCodeAt(0).toString(16)
            }).join('');
      }
      catch(e){
        hex = '';
        console.log('invalid text input: ' + str);
      }
    return hex;
}

function hex2bin(hex) {
    try{
        str = decodeURIComponent(decodeURIComponent(hex.replace(/(..)/g, '%$1')));
    } catch(e){
        str = '';
        console.log('invalid hex input: ' + hex);
    }
    return str;
}

function siyakat_encode(siyakat, miftah) {
    if(miftah.length == 0){
        return '';
    }

    for (i=0; i < miftah.length; i++) { 
        siyakat = bin2hex(siyakat); // 1
        siyakat = morse_encode(siyakat, miftah[i]); // 2        
    }
    return siyakat;
}

function siyakat_decode(siyakat, miftah) {
    if(miftah.length == 0){
        return '';
    }

    miftah = inverse(miftah);
    for (i=0; i < miftah.length; i++) { 
        siyakat = morse_decode(siyakat, miftah[i]); // 2        
        siyakat = hex2bin(siyakat); // 1
    }
    return siyakat;
}

function inverse(data) {
    
    let revrs;

    if (is_string(data)) {
        revrs = data.split("").reverse().join("");
    }
    
    if(is_array(data)) {
        revrs = data.reverse();
    }

    if (is_object(data)) {
        new_obj = {};
        rev_obj = Object.keys(data).reverse();
        rev_obj.forEach(function(i) { 
            new_obj[i] = data[i];
        })
        return new_obj;
    }

    return revrs;
}

function isset(str){
    if(str === undefined){
        return false;
    } else {
        return true;
    }
}


// They are the methods used for the examples, there is no harm in removing them.
function getContent(element) {
    let content = '',
        elements = document.querySelectorAll(element);
    if (elements.length === 1) {
        elements.forEach(function (element) {
            if(element.value === undefined){
                content = element.innerHTML;
            } else {
                content = element.value;
            }
        });
    }
   
    return content;
}

function changeContent(element, value){
    let elements = document.querySelectorAll(element);
    if(elements.length >= 1){

        elements.forEach(function(element) {
            if(element.value === undefined){
                element.innerHTML = value;
            } else {
                element.value = value;
            }
        });
    }
}

function keyupItem(element, callback){
    let elements = document.querySelectorAll(element);
    for(var i = 0; i<elements.length; i++){
        
        elements[i].addEventListener('keyup', (e) => {   
            if(callback) callback(e.target);
        });

    };
}
