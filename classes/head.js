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
function setAnalog() {
    toDeg();
    setRot('hp', t[0]); setRot('mp', t[1]); setRot('sp', t[2]);
}
function toDeg() {
    t = getNow('a');
    t[0] = ((t[0] * 30) + (t[1] * 0.5));
    t[1] = ((t[1] * 6) + (t[2] * 0.1));
    t[2] = (t[2] * 6);
}
function setRot(i, n) {
    d.getElementById(i).style.transform = 'rotate(' + (n) + 'deg)';
}

toDeg();
let style = document.createElement('style');
style.innerText = `#hp { transform: rotate(${t[0]}deg); } #mp { transform: rotate(${t[1]}deg); } #sp { transform: rotate(${t[2]}deg); }`;
d.head.appendChild(style);