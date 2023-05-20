// Format Digital Number
function setNumber(i, n) {
    for(let p = 0; p < 7; p++) {
        d.getElementById(i + p).style.display = maps[n][p];
    }
}

// Set position of Pointer
function setAnalog(i, oN, n) {
    if(typeof(oN) !== 'undefined') d.getElementById(i + oN).style.display = 'none';
    d.getElementById(i + n).style.display = 'block';
}