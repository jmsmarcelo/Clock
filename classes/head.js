var d = document, t = [], s = ['none', 'block'], dColon = s[1], oTemp;

function getNow(v) {
    let now = [];
    if(typeof(v) === 'undefined') v = '';
    Date().toString().replace(/(\d)(\d):(\d)(\d):(\d)(\d)/, function(m, hh, h, mm, m, ss, s) {
        if(v == 'a') now = [hh + h, mm + m, ss + s];
        else now = [hh, h, mm, m, ss, s];
    });
    return now;
}
function setNumber(i, n) {
    for(let p = 0; p < 7; p++) {
        d.getElementById(i + p).style.display = maps[n][p];
    }
}
function setAnalog(i, oN, n) {
    d.getElementById(i + oN).style.display = s[0];
    d.getElementById(i + n).style.display = s[1];
}

t = getNow('a');
let style = document.createElement('style');
style.innerText = `#hp-${t[0]} { display: block; } #mp-${t[1]} { display: block; }  #sp-${t[2]} { display: block; }`;
d.head.appendChild(style);