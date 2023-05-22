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
function setAnalog(i, r, n) {
    d.getElementById(i).style.transform = 'rotate(' + (r * n) + 'deg)';
}

t = getNow('a');
let style = document.createElement('style');
style.innerText = `#hp { transform: rotate(${(30 * t[0])}deg); } #mp { transform: rotate(${(6 * t[1])}deg); } #sp { transform: rotate(${(6 * t[2])}deg); }`;
d.head.appendChild(style);