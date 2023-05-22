setInterval(function() {
    n = getNow('a');
    if(t[0] != n[0]) setAnalog('hp-', t[0], n[0]);
    if(t[1] != n[1]) setAnalog('mp-', t[1], n[1]);
    setAnalog('sp-', t[2], n[2]);
    t = n;
}, 500);