var tM = ['', '', '', '', '', ''],
    maps = [
        [s[1], s[1], s[1], s[0], s[1], s[1], s[1]],
        [s[0], s[0], s[1], s[0], s[0], s[1], s[0]],
        [s[1], s[0], s[1], s[1], s[1], s[0], s[1]],
        [s[1], s[0], s[1], s[1], s[0], s[1], s[1]],
        [s[0], s[1], s[1], s[1], s[0], s[1], s[0]],
        [s[1], s[1], s[0], s[1], s[0], s[1], s[1]],
        [s[1], s[1], s[0], s[1], s[1], s[1], s[1]],
        [s[1], s[0], s[1], s[0], s[0], s[1], s[0]],
        [s[1], s[1], s[1], s[1], s[1], s[1], s[1]],
        [s[1], s[1], s[1], s[1], s[0], s[1], s[1]]
    ];
    
setInterval(function() {
    let nTemp, n = getNow();
    if(tM[0] != n[0]) setNumber('h0-', n[0]);
    if(tM[1] != n[1]) setNumber('h1-', n[1]);
    if(tM[2] != n[2]) setNumber('m0-', n[2]);
    if(tM[3] != n[3]) setNumber('m1-', n[3]);
    if(tM[4] != n[4]) setNumber('s0-', n[4]);
    if(tM[5] != n[5]) setNumber('s1-', n[5]);
    
    nTemp = n[5];
    tM = n;
    d.getElementById('colon').style.display = dColon;
    dColon = (oTemp == nTemp ? s[1] : s[0]);
    oTemp = nTemp;
}, 500);