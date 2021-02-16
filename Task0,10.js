function getSameCount(str,str2) {
    var o = {},
        o2 = {};
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] in o) {
            o[str[i]] = parseInt(o[str[i]] + 1)
        } else {
            o2[str[i]] = 0
        }
    }
    console.log(o2);
}

getSameCount('abcd', 'aad')


