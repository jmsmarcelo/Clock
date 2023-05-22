setInterval(function() {
    n = getNow('a');
    if(t[0] != n[0]) setAnalog('hp', 30, n[0]);
    if(t[1] != n[1]) setAnalog('mp', 6, n[1]);
    setAnalog('sp', 6, n[2]);
    t = n;
}, 500);