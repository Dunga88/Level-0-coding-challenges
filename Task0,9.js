function vowel(s) {

    var strVowels = "";
    var i;

    for (i in s) {
        if (s.charAt(i) == "a" || s.charAt(i) =="e" || s.charAt(i) == "i" || s.charAt(i) == "o" || s.charAt(i) == "u") {
            strVowels += s.charAt(i);
        }
    }

    i = 0
    for (i in strVowels) {
        console.log(strVowels.charAt(i));
    }

}
vowel('Dungas Gugu Lethu');
