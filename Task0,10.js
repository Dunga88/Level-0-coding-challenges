let s1 = "house";
let s2 = "computers";

function common_Letter() {
    var dict = {};

    for(var i =0; i < s1.length; i++) {
        dict[s1.charAt(i)] = 1;
    }

    var commonChars = [];
    for(var i=0; i < s2.length; i++) {
        if( dict[s2.charAt(i)] == 1) {
            commonChars.push(s2.charAt(i));
        }
    }

    dict = commonChars.join("");
    console.log(dict);
}

common_Letter();