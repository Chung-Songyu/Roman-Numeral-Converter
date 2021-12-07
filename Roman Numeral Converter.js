function convertToRoman(num) {
    let roman = "";
    if (num.toString().length==4) {
        while (num>=1000) {
            roman = roman.concat("M");
            num = num - 1000;
        };
    };
    if (num.toString().length==3) {
        while (num>=100) {
            roman = roman.concat("C");
            num = num - 100;
        };
    };
    if (num.toString().length==2) {
        while (num>=10) {
            roman = roman.concat("X");
            num = num - 10;
        };
    };
    if (num.toString().length==1) {
        while (num>=1) {
            roman = roman.concat("I");
            num = num - 1;
        };
    };
    roman = roman.replace(/C{9}/g, "CM").replace(/X{9}/g, "XC").replace(/I{9}/g, "IX");
    roman = roman.replace(/C{5}/g, "D").replace(/X{5}/g, "L").replace(/I{5}/g, "V");
    roman = roman.replace(/C{4}/g, "CD").replace(/X{4}/g, "XL").replace(/I{4}/g, "IV");
    return roman;
};

console.log(convertToRoman(3999)); // MMMCMXCIX
