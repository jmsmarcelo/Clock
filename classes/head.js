var d = document, h, m, s;

Date().toString().replace(/(\d{2}):(\d{2}):(\d{2})/, function(match, hh, mm, ss) {
    h = hh, m = mm, s = ss;
    let style = document.createElement('style');
    style.innerText = `#hp-${hh} { display: block; } #mp-${mm} { display: block; }  #sp-${ss} { display: block; }`;
    d.head.appendChild(style);
});

// Format Digital Number
function setNumber(i, n) {
    for(let p = 0; p < 7; p++) {
        d.getElementById(i + p).style.display = maps[n][p];
    }
}

// Set position of Pointer
function setAnalog(i, oN, n) {
    d.getElementById(i + oN).style.display = 'none';
    d.getElementById(i + n).style.display = 'block';
}