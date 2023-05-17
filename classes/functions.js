var maps = [
    ['block', 'block', 'block', 'none', 'block', 'block', 'block'],
    ['none', 'none', 'block', 'none', 'none', 'block', 'none'],
    ['block', 'none', 'block', 'block', 'block', 'none', 'block'],
    ['block', 'none', 'block', 'block', 'none', 'block', 'block'],
    ['none', 'block', 'block', 'block', 'none', 'block', 'none'],
    ['block', 'block', 'none', 'block', 'none', 'block', 'block'],
    ['block', 'block', 'none', 'block', 'block', 'block', 'block'],
    ['block', 'none', 'block', 'none', 'none', 'block', 'none'],
    ['block', 'block', 'block', 'block', 'block', 'block', 'block'],
    ['block', 'block', 'block', 'block', 'none', 'block', 'block']
];

function setNumber(i, n) {
    for(let p = 0; p < 7; p++) {
        d.getElementById(i + p).style.display = maps[n][p];
    }
}