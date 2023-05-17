var d = document, dColon = 'block', oTemp;
setInterval(function() {
    let t = new Date(), nTemp;
    t.toString().replace(/(\d)(\d):(\d)(\d):(\d)(\d)/, function(m, h0, h1, m0, m1, s0, s1) {
        setNumber('h0-', h0); setNumber('h1-', h1);
        setNumber('m0-', m0); setNumber('m1-', m1);
        setNumber('s0-', s0); setNumber('s1-', s1);
        nTemp = s1;
    });
    document.getElementById('colon').style.display = dColon;
    dColon = (oTemp == nTemp ? 'block' : 'none');
    oTemp = nTemp;
}, 500);