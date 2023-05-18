var d = document, dColon = 'block', oTemp, tM = ['', '', '', '', ''];
setInterval(function() {
    let t = new Date(), nTemp;
    t.toString().replace(/(\d)(\d):(\d)(\d):(\d)(\d)/, function(m, h0, h1, m0, m1, s0, s1) {
        if(tM[0] != h0) setNumber('h0-', h0);
        if(tM[1] != h1) setNumber('h1-', h1);
        if(tM[2] != m0) setNumber('m0-', m0);
        if(tM[3] != m1) setNumber('m1-', m1);
        if(tM[4] != s0) setNumber('s0-', s0);
        setNumber('s1-', s1);
        
        nTemp = s1;
        tM = [h0, h1, m0, m1, s0];
    });
    document.getElementById('colon').style.display = dColon;
    dColon = (oTemp == nTemp ? 'block' : 'none');
    oTemp = nTemp;
}, 500);