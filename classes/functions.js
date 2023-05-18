var s = ['none', 'block'],
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

function setNumber(i, n) {
    for(let p = 0; p < 7; p++) {
        d.getElementById(i + p).style.display = maps[n][p];
    }
}