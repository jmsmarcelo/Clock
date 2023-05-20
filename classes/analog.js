var d = document, h, m, s;

setInterval(function() {
    Date().toString().replace(/(\d{2}):(\d{2}):(\d{2})/, function(match, hh, mm, ss) {
        if(h != hh) setAnalog('hp-', h, hh); h = hh;
        if(m != mm) setAnalog('mp-', m, mm); m = mm;
        setAnalog('sp-', s, ss); s = ss;
    });
}, 1000);